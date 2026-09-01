// eslint-disable-next-line import/named
import { LegacyAnimationControls } from 'framer-motion'
import CvButton from './components/CvButton/CvButton'
import Logo from './components/Logo/Logo'
import Menu from './components/Menu/Menu'
import Section from '../../../../modules/shared/components/Section/Section'
import useNavbar from './hooks/useNavbar'

interface Props {
  navBarAnimate: LegacyAnimationControls
  handleDownloadCV: () => void
}

export default function Navbar({ navBarAnimate, handleDownloadCV }: Props) {
  const { handleChangeOpenMenu, openMenu } = useNavbar()

  return (
    <div className="w-full flex justify-center px-8 fixed top-0 left-0 z-[40] dark:bg-primaryDarkColor/80 bg-dark-blue-1/80 backdrop-blur-md shadow-md shadow-blue-4/10 dark:shadow-black/20">
      <Section>
        <nav className="flex items-center justify-between text-xl py-5 overflow-y-hidden w-full">
          <Logo />

          <div className="flex items-center">
            <CvButton handleDownloadCV={handleDownloadCV} navBarAnimate={navBarAnimate} />
            <Menu openMenu={openMenu} handleChangeOpenMenu={handleChangeOpenMenu} />
          </div>
        </nav>
      </Section>
    </div>
  )
}
