import Portfolio from '../../Portfolio'
import { LanguageAutoRedirect } from '../../modules/language/components'
import { LANGUAGES } from '../../modules/language/constants'

export default function Home() {
  return (
    <>
      <LanguageAutoRedirect />
      <Portfolio language={LANGUAGES.EN} />
    </>
  )
}
