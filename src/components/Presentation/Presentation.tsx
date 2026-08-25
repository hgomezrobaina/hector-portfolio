// eslint-disable-next-line import/named
import { LegacyAnimationControls } from 'framer-motion'
import { Section } from '../../modules/shared/components'
import { ArrowRight } from '../../modules/icon/components'
import { usePresentation } from './hooks'
import Navbar from './components/Navbar/Navbar';
import Text from './components/Text/Text';
import Image from './components/Image/Image';

interface Props {
  navBarAnimate: LegacyAnimationControls
  principalTextAnimate: LegacyAnimationControls
  meImageAnimation: LegacyAnimationControls
}

export default function Presentation({ navBarAnimate, principalTextAnimate, meImageAnimation }: Props) {
  const { handleDownloadCV } = usePresentation()

  return (
    <div className="relative flex w-full 2xl:h-screen 2xl:min-h-185 pt-36 2xl:pt-10 2xl:pb-0 justify-center px-8 items-center">
      <Section>
        <div className="w-full h-full flex flex-col">
          <Navbar navBarAnimate={navBarAnimate} handleDownloadCV={handleDownloadCV} />

          <div className="h-max flex items-center w-full overflow-hidden justify-between">
            <Text principalTextAnimate={principalTextAnimate} />
            <Image meImageAnimation={meImageAnimation} />
          </div>
        </div>
      </Section>

      <div
        aria-hidden
        className="hidden 2xl:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce stroke-secondColor dark:stroke-primaryColor opacity-70"
      >
        <div className="rotate-90">
          <ArrowRight size={26} />
        </div>
      </div>
    </div>
  )
}
