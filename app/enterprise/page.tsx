import type { Metadata } from "next"
import { EnterprisePageClient } from "@/components/enterprise/enterprise-page-client"

export const metadata: Metadata = {
  title: "Enterprise Solutions — Digital Transformation at Scale",
  description:
    "Modernize systems, reduce costs, and accelerate growth with enterprise application development, cloud, data, and security solutions.",
  openGraph: {
    title: "Enterprise Solutions — Digital Transformation at Scale",
    description:
      "Modernize systems, reduce costs, and accelerate growth with enterprise application development, cloud, data, and security solutions.",
    type: "website",
  },
}

const EnterprisePage = () => <EnterprisePageClient />

export default EnterprisePage
