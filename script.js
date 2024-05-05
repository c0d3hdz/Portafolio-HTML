let Cambio_de_tema = document.getElementsByClassName('change_theme')
const pastelColors = [
    'rgb(255, 204, 204)', // Rosa pastel
    'rgb(255, 229, 204)', // Melocotón pastel
    'rgb(255, 255, 204)', // Amarillo pastel
    'rgb(204, 255, 204)', // Verde pastel
    'rgb(204, 255, 255)', // Cian pastel
    'rgb(204, 204, 255)', // Azul pastel
    'rgb(255, 204, 255)', // Lila pastel
    'rgb(255, 153, 204)', // Malva pastel
    'rgb(255, 204, 153)', // Melón pastel
    'rgb(153, 204, 255)', // Celeste pastel
]
let originalBackgroundColor = pastelColors[0]
let originalTextColor = 'rgb(0, 0, 0)'
let isDarkMode = true
toggleDarkMode

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
function toggle_panelColor() {
    let panel_Content = document.querySelector('.panelColor')

    if (panel_Content.style.display === 'none' || !panel_Content.style.display) {
        panel_Content.style.display = 'flex'
    } else {
        panel_Content.style.display = 'none'
    }
}
let changeColorButton = document.querySelector('.change_color')
changeColorButton.addEventListener('click', toggle_panelColor)

function toggleDarkMode() {
    let backgroundColor = originalBackgroundColor
    let rgb = backgroundColor.match(/\d+/g)
    let darkerRGB = rgb.map(value => Math.floor(value * 0.3))
    let darkerBackgroundColor = `rgb(${darkerRGB[0]}, ${darkerRGB[1]}, ${darkerRGB[2]})`
    document.body.style.backgroundColor = darkerBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        let elementColor = originalBackgroundColor
        let elementRGB = elementColor.match(/\d+/g)
        let darkerElementRGB = elementRGB.map(value => Math.floor(value * 0.5))
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
//---------------------------------------------------------------------
let X_panelColor = 0
let Y_panelColor = 0

function updatePanelPosition() {
    let elemento = document.querySelector('.change_color')
    if (!elemento) {
        console.error('No se encontró ningún elemento con la clase "change_color"')
        return
    }

    let panel = document.querySelector('.panelColor')
    if (!panel) {
        console.error('No se encontró ningún elemento con la clase "panelColor"')
        return
    }

    let elementoRect = elemento.getBoundingClientRect()
    X_panelColor = elementoRect.left - 285 + window.scrollX
    Y_panelColor = elementoRect.top + 25 + window.scrollY

    panel.style.position = 'absolute'
    panel.style.left = X_panelColor + 'px'
    panel.style.top = Y_panelColor + 'px'
}

updatePanelPosition()

window.addEventListener('resize', updatePanelPosition)
/*----------------------------------------------------- */
/*funcion para cambiar el color de fondo de la web */

const panelColor = document.querySelector('.panelColor')
const colorRange = document.getElementById('colorRange')

colorRange.addEventListener('input', function () {
    const index = parseInt(colorRange.value)
    const selectedColor = pastelColors[index]

    originalBackgroundColor = selectedColor

    if (!isDarkMode) {
        document.body.style.backgroundColor = selectedColor
    } else {
        toggleDarkMode()
    }
    Color_elements()
})

colorRange.dispatchEvent(new Event('input'))

function background_Default() {
    document.body.style.backgroundColor = originalBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        element.style.backgroundColor = ''
    })

    document.body.style.color = originalTextColor
}
/*------------------------------------------------------------------------------------------------------------- */

function Color_elements() {
    let color_titles = document.getElementsByClassName('Title_proyect')

    for (let i = 0; i < color_titles.length; i++) {
        color_titles[i].style.color = originalBackgroundColor
    }

    let color_bold = document.getElementsByClassName('text_bold')
    for (let i = 0; i < color_bold.length; i++) {
        color_bold[i].style.color = originalBackgroundColor
    }
}
function applyHoverEffect(className) {
    let elements = document.getElementsByClassName(className)

    for (let i = 0; i < elements.length; i++) {
        let link = elements[i].querySelector('a')

        link.addEventListener('mouseenter', function () {
            let computedStyle = window.getComputedStyle(elements[i])
            let originalRGB = originalBackgroundColor.match(/\d+/g)
            link.style.backgroundColor = `rgba(${originalRGB[0]}, ${originalRGB[1]}, ${originalRGB[2]}, 0.3)`
        })

        link.addEventListener('mouseleave', function () {
            link.style.backgroundColor = 'transparent'
        })
    }
}

applyHoverEffect('button_active')
