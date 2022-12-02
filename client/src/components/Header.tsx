import React, { FC, PropsWithChildren } from 'react'

import styled from 'styled-components'
import Select from 'react-select'

import LocationIcon from './assets/icons/Location.svg'

import FlexWrapper from './UI/FlexWrapper'

import { ICity } from '../data/interfaces'  

interface ICoords{
    lat:number,
    lon:number,
}
interface IHeaderProps extends PropsWithChildren{
    theme:string
    switcher:string,
    links:Array<string>,
    cities:Array<ICity>
    setSwitcher:(link:string)=>void,
    switchData:()=>void,
    fetchData:(lat:number,lon:number)=>void
    handleChangeThem:(t:string)=>void
}

const switchRus = new Map([
  ['evening','Вечер'],
  ['night','Ночь'],
  ['morning','Утро'],
  ['day','День'],
])

const Header:FC<IHeaderProps> = ({switcher,links,setSwitcher,switchData,fetchData,cities,theme}) => {
  const options = cities.map(city => ({
    label:city.name, value:city.name,
  }))
  const handleChangeSwitcher = (link:string) => {
    setSwitcher(link)
    switchData()
  }
  const handleChanheCity = (city:string) => {
    const coords:ICoords = {lat:0,lon:0}
    cities.forEach(c => {
      if (c.name === city)
      {
        coords.lat = c.lat
        coords.lon = c.lon
      }         
    })
    fetchData(coords.lat,coords.lon)
  }
  const MenuLink = styled.a`
      text-decoration: none;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 26px;
      color: ${theme === 'light' ? 'rgba(121, 191, 255, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
      cursor:pointer;
      &.active{  
          color:${theme === 'light' ? '#79BFFF':'white'};
      }
    
    `
  const Logo = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: 1px;
    text-transform: capitalize;
    color:${theme==='light' ?  '#79BFFF':'white'};
    @media (max-width:900px){
      font-size:30px;
    }
  `
  return (
    <StyledHeader>
      <FlexWrapper jc="space-between" ai="center" fw="wrap">
        <div className="logo" ><Logo>Погода</Logo> </div>
        <div className="">
          <nav >
            <MenuList>
              <MenuItem>
                <MenuLink
                  onClick={ () => handleChangeSwitcher('now') }
                  className={ switcher === 'now' ? 'active' : ''}>
                  { 'Сейчас' } 
                </MenuLink>
              </MenuItem>
              {
                links.map(link=>
                  <MenuItem>    
                    <MenuLink 
                      onClick={ () => handleChangeSwitcher(link) }
                      className={ switcher === link ? 'active' : '' }>
                      {switchRus.get(link)} 
                    </MenuLink>
                  </MenuItem>
                )
              }
            </MenuList>
          </nav>
        </div>
        <div>
          <SelectWrapper className={theme === 'dark' ? 'dark' : ''}>
            <Select
              onChange={ (e) => { handleChanheCity(e?.value || 'Кемерово')}}
              options={options}
              placeholder="Выбирите город"
              classNamePrefix={ theme === 'light' ? 'custom-select' : 'custom-select-dark' }
            /> 
          </SelectWrapper>
        </div>
      </FlexWrapper>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.div`
    width: 100%;
     padding-top:20px;
     padding-bottom:20px;
`
const MenuList=styled.ul`
     list-style: none;
     display: flex;
`
const MenuItem = styled.li`
       margin-right: 40px;
       padding-bottom:10px;
       padding-left:5px;
       @media (max-width:500px){
        margin-right:30px;
    }
    @media (max-width:440px){
        margin-right:5px;
    }
`

const SelectWrapper = styled.div`
    position:relative;
    padding-left: 68px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: transparent;
    border: 1px solid #79BFFF;
    color: #79BFFF;
    border-radius: 10px;
    &:before {
        content: "";
        position:absolute;
        height: 20px;
        width:23px;
        top:19px;
        left:38px;
        background-image:url(${LocationIcon});
        background-repeat:no-repeat;
        background-position:center top;
        background-size:contain;

  }
  &.dark{
    border: 1px solid white;
  }
  @media (max-width:768px){
   padding: 8px 17px 8px 38px;
   margin-right:4vh;
   &:before {
        height: 18px;
        width:13px;
        top:17px;
        left:17px;
  }
}
`
