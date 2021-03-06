const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url ='http://api.weatherstack.com/current?access_key=59a423726d127df5066d9009f7c21561&query=' + latitude + ',' + longitude + '& units=m'

    /*
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } 
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + ' It is currently ' + response.body.current.temperature + ' degress out.')
        }
    })
    */

   request({ url, json: true}, (error, { body }) => {
    if(error) {
        callback('Unable to connect to weather service!', undefined)
    } else if(body.error) {
        callback('Unable to find location', undefined)
    } 
    else {
        callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + '°C. It feels like : ' + body.current.feelslike + ' °C. The humidity is ' + body.current.humidity + ' %')
    }
})
}

module.exports = forecast