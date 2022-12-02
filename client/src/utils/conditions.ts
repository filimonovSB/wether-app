import IconClear from '../components/assets/conditions/clear.png'
import IconCloudy from '../components/assets/conditions/cloudy.png'
import IcondDrizzle from '../components/assets/conditions/drizzle.png'
import IconHail from '../components/assets/conditions/hail.png'
import IconHeavyRain from '../components/assets/conditions/heavy-rain.png'
import IconOvercast from '../components/assets/conditions/overcast.png'
import IconPartyCloudy from '../components/assets/conditions/partlyCloudy.png'
import IconRain from '../components/assets/conditions/rainy.png'
import IconLightRain from '../components/assets/conditions/light-rain.png'
import IconModerateRain from '../components/assets/conditions/moderate-rain.png'
import IconShower from '../components/assets/conditions/shower.png'
import IconWetShow from '../components/assets/conditions/wet-snow.png'
import IconLightShow from '../components/assets/conditions/light-snow.png'
import IconSnow from '../components/assets/conditions/snow.png'
import IconSnowShowers from '../components/assets/conditions/snow-showers.png'
import IconThunderStorm from '../components/assets/conditions/thunderstorm.png'
import IconThunderStormWithRain from '../components/assets/conditions/thunderstorm-with-rain.png'
import IconСontinuousHeavyRain from '../components/assets/conditions/continuous-heavy-rain.png'
import IconThunderstormWithHail from '../components/assets/conditions/thunderstorm-with-hail.png'


export const conditions = new Map( [
  ['clear','Ясно'],
  ['partly-cloudy' , 'Малооблачно'],
  ['cloudy' , 'Облачно с прояснениями'],
  ['overcast' , 'Пасмурно'],
  ['drizzle' , 'Морось'],
  ['light-rain' , 'Небольшой дождь'],
  ['rain' , 'Дождь'],
  ['moderate-rain' , 'Умеренно сильный дождь'],
  ['heavy-rain' , 'Сильный дождь'],
  ['continuous-heavy-rain' , 'Длительный сильный дождь'],
  ['showers' , 'Ливень'],
  ['wet-snow' , 'Дождь со снегом'],
  ['light-snow', 'Небольшой снег'],
  ['snow' ,'Снег'],
  ['snow-showers' , 'Снегопад'],
  ['hail' , 'Град'],
  ['thunderstorm' , 'Гроза'],
  ['thunderstorm-with-rain' , 'Дождь с грозой'],
  ['thunderstorm-with-hail' , 'Гроза с градом'],
])
export const iconsConditions = new Map([
  ['clear',IconClear],
  ['partly-cloudy' , IconPartyCloudy],
  ['cloudy' , IconCloudy],
  ['overcast' , IconOvercast],
  ['drizzle' , IcondDrizzle],
  ['light-rain' , IconLightRain],
  ['rain' , IconRain],
  ['moderate-rain' , IconModerateRain],
  ['heavy-rain' , IconHeavyRain],
  ['continuous-heavy-rain' , IconСontinuousHeavyRain],
  ['showers' , IconShower],
  ['wet-snow' , IconWetShow],
  ['light-snow', IconLightShow],
  ['snow' ,IconSnow],
  ['snow-showers' , IconSnowShowers],
  ['hail' , IconHail],
  ['thunderstorm' , IconThunderStorm],
  ['thunderstorm-with-rain' , IconThunderStormWithRain],
  ['thunderstorm-with-hail' , IconThunderstormWithHail],
])