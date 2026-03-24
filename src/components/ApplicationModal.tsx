"use client";

import { useEffect, useRef, useState } from "react";

interface FormData {
  firstName: string;
  company: string;
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
  email: "",
  phone: "",
  monthlyRevenue: "",
  businessModel: "",
  bottleneck: "",
};

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className="text-muted-dark"
        >
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
  const scrollRef = useRef<HTMLDivElement>(null);

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
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // Escape key + scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
    "w-full rounded-sm bg-warm-black px-4 py-3 font-sans text-sm text-text-on-dark placeholder:text-muted-dark/40 border transition-colors duration-200 focus:outline-none focus:border-gold";

  return (
    <>
      {/* Backdrop — visual only */}
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
          className={`relative w-full max-w-[520px] max-h-[92vh] overflow-y-auto rounded-sm bg-warm-black-light border-t-2 border-gold shadow-2xl transition-all duration-300 ${
            show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-3"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex h-8 w-8 items-center justify-center rounded-sm text-muted-dark transition-colors hover:text-text-on-dark"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1L13 13M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="px-8 py-10 sm:px-10 sm:py-12">
            {status === "success" ? (
              /* ── Success State ── */
              <div className="py-10 text-center">
                <div className="gold-rule mx-auto mb-10" />
                <h2 className="font-serif text-3xl font-medium leading-snug text-text-on-dark sm:text-4xl">
                  We&rsquo;ll be in touch.
                </h2>
                <p className="mx-auto mt-6 max-w-sm font-sans text-sm leading-relaxed text-muted-dark">
                  We review every application personally. If there&rsquo;s a
                  fit, we&rsquo;ll reach out within a few business days. If not,
                  we&rsquo;ll tell you why.
                </p>
                <button
                  onClick={onClose}
                  className="mt-10 font-sans text-sm text-muted-dark underline underline-offset-4 transition-colors hover:text-text-on-dark"
                >
                  Close
                </button>
              </div>
            ) : (
              /* ── Form State ── */
              <>
                <div className="gold-rule mb-8" />
                <h2 className="font-serif text-2xl font-medium text-text-on-dark sm:text-3xl">
                  Apply to partner with ExitStudio.
                </h2>

                {/* Pre-qualifier */}
                <p className="mt-4 font-sans text-sm leading-relaxed text-muted-dark">
                  We work with businesses that already have product-market fit,
                  typically doing $100K or more per month, and bottlenecked by
                  execution rather than demand. If that&rsquo;s you, we want to
                  hear from you.
                </p>

                <form onSubmit={handleSubmit} className="mt-9 space-y-5" noValidate>
                  {/* First Name */}
                  <div>
                    <label className="label mb-2 block">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={`${inputClass} border-warm-black/80`}
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="label mb-2 block">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className={`${inputClass} border-warm-black/80`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="label mb-2 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`${inputClass} ${
                        emailError
                          ? "border-red-400/60"
                          : "border-warm-black/80"
                      }`}
                    />
                    {emailError && (
                      <p className="mt-1.5 font-sans text-xs text-red-400">
                        {emailError}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="label mb-2 block">
                      Phone{" "}
                      <span className="ml-1 font-sans text-xs normal-case tracking-normal font-normal text-muted-dark/70">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`${inputClass} border-warm-black/80`}
                    />
                  </div>

                  {/* Monthly Revenue */}
                  <div>
                    <label className="label mb-2 block">
                      Current monthly revenue
                    </label>
                    <SelectWrapper>
                      <select
                        name="monthlyRevenue"
                        value={formData.monthlyRevenue}
                        onChange={handleChange}
                        required
                        className={`${inputClass} border-warm-black/80 appearance-none pr-10`}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        <option value="under-25k">Under $25K / month</option>
                        <option value="25k-100k">$25K – $100K / month</option>
                        <option value="100k-500k">$100K – $500K / month</option>
                        <option value="500k-1m">$500K – $1M / month</option>
                        <option value="1m+">$1M+ / month</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Business Model */}
                  <div>
                    <label className="label mb-2 block">Business model</label>
                    <SelectWrapper>
                      <select
                        name="businessModel"
                        value={formData.businessModel}
                        onChange={handleChange}
                        required
                        className={`${inputClass} border-warm-black/80 appearance-none pr-10`}
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
                    <label className="label mb-2 block">
                      What&rsquo;s bottlenecking your growth right now?
                    </label>
                    <textarea
                      name="bottleneck"
                      value={formData.bottleneck}
                      onChange={handleChange}
                      required
                      placeholder="Be specific. This is the most important thing we'll read."
                      style={{ minHeight: "120px" }}
                      className={`${inputClass} border-warm-black/80 resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full rounded-sm bg-cream py-4 font-sans text-sm font-medium tracking-wide text-warm-black transition-all hover:bg-cream-dark disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status === "loading" ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="3"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Sending…
                        </span>
                      ) : (
                        "Submit application"
                      )}
                    </button>

                    {status === "error" && (
                      <p className="mt-4 text-center font-sans text-xs leading-relaxed text-red-400">
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
