import axios from 'axios'
const kantaUrl = 'http://localhost:3001/Henkilot'

const noudaHenkilot = () => {
    return axios.get(kantaUrl)
}

const lisaaHenkilo = uusiHenkilo => {
    return axios.post(kantaUrl, uusiHenkilo)
}

const poistaHenkilo = ({id}) => {
    return axios.delete(kantaUrl+"/"+id)
}

const paivitaTiedot = henkilo => {
    return axios.put(kantaUrl+"/"+henkilo.id, henkilo)
}

export default {noudaHenkilot, lisaaHenkilo, poistaHenkilo, paivitaTiedot}