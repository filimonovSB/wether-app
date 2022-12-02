import React, { FC } from 'react'

import styled from 'styled-components'

import Box from './UI/Box'
import FlexWrapper from './UI/FlexWrapper'

import { conditions, iconsConditions } from '../utils/conditions'
import { MyDate } from '../utils/date'

interface IWetherContentProps  {
    temp:number,
    condition:string,
    windSpeed:number,
    humidity:number,
    pressure:number
    
}

const WetherContent:FC<IWetherContentProps> = ({temp, condition, windSpeed, humidity, pressure}) => {
  return (
    <Wrap>
      <Date>{ MyDate() } </Date>
      <Box mt={30} mb={28}>
        <Temper>{temp}°C</Temper>
      </Box>
      <div className=""><img src={iconsConditions.get(condition)} style={{height:'99px'}} alt="" /></div>   
      <Box mt={27} mb={60}>
        <Condition>
          {conditions.get( condition)}
        </Condition>
      </Box>
      <FlexWrapper jc="space-between">
        <div>
          <Title>
            Скорость ветра
          </Title>
          <Value>
            {windSpeed} м/c
          </Value>
        </div>
        <div>
          <Title>
            Влажность воздуха
          </Title>
          <Value>
            { humidity}%
          </Value>
        </div>
        <div>
          <Title>
            Давление
          </Title>
          <Value>
            {pressure} мм рт. ст.
          </Value>
        </div>
      </FlexWrapper>
    </Wrap>    
  )
}

export default WetherContent
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 37px 212px 122px 124px;
 
    background: rgba(0, 0, 0, 0.3);
    @media (max-width:840px){
      padding: 37px 74px 122px 74px;
    }
    @media (max-width:500px){
      padding: 30px 30px 81px 30px;
    }
`
const Date = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;

    @media (max-width:768px){
      font-size: 15px;
    }
`
const Temper=styled.div`
  font-weight: 500;
  font-size: 48px;
  line-height: 70px;
  color:white;
  @media (max-width:768px){
    font-size:20px;
  }
`
const Condition = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media (max-width:768px){
    font-size:16px;
  }
`
const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  @media (max-width:768px){
    font-size:12px;
  }
`
const Value = styled.div`
  margin-top:30px;
  text-align:center;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  @media (max-width:768px){
    font-size:12px;
  }
`