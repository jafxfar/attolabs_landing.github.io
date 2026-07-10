import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { JobDetailPageClient } from "@/components/enterprise/job-detail-page-client"
import {
  attolabsLocales,
  getJobBySlug,
  getJobs,
} from "@/lib/attolabs/content"
import { buildEnterpriseMetadata } from "@/lib/attolabs/seo"
import type { AttolabsLocale } from "@/lib/attolabs/types"

type PageProps = {
  params: Promise<{ locale: AttolabsLocale; slug: string }>
}

export const generateStaticParams = () =>
  attolabsLocales.flatMap((locale) =>
    getJobs(locale).map((job) => ({
      locale,
      slug: job.slug,
    }))
  )

export const generateMetadata = async ({
  params,
}: PageProps): Promise<Metadata> => {
  const { locale, slug } = await params
  const job = getJobBySlug(locale, slug)
  if (!job) return buildEnterpriseMetadata(locale, "jobs")
  return buildEnterpriseMetadata(locale, "jobDetail", {
    title: `${job.title} - AttoLabs`,
    description: job.about,
    path: `/jobs/${job.slug}`,
  })
}

const JobDetailPage = async ({ params }: PageProps) => {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const job = getJobBySlug(locale, slug)
  if (!job) notFound()
  return <JobDetailPageClient job={job} />
}

export default JobDetailPage
