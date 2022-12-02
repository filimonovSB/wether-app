const days = [
  'Воскресенье','Понедельник','Вторник',
  'Среда','Четверг','Пятница','Суббота',
]
const months = [
  'Января','Февраля','Марта','Апреля',
  'Мая','Июня','Июля','Августа',
  'Сентября','Октября','Ноября','Декабря',
]
export const MyDate = () => {
  const date: Date = new Date() 
  const day = days[date.getDay()]
  const d =  date.getDate()
  const m = months[date.getMonth()]
  const y =date.getFullYear()
  const h =date.getHours()
  const min =date.getMinutes()
  return `${day}, ${d} ${m} ${y}, ${h}:${min}`
}
export const partDay = () => {
  const date: Date = new Date()   
  const h = date.getHours()
  if(h >= 0 && h < 6) return 'night'
  if (h >= 6 && h < 12) return  'morning'
  if (h >= 12 && h < 18) return  'day'
  if (h >= 18 && h < 24) return  'evening'
}