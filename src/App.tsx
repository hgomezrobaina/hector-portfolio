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

  const initialShowText = () => {
    textAnimate.start({ translateY: 0 })
  }
 
  const initialAnimation =  () => {
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
    <div className="relative dark:text-white bg-dark-blue-1 dark:bg-primaryDarkColor text-black transition-all duration-300 overflow-x-hidden">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-blob absolute -top-[300px] -left-[200px] w-[700px] h-[700px] rounded-full bg-blue-3/50 dark:bg-blue-7/20 blur-[130px]"></div>
        <div
          className="animate-blob absolute top-1/3 -right-[250px] w-[600px] h-[600px] rounded-full bg-blue-2/60 dark:bg-dark-blue-7/25 blur-[130px]"
          style={{ animationDelay: '-11s' }}
        ></div>

        <div className="absolute inset-0 bg-dots"></div>
        <div className="absolute inset-0 bg-noise"></div>
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
