let Cambio_de_tema = document.getElementsByClassName('change_theme')
let originalBackgroundColor = 'rgb(211, 228, 210)'
let originalTextColor = 'rgb(0, 0, 0)'
let isDarkMode = false

for (let i = 0; i < Cambio_de_tema.length; i++) {
    Cambio_de_tema[i].addEventListener('click', event => {
        if (!isDarkMode) {
            toggleDarkMode()
        } else {
            background_Default()

            isDarkMode = false
            console.log('Cambiado a modo claro')
        }
    })
}

function toggleDarkMode() {
    let backgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color')
    let rgb = backgroundColor.match(/\d+/g)
    let darkerRGB = rgb.map(value => Math.floor(value * 0.1))
    let darkerBackgroundColor = `rgb(${darkerRGB[0]}, ${darkerRGB[1]}, ${darkerRGB[2]})`
    document.body.style.backgroundColor = darkerBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        let elementColor = window.getComputedStyle(element).getPropertyValue('background-color')
        let elementRGB = elementColor.match(/\d+/g)
        let darkerElementRGB = elementRGB.map(value => Math.floor(value * 0.2))
        let darkerElementColor = `rgb(${darkerElementRGB[0]}, ${darkerElementRGB[1]}, ${darkerElementRGB[2]})`
        element.style.backgroundColor = darkerElementColor
    })

    document.body.style.color = 'rgb(255, 255, 255)'

    isDarkMode = true
    console.log('Cambiado a modo oscuro')
}

function background_Default() {
    document.body.style.backgroundColor = originalBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        element.style.backgroundColor = ''
    })

    document.body.style.color = originalTextColor
}
background_Default()
