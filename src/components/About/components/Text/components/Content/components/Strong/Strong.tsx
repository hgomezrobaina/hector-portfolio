interface Props {
  text: string
}

export default function Strong({ text }: Props) {
  return <strong className="font-fontMedium dark:text-blue-4 text-blue-6 font-normal">{text}</strong>
}
