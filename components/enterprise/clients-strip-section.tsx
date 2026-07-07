"use client"

import { InfiniteSlider } from "@/components/21dev/InfiniteSlider/infinite-slider"
import { PixelIcon } from "@/components/pixel-icon"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { useTranslations } from "next-intl"

const teamPhotos = Array.from({ length: 12 }, (_, i) => ({
  src: `https://cdn.prod.website-files.com/65ae21eab8e90d9757d32cc8/666ad943c22b239e32da437e_Cover%20Atto_0000${String(i + 1).padStart(2, "0")}.webp`,
  alt: `AttoLabs team member ${i + 1}`,
}))

export const ClientsStripSection = () => {
  const t = useTranslations("teamStrip")

  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn scale className="flex justify-center mb-4">
          <PixelIcon type="platform" size={40} />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <p className="text-[10px] tracking-widest uppercase text-black/30 mb-6 text-center">
            {t("label")}
          </p>
        </ScrollFadeIn>
        <ScrollFadeIn delay={100} scale>
          <InfiniteSlider gap={16} speed={40}>
            {teamPhotos.map((photo) => (
              <div
                key={photo.src}
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shrink-0 border border-black/[0.06]"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </InfiniteSlider>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
