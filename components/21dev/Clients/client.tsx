import { InfiniteSlider } from "@/components/21dev/InfiniteSlider/infinite-slider"
import { ProgressiveBlur } from "@/components/21dev/ProgressiveBlur/progressive-blur"
import type { ComponentProps } from "react"

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = ComponentProps<"div"> & {
  logos: Logo[]
}

export const LogoCloud = ({ logos }: LogoCloudProps) => {
  return (
    <div className="relative mx-auto max-w-6xl py-6 overflow-hidden">
      <div className="absolute inset-x-0 -top-px pointer-events-none border-t border-black/[0.06]" />

      <InfiniteSlider gap={42} reverse speed={60} speedOnHover={20}>
        {logos.map((logo) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-5 select-none md:h-6 opacity-40 hover:opacity-70 transition-opacity duration-300"
            height="auto"
            key={`logo-${logo.alt}`}
            loading="lazy"
            src={logo.src}
            width="auto"
          />
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px] md:w-[160px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px] md:w-[160px]"
        direction="right"
      />

      <div className="absolute inset-x-0 -bottom-px pointer-events-none border-b border-black/[0.06]" />
    </div>
  )
}
