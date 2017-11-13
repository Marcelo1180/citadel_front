import config from './config'

// const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:pais&api_key=${config.apiKey}&format=json`
const URL = 'http://127.0.0.1:8000/api/v1/auto/?format=json&q=:pais'

export default function getArtists(xpais){
  const xurl = URL.replace(':pais', xpais)
  console.log(xurl)
  return fetch(xurl)
    .then(res => res.json())
    // .then(json => json)
}
