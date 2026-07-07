"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Award,
  Zap,
  Brain,
  Layers,
  Headphones,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"
import { PixelIcon } from "@/components/pixel-icon"
import { SectionTag } from "@/components/section-tag"
import { RevealLines } from "@/components/reveal-lines"
import { RevealText } from "@/components/reveal-text"
import { ScrollFadeIn } from "@/components/scroll-fade-in"
import { HERO_POSTER } from "@/lib/attolabs/shared"
import { useTranslations } from "next-intl"

const diffIcons = [Award, Zap, Brain, Layers, Headphones]
const statIcons = [Calendar, Award, Users, TrendingUp]

export default function AboutUsSection() {
  const t = useTranslations("about")
  const tNav = useTranslations("nav")
  const differentiators = t.raw("differentiators") as { title: string; description: string }[]
  const statsData = t.raw("stats") as { value: number; suffix: string; label: string }[]
  const leftItems = differentiators.slice(0, 3)
  const rightItems = differentiators.slice(3)
  const stats = statsData.map((stat, index) => ({
    ...stat,
    icon: (() => {
      const Icon = statIcons[index] ?? Calendar
      return <Icon className="w-5 h-5" />
    })(),
  }))

  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-32 px-6 md:px-12 lg:px-20 bg-[#F5F4F0] text-[#111] overflow-hidden relative border-t border-black/[0.06]"
    >
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-black/[0.02] blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-black/[0.02] blur-3xl"
        style={{ y: y2 }}
      />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <ScrollFadeIn scale>
            <PixelIcon type="platform" size={40} />
          </ScrollFadeIn>
          <div className="mt-4">
            <SectionTag accent>{t("tag")}</SectionTag>
          </div>
          <RevealText
            as="h2"
            className="text-3xl md:text-4xl font-light tracking-tight leading-[1.05] mt-6 mb-4 text-center"
          >
            {t("title")}
          </RevealText>
          <motion.div
            className="w-16 h-px bg-[var(--enterprise-accent)]/40"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <RevealLines
          className="text-center max-w-2xl mx-auto mb-16 text-sm text-black/45 leading-relaxed"
        >
          {t("description")}
        </RevealLines>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-12">
            {leftItems.map((item, index) => {
              const Icon = diffIcons[index] ?? Award
              return (
                <ServiceItem
                  key={item.title}
                  icon={<Icon className="w-5 h-5" strokeWidth={1.5} />}
                  title={item.title}
                  description={item.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              )
            })}
          </div>

          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden border border-black/[0.07]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={HERO_POSTER}
                  alt={t("subtitle")}
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 border border-black/[0.07] rounded-2xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>
          </div>

          <div className="space-y-12">
            {rightItems.map((item, index) => {
              const Icon = diffIcons[index + 3] ?? Headphones
              return (
                <ServiceItem
                  key={item.title}
                  icon={<Icon className="w-5 h-5" strokeWidth={1.5} />}
                  title={item.title}
                  description={item.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              )
            })}
          </div>
        </div>

        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 rounded-2xl border border-black/[0.07] bg-[#F0EEE8] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-light tracking-tight mb-2">
              {t("subtitle")}
            </h3>
            <p className="text-sm text-black/45">
              {t("description")}
            </p>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--enterprise-accent)] text-white px-6 py-3 rounded-xl text-sm font-light hover:bg-[var(--enterprise-accent-hover)] transition-colors shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {tNav("cta")} <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

const ServiceItem = ({ icon, title, description, variants, delay, direction }: ServiceItemProps) => (
  <motion.div
    className="flex flex-col group"
    variants={variants}
    transition={{ delay }}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
  >
    <motion.div
      className="flex items-center gap-3 mb-3"
      initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.2 }}
    >
      <motion.div
        className="text-black/60 bg-black/[0.04] border border-black/[0.07] p-3 rounded-xl transition-colors duration-300 group-hover:bg-black/[0.06]"
        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.4 } }}
      >
        {icon}
      </motion.div>
      <h3 className="text-base font-light text-[#111]">{title}</h3>
    </motion.div>
    <motion.p
      className="text-sm text-black/45 leading-relaxed pl-[52px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: delay + 0.4 }}
    >
      {description}
    </motion.p>
  </motion.div>
)

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

const StatCounter = ({ icon, value, label, suffix, delay }: StatCounterProps) => {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, { stiffness: 50, damping: 10 })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-white border border-black/[0.07] p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-[#F0EEE8] transition-colors duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      <div className="w-12 h-12 rounded-xl border border-black/[0.07] flex items-center justify-center mb-4 text-black/50">
        {icon}
      </div>
      <motion.div ref={countRef} className="text-3xl font-light text-[#111] flex items-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-black/40 text-xs mt-1 tracking-wide">{label}</p>
    </motion.div>
  )
}
