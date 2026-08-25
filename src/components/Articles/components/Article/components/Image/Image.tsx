import NextImage from 'next/image'
import { AppImage } from '../../../../../../modules/app/interfaces/image'

interface Props {
  image: AppImage
  title: string
}

export default function Image({ image, title }: Props) {
  return (
    <div className="overflow-hidden rounded-lg shrink-0 w-full md:w-[240px] xl:w-[320px] h-[200px] md:h-auto md:min-h-[200px] md:self-stretch">
      <NextImage
        src={image.image}
        alt={title}
        width={1024}
        height={1024}
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}
