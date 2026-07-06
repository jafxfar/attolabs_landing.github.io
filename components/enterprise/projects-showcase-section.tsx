"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProjectShowcaseCard } from "@/components/enterprise/project-showcase-card"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import {
  enterpriseFeaturedProjects,
  enterpriseProjectsCta,
} from "@/lib/enterprise-content"

export const ProjectsShowcaseSection = () => (
  <section id="case-studies" className="border-t border-black/[0.06] overflow-x-hidden">
    <div className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto mb-4">
        <ScrollFadeIn scale>
          <PixelIcon type="workflow" size={40} />
        </ScrollFadeIn>
        <div className="mt-4">
          <SectionTag accent>Projects</SectionTag>
        </div>
        <RevealText
          as="h2"
          className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.05] mt-6"
        >
          Our Projects
        </RevealText>
      </div>
    </div>

    {enterpriseFeaturedProjects.map((project, index) => (
      <ProjectShowcaseCard key={project.id} project={project} index={index} />
    ))}

    <div className="pb-24 px-9 pt-4 md:px-12 lg:px-20">
      <ScrollFadeIn delay={200} className="max-w-7xl mx-auto flex justify-center">
        <Link
          href={enterpriseProjectsCta.href}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide font-light"
        >
          {enterpriseProjectsCta.label}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </ScrollFadeIn>
    </div>
  </section>
)
