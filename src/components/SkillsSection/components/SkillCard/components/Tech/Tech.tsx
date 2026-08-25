import Image from 'next/image'
import { ArrowRight } from '../../../../../../modules/icon/components'

interface Props {
  tech: string
  src: string
  alt: string
}

export default function Tech({ alt, src, tech }: Props) {
  return (
    <div className="flex gap-x-4 items-center">
      <ArrowRight size={20} />

      <div className="flex items-center gap-x-4">
        <Image src={src} alt={alt} width={35} height={35} className="w-[35px] h-[35px] object-contain" />
        <p className="mb-0">{tech}</p>
      </div>
    </div>
  )
}
