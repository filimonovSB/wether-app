import React, { FC,useState,useEffect } from 'react'

import {  ICity, IWether } from './data/interfaces'
import Layout from './components/UI/Llayout'
import Header from './components/Header'
import Content from './components/UI/Content'
import WetherContent from './components/WetherContent'
import './global.css'

import FlexWrapper from './components/UI/FlexWrapper'
import ButtonsTheme from './components/UI/ButtonsTheme'
import { requestAPI } from './api'
import HeaderWrapper from './components/header-wrapper/HeaderWrapper'

interface IData{
  temp:number,
  condition:string,
  windSpeed:number,         
  humidity:number,                 
  pressure:number,                
}

const App:FC = () => {  
  const [theme,setTheme] = useState<string>('dark')
  const [wether,setWether] = useState<IWether>()
  const [cities,setCities] = useState<Array<ICity>>([])
  const [data, setData] = useState<IData>({
    temp:0,
    condition:'clear',
    windSpeed:0,
    humidity:0,
    pressure:0,
  })
  const [partsName,setPartsName] = useState<Array<string>>([])
  const [switcher,setSwithcer] = useState('now')

  const fetchData = async (lat = 55.35417, lon = 86.08972) => {
    const res = await requestAPI.get(`json/city?lat=${lat}&lon=${lon}`)
    const data = res.data
    setWether(data)
    const tempArr: any = []
    data.forecast.parts.forEach(
      (part: any): void => {
        tempArr.push(part.part_name)
        // setPartsName([...partsName, part.part_name])
      }
    )
    setPartsName(tempArr)
    setData({
      temp: Number(data.fact.temp),
      condition: String(data.fact.condition),
      windSpeed: Number(data.fact.wind_speed),
      humidity: Number(data.fact.humidity),
      pressure: Number(data.fact.pressure_mm),
    })
  }

  const fetchCities = async() => {
    const res = await requestAPI.get('cities')
    const data2 = res.data
    const temp :any = []
    data2.forEach((city:any) => {
      temp.push({name:city.name, lan:city.coords.lan, lon:city.coords.lon})
    })
    setCities(temp)
  }

  const loadData = (part:any) => {
    setData({
      temp:Number(part.temp_avg || part.temp),
      condition:String(part.condition),
      windSpeed:Number(part.wind_speed),         
      humidity:Number(part.humidity),                 
      pressure:Number(part.pressure_mm),  
    })
  }

  const switchData = () => {
    switch (switcher) {
    case 'evening':
      wether?.forecast.parts.forEach(
        (part:any)=>{
          if (part.part_name === 'evening') loadData(part)
        }
      )
      break
    case 'night':
      wether?.forecast.parts.forEach(
        (part:any)=>{
          if (part.part_name === 'night') loadData(part)
        }
      )
      break
    case 'morning':
      wether?.forecast.parts.forEach(
        (part:any)=>{
          if (part.part_name === 'morning') loadData(part)
        }
      )
      break
    case 'day':
      wether?.forecast.parts.forEach(
        (part:any)=>{
          if (part.part_name === 'day') loadData(part)
        }
      )
      break
    case 'now':
      if(wether) loadData(wether.fact)
      break
    }
  }

  const handleChangeThem = (t:string) => {
    setTheme(t)
  }

  useEffect(() => {
    switchData()
  },[switcher])

  useEffect(() => {
    fetchData()
    fetchCities()
  },[])

  return (
    <>
      <HeaderWrapper theme={theme} switcher={switcher}>
        <Layout>
          <FlexWrapper>
            <Header 
              switcher={switcher}
              links={partsName}
              setSwitcher={setSwithcer}
              switchData={switchData} 
              cities={cities}
              fetchData={fetchData}
              theme ={theme}
              handleChangeThem ={handleChangeThem}
            />
            <ButtonsTheme theme={theme} handleChangeThem={handleChangeThem} isMobil={true}/>
          
          </FlexWrapper>
        </Layout>
      </HeaderWrapper>
      
      <ButtonsTheme theme={theme} handleChangeThem={handleChangeThem} isMobil={false}/>
      
      <Content switcher ={switcher} theme={theme}> 
        <Layout>
          {
            wether
              ?
              <WetherContent 
                temp={ data.temp } 
                condition={data.condition} 
                windSpeed={data.windSpeed}
                humidity={data.humidity}
                pressure={data.pressure}
              />
              :
              'Нет данных'
          }
        </Layout>
      </Content>
    </>
  )
}

export default App

