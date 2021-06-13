import axios from 'axios';
const API_URL = 'http://localhost:8080'


export const choices = async () => {
    return axios.get(`${API_URL}/choices`)
}

export const getScriptDetails = async (id) => {
    return axios.get(`${API_URL}/stock/${id}`)
}

export const addStockWatch = async (script, desiredPrice, desiredPercentageChange, change) => {
    return axios.post(`${API_URL}/stock`, {
        script,
        desiredPrice,
        desiredPercentageChange,
        change,
    })
}

export const getStockWatchOfUser = async()=>{
    return axios.get(`${API_URL}/stocks`)
}