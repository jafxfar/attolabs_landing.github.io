"use client"

import Image from "next/image"
import { SectionShell } from "@/components/enterprise/section-shell"
import { SectionTag } from "@/components/section-tag"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { ScrollStagger } from "@/components/scroll-stagger"
import { enterpriseTechStack } from "@/lib/enterprise-content"

type TechGroupProps = {
  label: string
  items: string[]
  delay?: number
}

const TechGroup = ({ label, items, delay = 0 }: TechGroupProps) => (
  <ScrollFadeIn delay={delay}>
    <div>
      <span className="text-[10px] tracking-widest uppercase text-black/30 block mb-3">
        {label}
      </span>
      <ScrollStagger className="flex flex-wrap gap-2" staggerMs={40}>
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex px-3 py-1.5 rounded-full text-xs text-black/50 bg-black/[0.04] border border-black/[0.06]"
          >
            {item}
          </span>
        ))}
      </ScrollStagger>
    </div>
  </ScrollFadeIn>
)

export const TechStackSection = () => (
  <SectionShell
    id="technology"
    tag="TECHNOLOGY"
    title={"Enterprise-grade\nplatform ecosystem."}
    description="Modern cloud-native architecture with the tools your technical teams already trust."
    accent
  >
    <ScrollFadeIn scale className="rounded-2xl overflow-hidden border border-black/[0.07] flex flex-col md:block md:relative mb-12">
      <div className="relative w-full h-[280px] md:h-[420px] shrink-0">
        <Image
          src={enterpriseTechStack.architectureImage}
          alt="Enterprise architecture ecosystem"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-3 p-4 md:absolute md:bottom-4 md:left-4 md:p-0 md:w-80">
        <div
          className="rounded-xl border border-white/50 p-5"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            background: "rgba(255,255,255,0.60)",
          }}
        >
          <SectionTag accent>Cloud</SectionTag>
          <p className="mt-3 text-sm text-black/45 leading-relaxed">
            Multi-cloud deployments across {enterpriseTechStack.cloud.join(", ")} with auto-scaling and disaster recovery.
          </p>
        </div>
        <div
          className="rounded-xl border border-white/50 p-5"
          style={{
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            background: "rgba(255,255,255,0.60)",
          }}
        >
          <SectionTag accent>AI / ML</SectionTag>
          <p className="mt-3 text-sm text-black/45 leading-relaxed">
            Production ML pipelines with {enterpriseTechStack.aiMl.slice(0, 3).join(", ")} and more.
          </p>
        </div>
      </div>
    </ScrollFadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
      <TechGroup label="Cloud" items={enterpriseTechStack.cloud} delay={0} />
      <TechGroup label="Backend" items={enterpriseTechStack.backend} delay={80} />
      <TechGroup label="AI / ML" items={enterpriseTechStack.aiMl} delay={160} />
      <TechGroup label="Security" items={enterpriseTechStack.security} delay={240} />
    </div>

    <ScrollFadeIn delay={120}>
      <p className="text-sm text-black/45 leading-relaxed max-w-3xl border-l-2 border-[var(--enterprise-accent)]/40 pl-6">
        {enterpriseTechStack.securityNote}
      </p>
    </ScrollFadeIn>
  </SectionShell>
)
