"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import type { ShowcaseProject } from "@/lib/enterprise-content"

type ProjectShowcaseCardProps = {
  project: ShowcaseProject
  index: number
}

export const ProjectShowcaseCard = ({ project, index }: ProjectShowcaseCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.02])

  return (
    <div ref={cardRef} className="w-full flex items-center py-3 md:py-2 px-4 overflow-hidden">
      <ScrollFadeIn scale className="w-full overflow-hidden">
        <Link
          href={project.href}
          aria-label={`View project: ${project.title}`}
          className="group block relative w-full aspect-video overflow-hidden bg-[#111] rounded-4xl"
        >
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{ y: imageY, scale: imageScale }}
          >
            <Image
              src={project.mockupImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100%, 1280px"
              priority={index === 0}
            />
          </motion.div>

          <div
            className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"
            aria-hidden
          />

          <div className="absolute inset-0 z-10 flex flex-col p-6 md:p-10 lg:p-14 max-w-7xl mx-auto w-full">
            <div className="flex items-start justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: tagIndex * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="inline-flex px-3 py-1 rounded-full text-[11px] tracking-widest text-white bg-white/10 border border-white/20 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="hidden sm:flex flex-col gap-3 text-right">
                {project.highlights.map((highlight, highlightIndex) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: highlightIndex * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <span className="text-[10px] tracking-widest uppercase text-white/50 block">
                      {highlight.label}
                    </span>
                    <span className="text-sm font-light text-white">{highlight.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8">
              <RevealLines className="text-sm text-white/70 mb-3 max-w-md">
                {project.subtitle}
              </RevealLines>
              <RevealText
                as="h3"
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.02] text-white group-hover:text-white/90 transition-colors"
              >
                {project.title}
              </RevealText>
            </div>
          </div>
        </Link>
      </ScrollFadeIn>
    </div>
  )
}
