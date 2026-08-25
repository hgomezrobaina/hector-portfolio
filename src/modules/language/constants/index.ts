export enum LANGUAGES {
  EN = 'en',
  ES = 'es',
}

export const LANGUAGE_ROUTES: Record<LANGUAGES, string> = {
  [LANGUAGES.EN]: '/',
  [LANGUAGES.ES]: '/es',
}

export const LANGUAGE_STORAGE_KEY = 'preferred-language'
