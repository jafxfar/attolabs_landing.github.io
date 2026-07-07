import type { AttolabsLocale, AttolabsMessages } from "./types"
import en from "@/messages/en.json"
import de from "@/messages/de.json"
import ru from "@/messages/ru.json"

const messages: Record<AttolabsLocale, AttolabsMessages> = {
  en: en as AttolabsMessages,
  de: de as AttolabsMessages,
  ru: ru as AttolabsMessages,
}

export const attolabsLocales: AttolabsLocale[] = ["en", "de", "ru"]

export const getAttolabsContent = (locale: string): AttolabsMessages => {
  if (locale === "de" || locale === "ru") return messages[locale]
  return messages.en
}

export const isAttolabsLocale = (locale: string): locale is AttolabsLocale =>
  attolabsLocales.includes(locale as AttolabsLocale)
