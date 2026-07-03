type ProgressiveBlurProps = {
  className?: string
  direction?: "left" | "right"
  blurIntensity?: number
}

export const ProgressiveBlur = ({
  className = "",
  direction = "left",
}: ProgressiveBlurProps) => {
  const gradientClass =
    direction === "left"
      ? "bg-gradient-to-r from-[#F5F4F0] to-transparent"
      : "bg-gradient-to-l from-[#F5F4F0] to-transparent"

  return <div className={`${gradientClass} ${className}`} aria-hidden />
}
