import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { ProjectDetailPageClient } from "@/components/enterprise/project-detail-page-client"
import {
  attolabsLocales,
  getProjectBySlug,
  getProjects,
} from "@/lib/attolabs/content"
import { buildEnterpriseMetadata } from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale; slug: string }>
}

export const generateStaticParams = () =>
  attolabsLocales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      locale,
      slug: project.slug,
    }))
  )

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, slug } = await params
  const project = getProjectBySlug(locale, slug)
  if (!project) return buildEnterpriseMetadata(locale, "projects")
  return buildEnterpriseMetadata(locale, "projectDetail", {
    title: `${project.title} - AttoLabs`,
    description: project.description,
    path: `/projects/${project.slug}`,
  })
}

const ProjectDetailPage = async ({ params }: PageProps) => {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const project = getProjectBySlug(locale, slug)
  if (!project) notFound()
  return <ProjectDetailPageClient project={project} />
}

export default ProjectDetailPage
