interface Props {
  madeWith: string[]
}

export default function MadeWithSection({ madeWith }: Props) {
  return (
    <div className="flex flex-wrap w-full gap-x-2 mt-auto pt-3 gap-y-2">
      {madeWith.map((made, index) => (
        <div
          key={index}
          className="font-fontCode text-white dark:text-blue-3 py-1 px-3 rounded-full text-sm bg-secondColor dark:bg-black/20 border border-transparent dark:border-white/10"
        >
          {made}
        </div>
      ))}
    </div>
  )
}
