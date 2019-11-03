import axios from 'axios'

const kantaUrl = "https://restcountries.eu/rest/v2/all"

const noudaMaat = () => {
    return (axios.get(kantaUrl))
}

export default {noudaMaat}