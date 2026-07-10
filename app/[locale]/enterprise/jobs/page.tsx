import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { JobsPageClient } from "@/components/enterprise/jobs-page-client"
import { buildEnterpriseMetadata } from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale }>
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  return buildEnterpriseMetadata(locale, "jobs")
}

const JobsPage = async ({ params }: PageProps) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <JobsPageClient />
}

export default JobsPage
