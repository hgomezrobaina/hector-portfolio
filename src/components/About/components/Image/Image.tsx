import { APP_IMAGES } from '../../../../modules/app/constants'

export default function Image() {
  return (
    <div className="xl:block hidden">
      <div className="p-3 dark:bg-dark-blue-10 bg-blue-3 rounded-md flex justify-center items-center min-w-[460px]">
        <img src={APP_IMAGES.ABOUT_ME.image} alt={APP_IMAGES.ABOUT_ME.alt} className="w-full object-cover rounded-md" />
      </div>
    </div>
  )
}
