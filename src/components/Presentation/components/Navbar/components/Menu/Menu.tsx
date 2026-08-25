import { Menu as MenuIcon } from '../../../../../../modules/icon/components'
import { Dropdowm } from './components'

interface Props {
  handleChangeOpenMenu: () => void
  openMenu: boolean
}

export default function Menu({ handleChangeOpenMenu, openMenu }: Props) {
  return (
    <div className="">
      <button className="dark:fill-white flex justify-center items-center" onClick={handleChangeOpenMenu}>
        <MenuIcon size={24} />
      </button>

      <Dropdowm openMenu={openMenu} handleChangeOpenMenu={handleChangeOpenMenu} />
    </div>
  )
}
