"use client"

import Link from "next/link"
import { Linkedin, Twitter, Github } from "lucide-react"
import { ScrollStagger } from "@/components/scroll-stagger"
import { enterpriseFooter } from "@/lib/enterprise-content"

const socialIcons = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  GitHub: Github,
} as const

const linkClass =
  "text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors"

export const EnterpriseFooter = () => (
  <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
    <div className="max-w-6xl mx-auto">
      <ScrollStagger
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        staggerMs={100}
        direction="up"
      >
        <div id="contact">
          <span className="font-pixel text-xs tracking-[0.25em] text-black/50 block mb-4">
            {enterpriseFooter.company.name}
          </span>
          <p className="text-sm text-black/45 leading-relaxed mb-4">
            {enterpriseFooter.company.description}
          </p>
          <div className="space-y-1">
            <a
              href={`mailto:${enterpriseFooter.company.email}`}
              className={`block ${linkClass}`}
            >
              {enterpriseFooter.company.email}
            </a>
            <a
              href={`tel:${enterpriseFooter.company.phone.replace(/\s/g, "")}`}
              className={`block ${linkClass}`}
            >
              {enterpriseFooter.company.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-black/35 uppercase mb-4">Solutions</h3>
          <ul className="space-y-2">
            {enterpriseFooter.links.solutions.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-black/35 uppercase mb-4">Industries</h3>
          <ul className="space-y-2">
            {enterpriseFooter.links.industries.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs tracking-widest text-black/35 uppercase mb-4">Company</h3>
          <ul className="space-y-2 mb-6">
            {enterpriseFooter.links.company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {enterpriseFooter.social.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons]
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-black/30 hover:text-[var(--enterprise-accent)] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </ScrollStagger>

      <div className="pt-8 border-t border-black/[0.04] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="text-xs text-black/20">
          © {new Date().getFullYear()} {enterpriseFooter.company.name}. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {enterpriseFooter.legal.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-black/25 hover:text-[var(--enterprise-accent)] transition-colors tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/"
            className="text-xs text-black/25 hover:text-[var(--enterprise-accent)] transition-colors tracking-widest"
          >
            AI Platform
          </Link>
        </div>
      </div>
    </div>
  </footer>
)
