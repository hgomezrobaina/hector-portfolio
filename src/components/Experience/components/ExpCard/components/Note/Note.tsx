interface Props {
  text: string
}

export default function Note({ text }: Props) {
  return (
    <div className="flex items-start gap-x-3 mb-1.5">
      <div
        className="min-w-[6px] min-h-[6px] rounded-full dark:bg-blue-4 bg-blue-6"
        style={{ transform: `translateY(9px)` }}
      ></div>

      <p className="leading-relaxed">{text}</p>
    </div>
  )
}
