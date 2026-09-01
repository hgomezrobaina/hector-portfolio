import X from '../../../../../../../../../../modules/icon/components/X'

interface Props {
  handleChangeOpenMenu: () => void
}

export default function Close({ handleChangeOpenMenu }: Props) {
  return (
    <div className="flex w-full justify-end">
      <button
        className="dark:stroke-white stroke-black cursor-pointer transition-all duration-300 hover:rotate-90 hover:stroke-secondColor dark:hover:stroke-primaryColor"
        onClick={handleChangeOpenMenu}
      >
        <X size={26} />
      </button>
    </div>
  )
}
