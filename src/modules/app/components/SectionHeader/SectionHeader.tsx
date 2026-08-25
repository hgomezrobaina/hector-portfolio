interface Props {
  title: string
  index?: number
}

export default function SectionHeader({ title, index }: Props) {
  return (
    <div className="flex w-full items-center gap-x-8 mb-10 esm:mb-8 esm:gap-x-4">
      <div className="flex items-baseline gap-x-3">
        {index !== undefined && (
          <span className="font-fontCode text-2xl esm:text-xl text-secondColor dark:text-primaryColor">
            {String(index).padStart(2, '0')}.
          </span>
        )}
        <h2 className="font-fontBold text-4xl esm:text-3xl">{title}</h2>
      </div>

      <div className="h-px flex-1 min-w-8 bg-gradient-to-r from-blue-4/60 to-transparent dark:from-blue-7/70"></div>
    </div>
  )
}
