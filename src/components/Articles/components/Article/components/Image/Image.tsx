import NextImage from 'next/image'
import { AppImage } from '../../../../../../modules/app/interfaces/image'

interface Props {
  image: AppImage
  title: string
}

export default function Image({ image, title }: Props) {
  return (
    <div className="flex">
      <NextImage
        src={image.image}
        alt={title}
        width={1024}
        height={1024}
        className="object-cover min-w-[230px] xl:min-w-[370px] h-[200px] rounded"
      />
    </div>
  )
}
