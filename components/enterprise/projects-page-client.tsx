"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { RevealText } from "@/components/reveal-text"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import { enterpriseCaseStudies } from "@/lib/enterprise-content"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"

export const ProjectsPageClient = () => (
  <div
    className="enterprise-theme min-h-screen font-sans antialiased overflow-x-hidden"
    style={{
      ...enterpriseThemeStyle,
      backgroundColor: enterpriseTheme.bg,
      color: enterpriseTheme.text,
    }}
  >
    <EnterpriseNav />

    <main className="pt-28 pb-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/enterprise"
          className="inline-flex items-center gap-2 text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Enterprise
        </Link>

        <SectionTag accent>All Projects</SectionTag>
        <RevealText
          as="h1"
          className="text-4xl md:text-5xl font-light tracking-tight leading-[1.05] mt-6 mb-16"
        >
          Enterprise Case Studies
        </RevealText>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-3"
          onMouseMove={handleBentoMouseMove}
        >
          {enterpriseCaseStudies.map((study, index) => (
            <BentoCard
              key={study.client}
              className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
              delay={index * 80}
            >
              {study.image && (
                <div className="relative h-48 md:h-56 w-full">
                  <Image
                    src={study.image}
                    alt={study.client}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col flex-1 p-8">
                <span className="text-[10px] tracking-widest uppercase text-[var(--enterprise-accent)]/60 block mb-2">
                  {study.industry}
                </span>
                <h2 className="text-2xl font-light tracking-tight mb-4">{study.client}</h2>
                <p className="text-sm text-black/45 leading-relaxed flex-1 mb-6">
                  {study.result}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex px-2.5 py-1 rounded-full text-[10px] tracking-wide text-black/50 bg-black/[0.04] border border-black/[0.06]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                <a
                  href={study.href}
                  className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-black/10 text-sm text-black/60 hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.04] transition-all tracking-wide"
                >
                  Read Case Study
                </a>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </main>

    <EnterpriseFooter />
  </div>
)
