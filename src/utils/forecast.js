const request = require('request')

const forecast = (latitude, longitude, location, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+ latitude + '&lon=' + longitude + '&units=metric&appid=27bc80ebb229a9c097f82e13053d7146'
    //const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=27bc80ebb229a9c097f82e13053d7146'
 
    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
            country: location,
            weather: body.weather[0]['main'],
            temp: 'It is currently ' + body.main.temp + ' degrees, But it feels like ' + body.main.feels_like + ' degrees!',
            icon: body.weather[0]['icon']
            })
        }
    })
}

module.exports = forecast