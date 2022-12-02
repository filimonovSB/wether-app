import React,{FC} from 'react'

import darkBtnDarkTheme from '../assets/icons/dark_btn.svg'
import lightBtnDarkTheme from '../assets/icons/light_btn.svg'
import darkBtnLightTheme from '../assets/icons/dark_btn_light_theme.svg'
import lightBtnLightTheme from '../assets/icons/light_btn_light_theme.svg'

interface IPropsButtons{
    theme:string,
    isMobil:boolean,
    handleChangeThem:(theme:string)=>void,
}

const ButtonsTheme:FC<IPropsButtons> = ({handleChangeThem,theme,isMobil}) => {
  return (
    <div className={isMobil ? 'buttons-theme-mobile':'buttons-theme'}>
      {
        theme === 'dark'
          ?
          <span>
            <button
              className="button-theme"
              onClick={() => handleChangeThem('light')}>
              <img src={lightBtnDarkTheme} alt="them button"/>
            </button>
            <button
              className="button-theme" 
              onClick={() => handleChangeThem('dark')}>
              <img src={darkBtnDarkTheme} alt="them button"/>
            </button>
          </span>
          :
          <span>
            <button className="button-theme"
              onClick={() => handleChangeThem('light')}>
              <img src={lightBtnLightTheme} alt="them button"/>
            </button>
            <button className="button-theme"
              onClick={() => handleChangeThem('dark')}>
              <img src={darkBtnLightTheme} alt="them button"/>
            </button>
          </span>     
      }
    </div>
  )
}

export default ButtonsTheme