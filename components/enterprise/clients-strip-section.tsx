"use client"

import { LogoCloud } from "@/components/21dev/Clients/client"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { enterpriseHero } from "@/lib/enterprise-content"

const logos = enterpriseHero.clientLogos.map((logo) => ({
  src: logo.src,
  alt: logo.name,
}))

export const ClientsStripSection = () => (
  <section className="py-12 px-6 md:px-12 lg:px-20 border-b border-black/[0.06]">
    <div className="max-w-6xl mx-auto">
      <ScrollFadeIn>
        <p className="text-[10px] tracking-widest uppercase text-black/30 mb-6 text-center">
          Trusted by enterprise leaders
        </p>
      </ScrollFadeIn>
      <ScrollFadeIn delay={100} scale>
        <LogoCloud logos={logos} />
      </ScrollFadeIn>
    </div>
  </section>
)
