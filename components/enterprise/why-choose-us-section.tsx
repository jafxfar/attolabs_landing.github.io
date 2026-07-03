"use client"

import {
  Award,
  Zap,
  Brain,
  Layers,
  Headphones,
  type LucideIcon,
} from "lucide-react"
import { BentoCard } from "@/components/bento-card"
import { SectionShell } from "@/components/enterprise/section-shell"
import {
  enterpriseDifferentiators,
  type Differentiator,
} from "@/lib/enterprise-content"

const iconMap: Record<Differentiator["icon"], LucideIcon> = {
  award: Award,
  zap: Zap,
  brain: Brain,
  layers: Layers,
  headphones: Headphones,
}

export const WhyChooseUsSection = () => (
  <SectionShell
    id="why-us"
    tag="WHY US"
    title={"Why enterprise leaders\nchoose us."}
    description="Differentiators that matter when stakes are high and timelines are tight."
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {enterpriseDifferentiators.map((item, index) => {
        const Icon = iconMap[item.icon]
        return (
          <BentoCard
            key={item.title}
            className="p-6 flex flex-col items-start text-left min-h-[200px]"
            delay={index * 60}
          >
            <div className="w-10 h-10 rounded-xl border border-black/10 flex items-center justify-center mb-4">
              <Icon className="w-[18px] h-[18px] text-black/60" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-light mb-2 leading-snug">{item.title}</h3>
            <p className="text-xs text-black/40 leading-relaxed">{item.description}</p>
          </BentoCard>
        )
      })}
    </div>
  </SectionShell>
)
