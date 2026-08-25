import { SectionContainer, SectionHeader } from '../../modules/app/components'
import { useSections } from '../../modules/app/hooks'
import { Image, Text } from './components'

export default function About() {
  const { ABOUT } = useSections()

  return (
    <SectionContainer id={ABOUT.id}>
      <SectionHeader title={ABOUT.title} index={1} />

      <div className="flex w-full items-center">
        <Image />
        <Text />
      </div>
    </SectionContainer>
  )
}
