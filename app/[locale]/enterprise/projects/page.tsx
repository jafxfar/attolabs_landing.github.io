import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { ProjectsPageClient } from "@/components/enterprise/projects-page-client"
import { buildEnterpriseMetadata } from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale }>
}

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale } = await params
  return buildEnterpriseMetadata(locale, "projects")
}

const ProjectsPage = async ({ params }: PageProps) => {
  const { locale } = await params
  setRequestLocale(locale)
  return <ProjectsPageClient />
}

export default ProjectsPage
