import { useState } from 'react'

export default function useNavbar() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleChangeOpenMenu() {
    setOpenMenu((prev) => !prev)
  }

  return { handleChangeOpenMenu, openMenu }
}
