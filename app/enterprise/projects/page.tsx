import type { Metadata } from "next"
import { ProjectsPageClient } from "@/components/enterprise/projects-page-client"

export const metadata: Metadata = {
  title: "Projects — ATTOLABS Enterprise",
  description:
    "Explore enterprise software projects across finance, healthcare, manufacturing, and more.",
  openGraph: {
    title: "Projects — ATTOLABS Enterprise",
    description:
      "Explore enterprise software projects across finance, healthcare, manufacturing, and more.",
    type: "website",
  },
}

const ProjectsPage = () => <ProjectsPageClient />

export default ProjectsPage
