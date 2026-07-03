"use client"

import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { enterpriseHero } from "@/lib/enterprise-content"

type HeroSectionProps = {
  heroReady: boolean
  videoReady: boolean
}

const revealStyle = (ready: boolean, delay = 0) => ({
  opacity: ready ? 1 : 0,
  filter: ready ? "blur(0px)" : "blur(24px)",
  transform: ready ? "translateY(0px)" : "translateY(32px)",
  transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
})

export const HeroSection = ({ heroReady, videoReady }: HeroSectionProps) => (
  <section id="hero" className="relative min-h-screen overflow-hidden">
    <video
      autoPlay
      loop
      muted
      playsInline
      poster={enterpriseHero.image}
      className="absolute inset-0 w-full h-full object-cover z-0"
      src={enterpriseHero.videoSrc}
      style={{
        transform: videoReady ? "scale(1.05)" : "scale(0.85)",
        transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    />

    <div
      className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
      style={{
        height: "65%",
        background:
          "linear-gradient(to top, #F5F4F0 0%, #F5F4F0 18%, rgba(245,244,240,0.85) 35%, rgba(245,244,240,0.5) 55%, rgba(245,244,240,0.15) 75%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
      style={{
        height: "20%",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
      style={{
        height: "38%",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
    <div
      className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
      style={{
        height: "55%",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />

    <div className="h-24" />

    <div className="relative z-30 px-6 md:px-12 lg:px-20 min-h-[calc(100vh-6rem)] flex items-end pb-16">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end">
        <div className="flex flex-col justify-end">
          <RevealText
            as="h1"
            visible={heroReady}
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#111] leading-[1.05] tracking-tight mb-6"
            stagger={60}
            delay={0}
          >
            {enterpriseHero.headline}
          </RevealText>

          <RevealLines
            visible={heroReady}
            delay={200}
            className="text-base md:text-lg text-black/50 leading-relaxed max-w-xl mb-10"
          >
            {enterpriseHero.subheadline}
          </RevealLines>

          <div
            className="flex flex-col sm:flex-row gap-3"
            style={revealStyle(heroReady, 400)}
          >
            <a
              href={enterpriseHero.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--enterprise-accent)] text-white text-sm rounded-xl hover:bg-[var(--enterprise-accent-hover)] transition-colors tracking-wide font-medium"
            >
              {enterpriseHero.primaryCta.label}
            </a>
            <a
              href={enterpriseHero.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-black/15 text-black/70 text-sm rounded-xl hover:border-[var(--enterprise-accent)]/40 hover:text-black hover:bg-black/[0.03] transition-all tracking-wide"
            >
              {enterpriseHero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </div>
  </section>
)
