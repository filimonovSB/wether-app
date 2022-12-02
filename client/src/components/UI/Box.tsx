import styled from 'styled-components'

import React, { FC, PropsWithChildren } from 'react'

interface IBoxProps extends PropsWithChildren{
    m?:number,
    mt?:number,
    mr?:number,
    mb?:number,
    ml?:number,
    p?:number,
    pt?:number,
    pr?:number,
    pb?:number,
    pl?:number,
    w?:number,
}

const Box:FC<IBoxProps> = ({
    m = 0,
    mt = 0,
    mr = 0,
    mb = 0,
    ml = 0,
    p = 0,
    pt = 0,
    pr = 0,
    pb = 0,
    pl = 0,
    w = '100%',
    children,
  }) => {
    const StyledBox = styled.div`
      margin: ${m}px;
      margin-top: ${mt}px;
      margin-right: ${mr}px;
      margin-bottom: ${mb}px;
      margin-left: ${ml}px;
      padding: ${p}px;
      padding-top: ${pt}px;
      padding-right: ${pr}px;
      padding-bottom: ${pb}px;
      padding-left: ${pl}px;
      width: ${w}px;
    `
  return (
    <StyledBox>{children}</StyledBox>
  )
}

export default Box
 
 