import Axios from "axios";

export function request(config){

    const instance = Axios.create({
        baseURL:'http://wthrcdn.etouch.cn/weather_mini'
    })

    return instance(config)

}