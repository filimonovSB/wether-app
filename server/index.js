import express, { json } from 'express'
import cors from 'cors'
import axios from 'axios'
import fs from 'fs'

const PORT = process.env.POST ?? 3001
const app = express()
const baseURL = 'https://api.weather.yandex.ru/v2/informers'
const key = 'a4586a7e-80e6-4e22-8a49-0a63537648d5'
const lang = 'ru_RU'
const Cash={
    lat:0,
    lon:0,
}
let obj={}
const setObj=(data)=>{
    obj=data
}
let cites
let interval

fs.readFile('russian-cities.json','utf8', function(err,data){
    if(err) throw err;
    cites = JSON.parse(data)
})

app.use(cors())

const fetchCity = (lat=55.3333,lon=86.0833)=>{
    axios.get(`${baseURL}?lat=${lat}&lon=${lon}&lang=${lang}`,{headers:{'X-Yandex-API-Key':key}})
        .then((res)=>{setObj(res.data);}).catch(e=>console.log(e));
    clearInterval(interval)
    interval = setInterval(()=>{ 
        axios.get(`${baseURL}?lat=${lat}&lon=${lon}&lang=${lang}`,{headers:{'X-Yandex-API-Key':key}})
            .then((res)=>{setObj(res.data);}).catch(e=>console.log(e));
    },3600000)

}

app.get('/json/city',(req,res)=>{
    let params = req.query
    if(Cash.lat != params.lat && Cash.lon != params.lon){
         fetchCity(params.lat,params.lon)
    }
    res.json(obj)
})

app.get('/cities',(req,res)=>{  
    res.json(cites) 
})

app.listen(PORT,()=>{
    console.log(`server has been started on post ${PORT}`)
})
