"use client"

import Link from "next/link"
import {
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ExternalLink,
} from "lucide-react"
import { ScrollStagger } from "@/components/scroll-stagger"
import { LanguageSwitcher } from "@/components/enterprise/language-switcher"
import { enterprisePath } from "@/lib/attolabs/content"
import { useLocale, useTranslations } from "next-intl"

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  X: Twitter,
  Facebook: Facebook,
  Behance: ExternalLink,
} as const

const linkClass =
  "text-sm text-black/45 hover:text-[var(--enterprise-accent)] transition-colors"

type EnterpriseFooterProps = {
  hideOffices?: boolean
}

export const EnterpriseFooter = ({ hideOffices = false }: EnterpriseFooterProps) => {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const locale = useLocale()
  const offices = t.raw("offices") as {
    country: string
    address: string
    phones: string[]
    email: string
  }[]
  const social = t.raw("social") as { platform: keyof typeof socialIcons; href: string }[]
  const legal = t.raw("legal") as { label: string; href: string }[]

  const navLinks = [
    { label: tNav("whatWeDo"), href: enterprisePath(locale, "/projects") },
    { label: tNav("whoWeAre"), href: enterprisePath(locale, "/about") },
    { label: tNav("workWithUs"), href: enterprisePath(locale, tNav("workWithUsHref")) },
    { label: tNav("jobs"), href: enterprisePath(locale, tNav("jobsHref")) },
  ]

  return (
    <footer className="py-16 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        {!hideOffices && (
          <ScrollStagger
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"
            staggerMs={100}
            direction="up"
          >
            {offices.map((office) => (
              <div key={office.country}>
                <h3 className="text-xs tracking-widest text-black/35 uppercase mb-4">
                  {office.country}
                </h3>
                <p className="text-sm text-black/45 leading-relaxed mb-3">
                  {office.address}
                </p>
                <div className="space-y-1">
                  {office.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className={`block ${linkClass}`}
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`mailto:${office.email}`}
                    className={`block ${linkClass}`}
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </ScrollStagger>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-black/[0.04]">
          <div>
            <span className="font-pixel text-xs tracking-[0.25em] text-black/50 block mb-4">
              {tNav("brand")}
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              {social.map((item) => {
                const Icon = socialIcons[item.platform]
                return (
                  <a
                    key={item.platform}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.platform}
                    className="text-black/30 hover:text-[var(--enterprise-accent)] transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
            <LanguageSwitcher variant="footer" />
          </div>
        </div>

        <div className="pt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-xs text-black/20">
            © {new Date().getFullYear()} {t("copyright")}. All rights reserved.
          </span>
          <div className="flex items-center gap-6 flex-wrap">
            {legal.map((link) => (
              <Link
                key={link.label}
                href={enterprisePath(locale, link.href)}
                className="text-xs text-black/25 hover:text-[var(--enterprise-accent)] transition-colors tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
