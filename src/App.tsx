'use client'

import { useAnimation } from 'framer-motion'
import InitialLoader from './components/InitialLoader/InitialLoader'
import Presentation from './components/Presentation/Presentation'
import About from './components/About/About'
import SkillsSection from './components/SkillsSection/SkillsSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'
import Experience from './components/Experience/Experience'
import Articles from './components/Articles/Articles'
import Footer from './components/Footer/Footer'

export default function App() {
  const textAnimate = useAnimation()
  const modalAnimate = useAnimation()
  const blockAnimate = useAnimation()
  const navBarAnimate = useAnimation()
  const principalTextAnimate = useAnimation()
  const meImageAnimation = useAnimation()

  function initialShowText() {
    textAnimate.start({ translateY: 0 })
  }

  function initialAnimation() {
    textAnimate.start({ translateY: -200 }).then(() => {
      textAnimate.start({ display: 'none' }).then(() => {
        blockAnimate
          .start({ display: 'none' })
          .then(() => modalAnimate.start({ height: '0px' }))
          .then(() => navBarAnimate.start({ translateY: 0 }))
          .then(() => principalTextAnimate.start({ translateY: 0 }))
          .then(() => meImageAnimation.start({ translateX: 0 }))
      })
    })
  }

  return (
    <div className="relative dark:text-white bg-gradient-to-b from-dark-blue-1 via-blue-1 to-dark-blue-1 dark:from-primaryDarkColor dark:via-dark-blue-11 dark:to-primaryDarkColor text-black transition-all duration-300 overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-blob absolute -top-48 -left-48 w-[600px] h-[600px] rounded-full bg-blue-3/70 dark:bg-blue-7/30 blur-[110px]"></div>
        <div
          className="animate-blob absolute top-1/4 -right-48 w-[550px] h-[550px] rounded-full bg-blue-4/40 dark:bg-dark-blue-7/35 blur-[110px]"
          style={{ animationDelay: '-8s' }}
        ></div>
        <div
          className="animate-blob absolute -bottom-48 left-1/5 w-[500px] h-[500px] rounded-full bg-blue-2/80 dark:bg-blue-9/35 blur-[110px]"
          style={{ animationDelay: '-15s' }}
        ></div>
      </div>

      <InitialLoader
        blockAnimate={blockAnimate}
        initialAnimation={initialAnimation}
        initialShowText={initialShowText}
        modalAnimate={modalAnimate}
        textAnimate={textAnimate}
      />
      <Presentation
        principalTextAnimate={principalTextAnimate}
        navBarAnimate={navBarAnimate}
        meImageAnimation={meImageAnimation}
      />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <Experience />
      <Articles />
      <Footer />
    </div>
  )
}
