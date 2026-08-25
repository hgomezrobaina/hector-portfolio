import Image from 'next/image'

interface Props {
  image: string
  alt: string
}

export default function ImageSection({ image, alt }: Props) {
  return (
    <div className="relative w-full xl:h-[240px] h-[300px] overflow-hidden border-b border-blue-4/40 dark:border-dark-blue-11">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 400px, 100vw"
        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}
