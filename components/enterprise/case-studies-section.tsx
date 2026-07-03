"use client"

import { BentoCard } from "@/components/bento-card"
import { SectionShell } from "@/components/enterprise/section-shell"
import { enterpriseCaseStudies } from "@/lib/enterprise-content"

export const CaseStudiesSection = () => (
  <SectionShell
    id="case-studies"
    tag="CASE STUDIES"
    title={"Real results for\nenterprise clients."}
    description="Proven outcomes across finance, healthcare, and manufacturing."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {enterpriseCaseStudies.map((study, index) => (
        <BentoCard key={study.client} className="p-8 flex flex-col" delay={index * 80}>
          <div className="mb-6">
            <span className="text-[10px] tracking-widest uppercase text-black/30 block mb-1">
              {study.industry}
            </span>
            <h3 className="text-xl font-light">{study.client}</h3>
          </div>

          <div className="space-y-4 flex-1 mb-6">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-black/25 block mb-1">
                Challenge
              </span>
              <p className="text-xs text-black/45 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-black/25 block mb-1">
                Solution
              </span>
              <p className="text-xs text-black/45 leading-relaxed">{study.solution}</p>
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase text-black/25 block mb-1">
                Result
              </span>
              <p className="text-xs text-black/45 leading-relaxed">{study.result}</p>
            </div>
          </div>

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
            className="inline-flex items-center justify-center w-full py-3 rounded-xl border border-black/10 text-sm text-black/60 hover:border-black/25 hover:text-black hover:bg-black/[0.04] transition-all tracking-wide"
          >
            Read Full Case Study
          </a>
        </BentoCard>
      ))}
    </div>
  </SectionShell>
)
