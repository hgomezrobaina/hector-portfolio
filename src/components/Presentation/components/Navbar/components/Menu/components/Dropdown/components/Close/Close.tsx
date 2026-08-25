import { X } from '../../../../../../../../../../modules/icon/components'

interface Props {
  handleChangeOpenMenu: () => void
}

export default function Close({ handleChangeOpenMenu }: Props) {
  return (
    <div className="flex w-full justify-end">
      <button className="dark:stroke-white stroke-black" onClick={handleChangeOpenMenu}>
        <X size={26} />
      </button>
    </div>
  )
}
