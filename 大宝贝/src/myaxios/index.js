import Axios from "axios";

export function request(config){

    const instance = Axios.create({
        baseURL:"http://114.55.98.156:3000"
    })

    return instance(config)
}