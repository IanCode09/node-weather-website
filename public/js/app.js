console.log('Client Side javascript file is loaded');

/*
fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})
*/


// const url = 'http://localhost:3030/weather?address=Nias'

/*
fetch(url).then((response) => {
    response.json().then((data) => {
        if(data.error) {
            console.log(data.error);
        } else {
            console.log(data.location);
            console.log(data.forecastData);
        }
        
    })
})
*/


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const url = '/weather?address='
    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    
    fetch(url + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {

                // console.log(data.error);
                messageOne.textContent = data.error
                
            } else {
                // console.log(data.location);
                // console.log(data.forecastData);
                
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecastData

            }
        })
    })
})