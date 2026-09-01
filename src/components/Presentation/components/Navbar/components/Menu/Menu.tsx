import MenuIcon from '../../../../../../modules/icon/components/Menu'
import Dropdowm from './components/Dropdown/Dropdowm'

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
