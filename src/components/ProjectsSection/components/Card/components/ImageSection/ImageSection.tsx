import Image from 'next/image'

interface Props {
  image: string
  alt: string
}

export default function ImageSection({ image, alt }: Props) {
  return (
    <div className="relative w-full xl:h-[240px] h-[300px] rounded-tr rounded-tl dark:border-b-0 border-b-regular border-b-blue-4">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 400px, 100vw"
        className="object-cover object-center rounded-tr rounded-tl"
      />
    </div>
  )
}
