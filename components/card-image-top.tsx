"use client"

type CardImageTopProps = {
  src: string
  alt: string
  heightClass?: string
}

export const CardImageTop = ({
  src,
  alt,
  heightClass = "h-48 md:h-56",
}: CardImageTopProps) => (
  <div className={`absolute inset-x-0 top-0 ${heightClass} pointer-events-none`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover object-top"
      style={{
        maskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 30%, transparent 80%)",
      }}
    />
  </div>
)
