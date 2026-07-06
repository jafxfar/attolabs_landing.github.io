"use client"

import { TestimonialsColumn } from "@/components/21dev/Testimonials/testimonials"
import { PixelIcon } from "@/components/pixel-icon"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { SectionTag } from "@/components/section-tag"
import { enterpriseTestimonials } from "@/lib/enterprise-content"
import { motion } from "framer-motion"

const testimonials = enterpriseTestimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
  company: t.company,
}))

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

export const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/[0.06] relative"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <ScrollFadeIn scale>
            <PixelIcon type="agents" size={40} />
          </ScrollFadeIn>
          <div className="mt-4">
            <SectionTag accent>Testimonials</SectionTag>
          </div>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl font-light tracking-tight leading-[1.05] mt-6 text-center"
          >
            What Our Clients Say
          </RevealText>
          <RevealLines
            delay={200}
            className="text-center mt-4 text-sm text-black/45 leading-relaxed"
          >
            Trusted by enterprise leaders across finance, healthcare, manufacturing, and more.
          </RevealLines>
        </motion.div>

        <div className="flex justify-center gap-3 mt-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  )
}
