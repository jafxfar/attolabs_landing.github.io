"use client"

import { useCallback, useEffect, useState } from "react"
import { IntroAnimation, HERO_REVEAL_MS } from "@/components/intro-animation"
import { EnterpriseNav } from "@/components/enterprise/enterprise-nav"
import { HeroSection } from "@/components/enterprise/hero-section"
import { ClientsStripSection } from "@/components/enterprise/clients-strip-section"
import { ProblemSolutionSection } from "@/components/enterprise/problem-solution-section"
import { SolutionsGridSection } from "@/components/enterprise/solutions-grid-section"
import { IndustriesWhyUsSection } from "@/components/enterprise/industries-why-us-section"
import { ProjectsShowcaseSection } from "@/components/enterprise/projects-showcase-section"
import { TechStackSection } from "@/components/enterprise/tech-stack-section"
import { EnterpriseFooter } from "@/components/enterprise/enterprise-footer"
import AboutUsSection from "@/components/21dev/about-us"
import { TestimonialsSection } from "@/components/21dev/Testimonials/use"
import { enterpriseTheme, enterpriseThemeStyle } from "@/lib/enterprise-theme"

export const EnterprisePageClient = () => {
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), HERO_REVEAL_MS)
    return () => clearTimeout(t)
  }, [])
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false) 


  return (
    <div
      className="enterprise-theme min-h-screen font-sans antialiased"
      style={{
        ...enterpriseThemeStyle,
        backgroundColor: enterpriseTheme.bg,
        color: enterpriseTheme.text,
      }}
    >
      <IntroAnimation onDone={handleIntroDone} />
      <EnterpriseNav />
      <HeroSection heroReady={heroReady} videoReady={videoReady} />
      <ClientsStripSection />
      <ProblemSolutionSection />
      <SolutionsGridSection />
      <IndustriesWhyUsSection />
      <ProjectsShowcaseSection />
      <TestimonialsSection />
      <TechStackSection />
      <AboutUsSection />
      <section className="relative py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] overflow-hidden">
        {/* Glass panels image — anchored to bottom center */}
        <img
          src="/images/footer.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full object-cover object-bottom pointer-events-none select-none"
          style={{ opacity: 0.85 }}
        />
        {/* Progressive blur from bottom — blends into site bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 55%)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
        />
        {/* Colour fade from bottom to site bg #f5f4f0 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgb(245,244,240) 0%, rgba(245,244,240,0.92) 18%, rgba(245,244,240,0.55) 35%, transparent 55%)",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05] mb-6">
            Start building your<br />agent workforce.
          </h2>
          <p className="text-sm text-black/45 leading-relaxed mb-10">
            Join thousands of teams deploying AI agents that work around the clock, across every timezone.
          </p>
          {!submitted ? (
            <form
              onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 bg-white border border-black/10 rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-black/25 focus:outline-none focus:border-black/25 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#111] text-white text-sm rounded-xl hover:bg-[#333] transition-colors tracking-widest font-medium"
              >
                JOIN
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-600/20 bg-emerald-50 text-emerald-700 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {"You're on the list. We'll be in touch."}
            </div>
          )}
        </div>
      </section>
      <EnterpriseFooter />
    </div>
  )
}
