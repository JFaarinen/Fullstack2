import axios from 'axios'
const kantaUrl = 'http://localhost:3001/Henkilot'

const noudaHenkilot = () => {
    return axios.get(kantaUrl)
}

const lisaaHenkilo = uusiHenkilo => {
    return axios.post(kantaUrl, uusiHenkilo)
}

const poistaHenkilo = ({id}) => {
    return axios.delete("http://localhost:3001/Henkilot/6")
}

export default {noudaHenkilot, lisaaHenkilo, poistaHenkilo}