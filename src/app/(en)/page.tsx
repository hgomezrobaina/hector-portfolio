import Portfolio from '../../Portfolio'
import JsonLd from '../../modules/app/components/JsonLd/JsonLd'
import { buildPersonJsonLd } from '../../modules/app/utils/buildPersonJsonLd'
import LanguageAutoRedirect from '../../modules/language/components/LanguageAutoRedirect/LanguageAutoRedirect'
import { LANGUAGES } from '../../modules/language/constants/LANGUAGES'

export default function Home() {
  return (
    <>
      <JsonLd data={buildPersonJsonLd(LANGUAGES.EN)} />
      <LanguageAutoRedirect />
      <Portfolio language={LANGUAGES.EN} />
    </>
  )
}
