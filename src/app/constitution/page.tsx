import type { Metadata } from "next";
import ConstitutionClient from "@/components/ConstitutionClient";

export const metadata: Metadata = {
  title: "The Constitution | ExitStudio",
  description:
    "We are not building a portfolio. We are building an engine to propel humanity for the next 1,000 years.",
};

export default function ConstitutionPage() {
  return <ConstitutionClient />;
}
