import { motion, LegacyAnimationControls } from 'framer-motion'
import { useState, useEffect } from 'react'

interface Props {
  initialAnimation: () => void
  initialShowText: () => void
  blockAnimate: LegacyAnimationControls
  modalAnimate: LegacyAnimationControls
  textAnimate: LegacyAnimationControls
}

export default function InitialLoader({
  initialAnimation,
  initialShowText,
  blockAnimate,
  modalAnimate,
  textAnimate,
}: Props) {
  const [cont, setCont] = useState(0)

  useEffect(() => {
    initialShowText()

    const interval = setInterval(() => {
      setCont((prev) => {
        if (prev < 100) return prev + 1
        else {
          clearInterval(interval)
          initialAnimation()
          return 100
        }
      })
    }, 20)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      aria-hidden
      animate={modalAnimate}
      transition={{ duration: 1 }}
      initial={{ height: '100vh' }}
      className="bg-secondDarkColor fixed w-full flex justify-center items-center top-0 left-0 z-50 px-8"
    >
      <motion.div className="flex flex-col text-white 2xl:text-9xl xl:text-8xl text-7xl esm:text-5xl">
        <motion.div
          animate={blockAnimate}
          className="absolute bg-secondDarkColor max-w-[1000px] h-[250px] -translate-y-full z-[60] w-full"
        ></motion.div>

        <motion.div
          initial={{ translateY: 200, display: 'flex' }}
          transition={{ duration: 0.7 }}
          animate={textAnimate}
          className="flex-col max-w-[1000px] h-[250px] items-center justify-center w-full"
        >
          <p className="font-fontExtraBold esm:text-center">Héctor Gómez</p>
        </motion.div>

        <motion.div
          animate={blockAnimate}
          className="absolute bg-primary w-[1000px] h-[250px] translate-y-full z-[60]"
        ></motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-10">
        <p className="text-white font-fontExtraBold text-5xl esm:text-4xl">{cont}</p>
      </div>
    </motion.div>
  )
}
