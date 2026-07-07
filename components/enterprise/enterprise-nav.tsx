"use client"

import { useState } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/enterprise/language-switcher"
import { NAV_LOGO } from "@/lib/attolabs/shared"

const NAV_STYLE = {
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  background: "rgba(245,244,240,0.30)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.06)",
} as const

export const EnterpriseNav = () => {
  const [open, setOpen] = useState(false)
  const t = useTranslations("nav")
  const locale = useLocale()

  const handleClose = () => setOpen(false)

  const links = [
    { label: t("whatWeDo"), href: "#services" },
    { label: t("whoWeAre"), href: "#about" },
    { label: t("workWithUs"), href: t("workWithUsHref") },
    { label: t("jobs"), href: t("jobsHref") },
  ]

  return (
    <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-4xl">
        <nav
          className="flex items-center justify-between px-5 py-3 rounded-2xl border border-black/[0.06]"
          style={NAV_STYLE}
          aria-label="Enterprise navigation"
        >
          <Link
            href={`/${locale}/enterprise`}
            className="font-pixel text-xs tracking-[0.25em] text-black/70 hover:text-black transition-colors"
          >
            <div className="w-[120px] h-[45px] flex items-center justify-center">
              <img className="w-auto" src={NAV_LOGO} alt={t("brand")} />
            </div>
          </Link>

          <div
            className="hidden md:flex items-center gap-7"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] text-black/60 hover:text-black transition-colors duration-200 tracking-wide"
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>
            <a
              href="#contact"
              className="text-[11px] px-4 py-2 rounded-xl bg-[var(--enterprise-accent)] text-white hover:bg-[var(--enterprise-accent-hover)] transition-all duration-200 tracking-wide hidden md:block"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              {t("cta")}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-lg hover:bg-black/[0.04] transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span
                className="block h-px bg-black/60 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(6px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px bg-black/60 transition-all duration-300"
                style={{
                  width: "18px",
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
              <span
                className="block h-px bg-black/60 transition-all duration-300 origin-center"
                style={{
                  width: "18px",
                  transform: open ? "translateY(-6px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </nav>

        <div
          className="md:hidden mt-2 overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? "480px" : "0px", opacity: open ? 1 : 0 }}
        >
          <div
            className="rounded-2xl border border-black/[0.06] px-2 py-2 flex flex-col"
            style={NAV_STYLE}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleClose}
                className="px-4 py-3 text-sm text-black/60 hover:text-black hover:bg-black/[0.03] rounded-xl transition-colors tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
            <div className="mt-1 px-2 pb-1">
              <a
                href="#contact"
                onClick={handleClose}
                className="block w-full text-center text-[11px] px-4 py-2.5 rounded-xl bg-[var(--enterprise-accent)] text-white hover:bg-[var(--enterprise-accent-hover)] transition-all duration-200 tracking-wide"
                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
              >
                {t("cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
