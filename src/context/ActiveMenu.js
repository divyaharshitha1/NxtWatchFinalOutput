import React from 'react'

const ActiveMenu = React.createContext({
  activeMenu: 'INITIAL',
  changeActiveMenu: () => {},
})

export default ActiveMenu
