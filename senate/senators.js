async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

//using the data
let allSenators = []
const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
    populateDOM(allSenators)
})

//main area
const container = document.querySelector('.container')



function populateDOM(senator_array) {
        senator_array.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')
        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image is-4by3')
        let figureImage = document.createElement('img')
        let imageSource = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
        if (imageSource === 'https://www.congress.gov/img/member/j000300_200.jpg') imageSource = 'https://www.congress.gov/img/member/115_sr_al_jones_doug_200.jpg' 
        figureImage.src = imageSource
        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        card.appendChild(cardContent(senator))
        container.appendChild(card)
    })
}
 
function cardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'mediaLeft')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')
    let img = document.createElement('img')
    img.src = GetPartyImage(senator.party)
    img.alt = 'image of ' + senator.first_name + " " + senator.last_name + " (" + senator.party + ")"
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = senator.first_name + " " + senator.last_name + " (" + senator.party + ")"
    let subtitleP = document.createElement('p')
    subtitleP.setAttribute('class', 'subtitle is-6')
    //creating 
    let stateLink =document.createElement('a')
    stateLink.text = GetStateName(senator.state)
    stateLink.href =CreateStateURL(senator.state)
    subtitleP.appendChild(stateLink)
    

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subtitleP)
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)
    return cardContent



}
function CreateStateURL(state_abbrev)
{
    var URLstring = "https://www.usa.gov/state-government/" + GetStateName(state_abbrev.toUpperCase()).toLowerCase().replace(" ", "-");
    return URLstring;
}


//Getting the full state name
function GetStateName(state_abbrev)
{
    var state_name = ""
    switch (state_abbrev)
    {
        case "AL" :
            state_name = "Alabama";
            break;
        case "AK" :
            state_name = "Alaska";
            break;
        case "AZ" :
            state_name = "Arizona";
            break;
        case "AR" :
            state_name = "Arkansas";
            break;
        case "CA" :
            state_name = "California";
            break;
        case "CO" :
            state_name = "Colorado";
            break;
        case "CT" :
            state_name = "Connecticut";
            break;
        case "DE" :
            state_name = "Delaware";
            break;
        case "FL" :
            state_name = "Florida";
            break;
        case "GA" :
            state_name = "Georgia";
            break;
        case "HI" :
            state_name = "Hawaii";
            break;
        case "ID" :
            state_name = "Idaho";
            break;
        case "IL" :
            state_name = "Illinois";
            break;
        case "IN" :
            state_name = "Indiana";
            break;
        case "IA" :
            state_name = "Iowa";
            break;
        case "KS" :
            state_name = "Kansas";
            break;
        case "KY" :
            state_name = "Kentucky";
            break;
        case "LA" :
            state_name = "Louisiana";
            break;
        case "ME" :
            state_name = "Maine";
            break;
        case "MD" :
            state_name = "Maryland";
            break;
        case "MA" :
            state_name = "Massachusetts";
            break;
        case "MI" :
            state_name = "Michigan";
            break;
        case "MN" :
            state_name = "Minnesota";
            break;
        case "MS" :
            state_name = "Mississippi";
            break;
        case "MO" :
            state_name = "Missouri";
            break;
        case "MT" :
            state_name = "Montana";
            break;
        case "NE" :
            state_name = "Nebraska";
            break;
        case "NV" :
            state_name = "Nevada";
            break;
        case "NH" :
            state_name = "New Hampshire";
            break;
        case "NJ" :
            state_name = "New Jersey";
            break;
        case "NM" :
            state_name = "New Mexico";
            break;
        case "NY" :
            state_name = "New York";
            break;
        case "NC" :
            state_name = "North Carolina";
            break;
        case "ND" :
            state_name = "North Dakota";
            break;
        case "OH" :
            state_name = "Ohio";
            break;
        case "OK" :
            state_name = "Oklahoma";
            break;
        case "OR" :
            state_name = "Oregon";
            break;
        case "PA" :
            state_name = "Pennsylvania";
            break;
        case "RI" :
            state_name = "Rhode Island";
            break;
        case "SC" :
            state_name = "South Carolina";
            break;
        case "SD" :
            state_name = "South Dakota";
            break;
        case "TN" :
            state_name = "Tennessee";
            break;
        case "TX" :
            state_name = "Texas";
            break;
        case "UT" :
            state_name = "Utah";
            break;
        case "VT" :
            state_name = "Vermont";
            break;
        case "VA" :
            state_name = "Virginia";
            break;
        case "WA" :
            state_name = "Washington";
            break;
        case "WV" :
            state_name = "West Virginia";
            break;
        case "WI" :
            state_name = "Wisconsin";
            break;
        case "WY" :
            state_name = "Wyoming";
            break;
        default :
            state_name = "Utah"
            break;
        }

    return state_name;
}

function GetPartyImage(party)
{
    if (party == 'R')
    {
        return 'elephant.png'
    }
    else if (party == "D")
    {
        return 'donkey.png'
    }
    else
    {
        return 'other.png'
    }
}