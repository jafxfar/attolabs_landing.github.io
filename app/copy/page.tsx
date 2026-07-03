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

export const CopyPage = () => {
  const [heroReady, setHeroReady] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  const handleIntroDone = useCallback(() => {
    setHeroReady(true)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), HERO_REVEAL_MS)
    return () => clearTimeout(t)
  }, [])

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
      <EnterpriseFooter />
    </div>
  )
}

export default CopyPage