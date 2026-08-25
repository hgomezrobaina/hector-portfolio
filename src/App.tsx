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
    <div className="dark:text-white dark:bg-primaryDarkColor text-black transition-all duration-300 overflow-x-hidden">
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
