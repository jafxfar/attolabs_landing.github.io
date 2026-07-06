"use client"

import { BentoCard } from "@/components/bento-card"
import { CardImageTop } from "@/components/card-image-top"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { ScrollStagger } from "@/components/scroll-stagger"
import { SectionTag } from "@/components/section-tag"
import { handleBentoMouseMove } from "@/lib/bento-mouse"
import {
  enterpriseApproach,
  enterpriseProblems,
  enterpriseSolution,
} from "@/lib/enterprise-content"

export const ProblemSolutionSection = () => (
  <section id="approach" className="py-16 px-6 md:px-12 lg:px-20">
    <div className="max-w-6xl mx-auto mb-8">
      <ScrollFadeIn scale>
        <PixelIcon type="workflow" size={40} />
      </ScrollFadeIn>
      <div className="mt-4">
        <SectionTag accent>APPROACH</SectionTag>
      </div>
      <RevealText className="mt-5 text-3xl md:text-4xl font-light tracking-tight leading-[1.05]">
        {"From challenge\nto measurable outcome."}
      </RevealText>
    </div>
    <div
      className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3"
      onMouseMove={handleBentoMouseMove}
    >
      <BentoCard
        className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
        delay={0}
      >
        <CardImageTop
          src={enterpriseApproach.problemImage}
          alt="Enterprise challenges"
        />
        <div className="relative z-10 flex flex-col justify-between flex-1 px-8 pb-8 pt-20 mt-auto">
          <div>
            <RevealText
              as="h3"
              className="text-2xl font-light mb-6 tracking-tight"
            >
              Problem & Solution
            </RevealText>
            <ScrollStagger className="space-y-4" staggerMs={60}>
              {enterpriseProblems.map((problem) => (
                <li
                  key={problem.title}
                  className="flex items-start gap-3 text-sm text-black/55 list-none"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--enterprise-accent)]/50 shrink-0 mt-2" />
                  {problem.title}
                </li>
              ))}
            </ScrollStagger>
          </div>
          <a
            href={enterpriseSolution.cta.href}
            className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 border border-black/15 text-black/70 text-sm rounded-xl hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.03] transition-all tracking-wide"
          >
            {enterpriseSolution.cta.label}
          </a>
        </div>
      </BentoCard>

      <BentoCard
        className="relative overflow-hidden flex flex-col min-h-[420px] p-0"
        delay={80}
      >
        <CardImageTop
          src={enterpriseApproach.solutionImage}
          alt="Enterprise solutions"
        />
        <div className="relative z-10 flex flex-col justify-between flex-1 px-8 pb-8 pt-20 mt-auto">
          <div>
            <RevealText as="h3" className="text-2xl font-light mb-6 tracking-tight">
              Solutions
            </RevealText>
            <ScrollStagger className="space-y-4" staggerMs={60}>
              {enterpriseSolution.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-sm text-black/55 list-none"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--enterprise-accent)]/50 shrink-0 mt-2" />
                  {outcome}
                </li>
              ))}
            </ScrollStagger>
          </div>
          <a
            href={enterpriseSolution.cta.href}
            className="mt-8 inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide"
          >
            {enterpriseSolution.cta.label}
          </a>
        </div>
      </BentoCard>
    </div>
  </section>
)
