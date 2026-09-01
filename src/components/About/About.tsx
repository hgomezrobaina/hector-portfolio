import SectionContainer from '../../modules/app/components/SectionContainer/SectionContainer'
import SectionHeader from '../../modules/app/components/SectionHeader/SectionHeader'
import { ABOUT } from '../../modules/app/constants/SECTIONS'
import useLanguage from '../../modules/language/hooks/useLanguage'
import Image from './components/Image/Image'
import Text from './components/Text/Text'

export default function About() {
  const { language } = useLanguage()

  return (
    <SectionContainer id={ABOUT.id}>
      <SectionHeader title={ABOUT.title[language]} index={1} />

      <div className="flex w-full items-center">
        <Image />
        <Text />
      </div>
    </SectionContainer>
  )
}
