export interface ICity{
    name:string,
    lat:number,
    lon:number,
  }
export interface IWether {
    fact:IFact,
    forecast: IForecast
    info:IInfo
    now:number,
    now_dt:string,
  }
export interface IFact{
    condition: string,
    daytime:string,
    feels_like:string,
    humidity:number,
    icon:string,
    obs_time:number,
    polar:boolean,
    pressure_mm:number,
    pressure_pa:number,
    season:string,
    temp:number,
    wind_dir:string,
    wind_gust:number,
    wind_speed:number,
}
export interface IParts{
    condition: string,
    daytime: string,
    feels_like: number,
    humidity: number,
    icon: string,
    part_name: string,
    polar: boolean,
    prec_mm: number,
    prec_period: number,
    prec_prob: number,
    pressure_mm: number,
    pressure_pa: number,
    temp_avg: number,
    temp_max: number,
    temp_min: number,
    wind_dir: string,
    wind_gust: number,
    wind_speed: number,
}
export interface IForecast{
    date:string,
    date_ts:number,
    moon_code: number,
    moon_text:string,
    parts: any,
    sunrise: string,
    sunset:string
    week:number,
}

export interface IInfo{
    lat:number,
    lon:number,
    url:string,
}