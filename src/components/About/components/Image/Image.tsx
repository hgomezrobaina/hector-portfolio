import NextImage from 'next/image'
import { APP_IMAGES } from '../../../../modules/app/constants/APP_IMAGES'

export default function Image() {
  return (
    <div className="xl:block hidden">
      <div className="relative group min-w-[460px] mr-4 mb-4">
        <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-xl border-2 border-blue-4 dark:border-blue-7 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

        <NextImage
          src={APP_IMAGES.ABOUT_ME.image}
          alt={APP_IMAGES.ABOUT_ME.alt}
          width={1536}
          height={1024}
          className="relative w-full h-auto object-cover rounded-xl shadow-md shadow-blue-4/10 dark:shadow-black/20"
        />
      </div>
    </div>
  )
}
