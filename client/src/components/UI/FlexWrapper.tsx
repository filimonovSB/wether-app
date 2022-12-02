import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface IFlexProps extends PropsWithChildren{
    w?:number,
    jc?:string,
    ai?:string,
    fw?:string,
}

const FlexWrapper:FC<IFlexProps> = ({children, w='100%', jc='stretch', fw='nowrap', ai='normal'}) => {
  const StyledFlexWrapper = styled.div<IFlexProps>`
    display: flex;
    width:${w};
    justify-content:${jc};
    align-items:${ai};
    flex-wrap:${fw};
`
  return (
    <StyledFlexWrapper>{children}</StyledFlexWrapper>
  )
}

export default FlexWrapper

