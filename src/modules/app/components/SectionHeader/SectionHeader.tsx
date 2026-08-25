import React from 'react'
import { IconProps } from '../../../icon/interfaces'
import { useScreen } from '../../../shared/hooks'

interface Props {
  icon: React.FC<IconProps>
  title: string
}

export default function SectionHeader({ icon: Icon, title }: Props) {
  const { bigScreen } = useScreen(768)

  return (
    <div className="flex w-full items-center gap-x-10 dark:stroke-primaryColor stroke-secondColor mb-7 esm:gap-x-5">
      <Icon size={bigScreen ? 50 : 40} />
      <h1 className="font-fontBold text-4xl esm:text-3xl">{title}</h1>
      <div className="h-px flex-1 min-w-8 bg-gradient-to-r from-blue-4/60 to-transparent dark:from-blue-7/70"></div>
    </div>
  )
}
