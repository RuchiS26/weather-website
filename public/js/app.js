const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const icon = document.querySelector('#icon')
const main = document.querySelector('#main')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    icon.innerHTML = ''
    main.innerHTML = ''

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
                messageThree.textContent = ''
                icon.innerHTML = ''
                main.innerHTML = ''
            } else {
                messageOne.textContent = ''
                var result = data.forecast
                messageTwo.textContent = "Location: " + result.country
                messageThree.textContent =  "Weather: " + result.temp
                icon.innerHTML = "<img src='http://openweathermap.org/img/wn/" + result.icon + "@2x.png'>"
                main.innerHTML = "<b>" + result.weather + "</b>"
            }
        })
    })
})