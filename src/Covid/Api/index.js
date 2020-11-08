import aixos from 'axios'

const getData = async() => {
    const urlApi = 'https://api.covid19api.com/summary'
    const response = await aixos.get(urlApi)
    const data = await response.status === 200 ? response.data : []
    return data

}
export const api = {
    getData
}
