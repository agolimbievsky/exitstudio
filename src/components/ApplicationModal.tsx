"use client";

import { useEffect, useRef, useState } from "react";

interface FormData {
  firstName: string;
  company: string;
  companyWebsite: string;
  email: string;
  phone: string;
  monthlyRevenue: string;
  businessModel: string;
  bottleneck: string;
}

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData: FormData = {
  firstName: "",
  company: "",
  companyWebsite: "",
  email: "",
  phone: "",
  monthlyRevenue: "",
  businessModel: "",
  bottleneck: "",
};

// Every field except phone is required. The form uses noValidate (to keep the
// custom email error styling), so we validate these in JS. Order matches the
// visual field order, so "first empty" focuses the topmost incomplete field.
const REQUIRED_FIELDS: { name: keyof FormData; label: string }[] = [
  { name: "firstName", label: "First Name" },
  { name: "company", label: "Company" },
  { name: "companyWebsite", label: "Company website" },
  { name: "email", label: "Email" },
  { name: "monthlyRevenue", label: "Current monthly revenue" },
  { name: "businessModel", label: "Business model" },
  { name: "bottleneck", label: "What's bottlenecking your growth" },
];

const labelClass =
  "mb-2 block font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-gray";

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-muted-dark">
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ApplicationModal({
  isOpen,
  onClose,
}: ApplicationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Mount/unmount with animation timing
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setShow(true))
      );
      return () => cancelAnimationFrame(raf);
    } else {
      setShow(false);
      const t = setTimeout(() => {
        setMounted(false);
        setFormData(initialFormData);
        setStatus("idle");
        setEmailError("");
        setFormError("");
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape key, scroll lock, focus trap + restore.
  // Gate on `mounted` so the dialog panel (scrollRef) is in the DOM before we
  // try to move focus into it.
  useEffect(() => {
    if (!isOpen || !mounted) return;

    // Remember what had focus, then move focus into the dialog.
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    const focusables = () =>
      Array.from(
        scrollRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ) ?? []
      ).filter((el) => el.offsetParent !== null);

    const focusFirst = requestAnimationFrame(() => focusables()[0]?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const els = focusables();
        if (els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        const active = document.activeElement as HTMLElement;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(focusFirst);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      // Restore focus to the element that opened the dialog.
      triggerRef.current?.focus?.();
    };
  }, [isOpen, mounted, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmailError("");
    if (formError) setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Required-field check. Focus the first empty field and show a clear
    // message, rather than submitting and getting a generic server 400.
    const firstEmpty = REQUIRED_FIELDS.find((f) => !formData[f.name].trim());
    if (firstEmpty) {
      setFormError(`Please complete the "${firstEmpty.label}" field.`);
      scrollRef.current
        ?.querySelector<HTMLElement>(`[name="${firstEmpty.name}"]`)
        ?.focus();
      return;
    }
    setFormError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      if (scrollRef.current) scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  };

  if (!mounted) return null;

  const inputClass =
    "w-full rounded-md bg-[#0E0E0E] px-4 py-3 font-body text-sm text-white placeholder:text-muted-dark/40 border transition-colors duration-200 focus:outline-none focus:border-white";

  return (
    <>
      {/* Backdrop - visual only */}
      <div
        className={`fixed inset-0 z-50 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Click trap + layout */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Apply to ExitStudio"
        onClick={onClose}
      >
        <div
          ref={scrollRef}
          className={`relative max-h-[92vh] w-full max-w-[520px] overflow-y-auto rounded-lg border-t-2 border-gray bg-[#161616] shadow-2xl transition-all duration-300 ${
            show ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-md text-muted-dark transition-colors hover:text-white"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="px-8 py-10 sm:px-10 sm:py-12">
            {status === "success" ? (
              /* ── Success State ── */
              <div className="py-10 text-center">
                <div className="mx-auto mb-10 h-px w-12 bg-gray" />
                <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
                  We&rsquo;ll be in touch.
                </h2>
                <p className="mx-auto mt-6 max-w-sm font-body text-sm leading-relaxed text-muted-dark">
                  We review every application personally. If there&rsquo;s a
                  fit, we&rsquo;ll reach out within a few business days. If not,
                  we&rsquo;ll tell you why.
                </p>
                <button
                  onClick={onClose}
                  className="mt-10 font-body text-sm text-muted-dark underline underline-offset-4 transition-colors hover:text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              /* ── Form State ── */
              <>
                <div className="mb-8 h-px w-12 bg-gray" />
                <h2 className="font-display text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                  Apply to partner with ExitStudio.
                </h2>

                {/* Pre-qualifier */}
                <p className="mt-4 font-body text-sm leading-relaxed text-muted-dark">
                  We work with businesses that already have product-market fit,
                  typically doing $100K or more per month, and bottlenecked by
                  execution rather than demand. If that&rsquo;s you, we want to
                  hear from you.
                </p>

                <form onSubmit={handleSubmit} className="mt-9 space-y-5" noValidate>
                  {/* First Name */}
                  <div>
                    <label className={labelClass}>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`${inputClass} border-white/15`}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className={labelClass}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className={`${inputClass} border-white/15`}
                    />
                  </div>

                  {/* Company website */}
                  <div>
                    <label className={labelClass}>Company website</label>
                    <input
                      type="text"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      required
                      inputMode="url"
                      placeholder="yourcompany.com"
                      className={`${inputClass} border-white/15`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelClass}>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${inputClass} ${
                        emailError ? "border-red-400/60" : "border-white/15"
                      }`}
                    />
                    {emailError && (
                      <p className="mt-1.5 font-body text-xs text-red-400">
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelClass}>
                      Phone{" "}
                      <span className="ml-1 font-body text-xs font-normal tracking-normal text-muted-dark/70 normal-case">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClass} border-white/15`}
                    />
                  </div>

                  {/* Monthly Revenue */}
                  <div>
                    <label className={labelClass}>Current monthly revenue</label>
                    <SelectWrapper>
                      <select
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none border-white/15 pr-10`}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="under-25k">Under $25K / month</option>
                        <option value="25k-100k">$25K to $100K / month</option>
                        <option value="100k-500k">$100K to $500K / month</option>
                        <option value="500k-1m">$500K to $1M / month</option>
                        <option value="1m+">$1M+ / month</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Business Model */}
                  <div>
                    <label className={labelClass}>Business model</label>
                    <SelectWrapper>
                      <select
                        name="businessModel"
                        value={formData.businessModel}
                        onChange={handleChange}
                        required
                        className={`${inputClass} appearance-none border-white/15 pr-10`}
                      >
                        <option value="" disabled>
                          Select one
                        </option>
                        <option value="saas">SaaS / Software</option>
                        <option value="dtc">DTC / Ecommerce</option>
                        <option value="service">Service business</option>
                        <option value="agency">Agency</option>
                        <option value="other">Other</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Bottleneck */}
                  <div>
                    <label className={labelClass}>
                      What&rsquo;s bottlenecking your growth right now?
                    </label>
                    <textarea
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      required
                      placeholder="Be specific. This is the most important thing we'll read."
                      style={{ minHeight: "120px" }}
                      className={`${inputClass} resize-none border-white/15`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-md bg-white py-4 font-body text-sm font-semibold tracking-wide text-ink transition-all hover:bg-stone disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        "Submit application"
                      )}
                    </button>

                    {formError && (
                      <p className="mt-4 text-center font-body text-xs leading-relaxed text-red-400">
                        {formError}
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-center font-body text-xs leading-relaxed text-red-400">
                        Something went wrong. Please try again or email us
                        directly.
                      </p>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
