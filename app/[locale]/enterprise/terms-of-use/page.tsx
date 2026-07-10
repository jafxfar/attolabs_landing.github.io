import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { LegalPageClient } from "@/components/enterprise/legal-page-client"
import { buildEnterpriseMetadata } from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale }>
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  return buildEnterpriseMetadata(locale, "terms")
}

const TermsPage = async ({ params }: PageProps) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <LegalPageClient kind="terms" />
}

export default TermsPage
