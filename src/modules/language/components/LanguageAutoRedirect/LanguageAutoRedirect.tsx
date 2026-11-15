'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LANGUAGES, LANGUAGE_ROUTES } from '../../constants/language'
import { hasPreferredLanguage } from '../../utils/preferred-language'

export default function LanguageAutoRedirect() {
  const router = useRouter()

  useEffect(() => {
    if (hasPreferredLanguage()) return

    if (navigator.language.toLowerCase().startsWith(LANGUAGES.ES)) {
      router.replace(LANGUAGE_ROUTES[LANGUAGES.ES])
    }
  }, [])

  return null
}
