"use client"

import React from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export type TestimonialCard = {
  quote: string
  name: string
  role: string
  company: string
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: TestimonialCard[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-3 pb-3"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((item) => (
                <div
                  className="p-8 rounded-2xl border border-black/[0.07] bg-white max-w-xs w-full"
                  key={`${item.name}-${index}`}
                >
                  <p className="text-sm text-black/55 leading-relaxed font-light">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <Avatar className="size-10 border border-black/10">
                      <AvatarFallback className="bg-black/[0.04] text-black/50 text-xs font-light">
                        {getInitials(item.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="text-sm font-light text-[#111] leading-5">{item.name}</span>
                      <span className="text-xs text-black/40 leading-5">
                        {item.role}, {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
