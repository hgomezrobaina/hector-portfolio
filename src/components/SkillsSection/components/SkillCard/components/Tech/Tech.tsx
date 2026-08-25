import Image from 'next/image'
import { ArrowRight } from '../../../../../../modules/icon/components'

interface Props {
  tech: string
  src: string
  alt: string
}

export default function Tech({ alt, src, tech }: Props) {
  return (
    <div className="group flex gap-x-3 items-center transition-transform duration-200 hover:translate-x-1.5">
      <span className="stroke-blue-6 dark:stroke-blue-4 transition-transform duration-200 group-hover:translate-x-1">
        <ArrowRight size={18} />
      </span>

      <div className="flex items-center gap-x-4">
        <Image src={src} alt={alt} width={35} height={35} className="w-[35px] h-[35px] object-contain" />
        <p className="mb-0 transition-colors duration-200 group-hover:text-blue-6 dark:group-hover:text-blue-4">{tech}</p>
      </div>
    </div>
  )
}
