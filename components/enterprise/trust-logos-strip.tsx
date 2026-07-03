"use client"

import Image from "next/image"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { enterpriseHero } from "@/lib/enterprise-content"

export const TrustLogosStrip = () => (
  <section className="py-12 px-6 md:px-12 lg:px-20 border-b border-black/[0.06]">
    <div className="max-w-6xl mx-auto">
      <ScrollFadeIn>
        <p className="text-[10px] tracking-widest uppercase text-black/30 mb-8 text-center">
          Trusted by enterprise leaders
        </p>
      </ScrollFadeIn>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
        {enterpriseHero.clientLogos.map((logo, index) => (
          <ScrollFadeIn key={logo.name} delay={index * 60}>
            <div className="opacity-40 hover:opacity-70 transition-opacity duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={28}
                className="h-7 w-auto object-contain"
              />
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  </section>
)
