import React, { FC,PropsWithChildren } from 'react'

import { partDay } from '../../utils/date'

interface IHeaderWrapper extends PropsWithChildren{
    theme:string,
    switcher:string,
}

const HeaderWrapper:FC<IHeaderWrapper> = ({theme,switcher,children}) => {
  const changeHeaderBg = () => {
    let bg:any
    switcher === 'now'? bg = partDay() : bg = switcher
    if (theme === 'dark'){
      switch (bg) {
      case 'day':
        return 'header-dark-day'
      case 'morning':
        return 'header-dark-morning'
      case 'evening':
        return 'header-dark-evning'
      case 'night':
        return   'header-dark-night'
      }
    }
    else{
      return 'header-light'
    }
  }

  return (
    <div className={changeHeaderBg()}>
      {children}
    </div>
  )
} 

export default HeaderWrapper