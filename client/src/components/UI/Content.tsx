import React, { FC, PropsWithChildren } from 'react'

import styled from 'styled-components'

import { bgs, bgsDark } from '../../utils/bg'
import { partDay } from '../../utils/date'
 
interface IContentProps extends PropsWithChildren{
  switcher:string,
  theme:string,
}
 
const Content:FC<IContentProps> = ({children,switcher,theme}) => {
  let bg:any
  if (switcher === 'now')
  {
    bg = partDay()
  }
  else {
    bg = switcher
  }

  const StyledContent = styled.div`
    padding: 112px 0;
    width: 100%;
    background-image: url(${theme === 'light' ? bgs.get(bg) : bgsDark.get(bg)});
    background-repeat:no-repeat;
    background-position: center top;
    background-size: cover;
    @media (max-width:768px){
      padding: 42px 0;
      }
      @media (max-width:500px){
      padding: 65px 0;
      }
`
  return (
    <StyledContent>{children}</StyledContent>
  )
  
}

export default Content

