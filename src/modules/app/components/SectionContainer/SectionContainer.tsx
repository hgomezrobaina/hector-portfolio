import Section from '../../../shared/components/Section/Section'

interface Props {
  children: React.ReactNode
  id: string
}

export default function SectionContainer({ children, id }: Props) {
  return (
    <section id={id} className="w-full flex justify-center px-8">
      <Section>
        <div className="w-full md:pt-32 pt-20">{children}</div>
      </Section>
    </section>
  )
}
