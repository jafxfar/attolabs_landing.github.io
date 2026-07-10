"use client"

import { useLocale } from "next-intl"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { attolabsLocales } from "@/lib/attolabs/content"

const localeLabels: Record<string, string> = {
  en: "EN",
  de: "DE",
  ru: "RU",
}

type LanguageSwitcherProps = {
  className?: string
  variant?: "nav" | "footer"
}

export const LanguageSwitcher = ({
  className = "",
  variant = "nav",
}: LanguageSwitcherProps) => {
  const locale = useLocale()
  const pathname = usePathname()

  const getLocalizedPath = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean)
    if (attolabsLocales.includes(segments[0] as "en" | "de" | "ru")) {
      segments[0] = nextLocale
    } else {
      segments.unshift(nextLocale)
    }
    return `/${segments.join("/")}`
  }

  const baseClass =
    variant === "footer"
      ? "text-xs text-black/25 hover:text-[var(--enterprise-accent)] transition-colors tracking-widest"
      : "text-[10px] text-black/50 hover:text-black transition-colors tracking-wide px-2 py-1 rounded-lg hover:bg-black/[0.04]"

  return (
    <div className={`flex items-center gap-1 ${className}`} role="navigation" aria-label="Language switcher">
      {attolabsLocales.map((code, index) => (
        <span key={code} className="flex items-center gap-1">
          {index > 0 && (
            <span className="text-black/15 select-none" aria-hidden="true">
              |
            </span>
          )}
          <Link
            href={getLocalizedPath(code)}
            className={`${baseClass} ${locale === code ? "text-[var(--enterprise-accent)] font-medium" : ""}`}
            aria-current={locale === code ? "page" : undefined}
          >
            {localeLabels[code]}
          </Link>
        </span>
      ))}
    </div>
  )
}
