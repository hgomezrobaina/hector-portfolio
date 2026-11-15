import Portfolio from '../../Portfolio'
import JsonLd from '../../modules/app/components/JsonLd/JsonLd'
import { buildPersonJsonLd } from '../../modules/app/utils/build-person-json-ld'
import LanguageAutoRedirect from '../../modules/language/components/LanguageAutoRedirect/LanguageAutoRedirect'
import { LANGUAGES } from '../../modules/language/constants/language'

export default function Home() {
  return (
    <>
      <JsonLd data={buildPersonJsonLd(LANGUAGES.EN)} />
      <LanguageAutoRedirect />
      <Portfolio language={LANGUAGES.EN} />
    </>
  )
}
