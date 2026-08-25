import { LANGUAGES, LANGUAGE_STORAGE_KEY } from '../constants'

export function savePreferredLanguage(language: LANGUAGES) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // localStorage puede no estar disponible (modo privado, cookies bloqueadas)
  }
}

export function hasPreferredLanguage(): boolean {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY) !== null
  } catch {
    return false
  }
}
