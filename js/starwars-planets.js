import { planets } from '../assets/planets.js'

let mainArea = document.querySelector('main')

planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h3')
    let planetPic = document.createElement('img')

   let planetNum = getCharNumber(planet.url)
   
    planetName.textContent = planet.name
    planetPic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`
   
   planetPic.addEventListener('error', (event) => {
        let badImage = event.target
        badImage.src = 'https://upload.wikimedia.org/wikipedia/en/d/d4/PlanetEndor.jpg'
   })
   
   
   
    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetPic)

    mainArea.appendChild(planetDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}