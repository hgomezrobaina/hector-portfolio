import { Section } from '../../modules/shared/components'
import { Left, SocialMedia } from './components'

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center mt-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-4/50 to-transparent dark:via-blue-7/50"></div>

      <div className="w-full flex justify-center px-8 py-10">
        <Section>
          <div className="w-full flex items-center md:flex-row flex-col-reverse gap-y-6 justify-between">
            <Left />
            <SocialMedia />
          </div>
        </Section>
      </div>
    </footer>
  )
}
