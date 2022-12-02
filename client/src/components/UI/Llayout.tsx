import React, { Children, FC,PropsWithChildren } from 'react'
import styled from 'styled-components'

const Layout:FC<PropsWithChildren> = ({children}) => 
  <StyledLayout>
    {children}
  </StyledLayout>
  
export default Layout

const StyledLayout = styled.div`
  max-width: 1051px;
  padding: 0 35px;
  margin: 0 auto;
`