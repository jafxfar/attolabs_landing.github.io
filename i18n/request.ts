import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"
import { getAttolabsContent } from "@/lib/attolabs/content"

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as "en" | "de" | "ru")) {
    locale = routing.defaultLocale
  }

  return {
    locale,
    messages: getAttolabsContent(locale),
  }
})
