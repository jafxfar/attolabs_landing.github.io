import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { EnterprisePageClient } from "@/components/enterprise/enterprise-page-client"
import {
  buildEnterpriseMetadata,
  buildOrganizationJsonLd,
} from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale }>
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  return buildEnterpriseMetadata(locale, "home")
}

const EnterprisePage = async ({ params }: PageProps) => {
  const { locale } = await params
  setRequestLocale(locale)
  const jsonLd = buildOrganizationJsonLd(locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EnterprisePageClient />
    </>
  )
}

export default EnterprisePage
