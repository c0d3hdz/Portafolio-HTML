let Cambio_de_tema = document.getElementsByClassName('change_theme')
const pastelColors = [
    'rgb(255, 1, 1)', // Rojo
    'rgb(255, 69, 1)', // Rojo anaranjado
    'rgb(255, 127, 1)', // Naranja
    'rgb(255, 165, 1)', // Naranja oscuro
    'rgb(255, 192, 1)', // Naranja amarillento
    'rgb(255, 255, 1)', // Amarillo
    'rgb(255, 255, 102)', // Amarillo claro
    'rgb(204, 255, 1)', // Lima
    'rgb(173, 255, 47)', // Verde lima
    'rgb(154, 205, 50)', // Verde limón
    'rgb(152, 251, 152)', // Verde pálido
    'rgb(1, 255, 1)', // Verde
    'rgb(50, 205, 50)', // Verde bosque
    'rgb(1, 250, 154)', // Verde medio
    'rgb(1, 128, 1)', // Verde oscuro
    'rgb(34, 139, 34)', // Verde bosque oscuro
    'rgb(1, 255, 255)', // Cian
    'rgb(1, 206, 209)', // Turquesa claro
    'rgb(72, 209, 204)', // Turquesa medio
    'rgb(1, 128, 128)', // Verde azulado
    'rgb(32, 178, 170)', // Verde azulado claro
    'rgb(1, 1, 255)', // Azul
    'rgb(1, 1, 205)', // Azul medio
    'rgb(65, 105, 225)', // Azul real
    'rgb(1, 1, 128)', // Azul oscuro
    'rgb(25, 25, 112)', // Azul medianoche
    'rgb(138, 43, 226)', // Violeta
    'rgb(148, 1, 211)', // Violeta oscuro
    'rgb(139, 1, 139)', // Violeta oscuro
    'rgb(186, 85, 211)', // Orquídea
    'rgb(218, 112, 214)', // Orquídea medio
    'rgb(153, 50, 204)', // Orquídea oscuro
    'rgb(148, 1, 211)', // Violeta
    'rgb(216, 191, 216)', // Lavanda
    'rgb(221, 160, 221)', // Orquídea pálida
    'rgb(255, 1, 255)', // Magenta
    'rgb(238, 130, 238)', // Magenta pálido
    'rgb(255, 105, 180)', // Rosa claro
    'rgb(255, 192, 203)', // Rosa
    'rgb(255, 182, 193)', // Rosa claro
    'rgb(255, 69, 1)', // Rojo anaranjado (repetido al final)
]

let originalBackgroundColor
let originalTextColor = 'rgb(0, 0, 0)'
let isDarkMode = true

for (let i = 0; i < Cambio_de_tema.length; i++) {
    Cambio_de_tema[i].addEventListener('click', event => {
        if (!isDarkMode) {
            toggleDarkMode()
            isDarkMode = true
        } else {
            background_Default()
            isDarkMode = false
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
    let darkerRGB = rgb.map(value => Math.floor(value * 0.2))
    let darkerBackgroundColor = `rgb(${darkerRGB[0]}, ${darkerRGB[1]}, ${darkerRGB[2]})`
    document.body.style.backgroundColor = darkerBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        let elementColor = originalBackgroundColor
        let elementRGB = elementColor.match(/\d+/g)
        let darkerElementRGB = elementRGB.map(value => Math.floor(value * 0.3))
        let darkerElementColor = `rgb(${darkerElementRGB[0]}, ${darkerElementRGB[1]}, ${darkerElementRGB[2]})`
        element.style.backgroundColor = darkerElementColor
    })

    document.body.style.color = 'rgb(255, 255, 255)'

    isDarkMode = true
}
function background_Default() {
    let lightColor = originalBackgroundColor
    let lightRgb = lightColor.match(/\d+/g)
    let lightColorRGB = lightRgb.map(value => Math.max(Math.floor(value * 1), 120))

    let lightBackgroundColor = `rgb(${lightColorRGB[0]}, ${lightColorRGB[1]}, ${lightColorRGB[2]})`
    document.body.style.backgroundColor = lightBackgroundColor

    let backGroundElements = document.querySelectorAll('.back_ground')
    backGroundElements.forEach(element => {
        element.style.backgroundColor = ''
    })

    document.body.style.color = originalTextColor
}
/*----------------------------------------------------- */
/*funcion para cambiar el color de fondo de la web */

const panelColor = document.querySelector('.panelColor')
const colorRange = document.getElementById('colorRange')

colorRange.addEventListener('input', function () {
    const index = parseInt(colorRange.value)
    const selectedColor = pastelColors[index]

    originalBackgroundColor = selectedColor

    if (!isDarkMode) {
        background_Default()
    } else {
        toggleDarkMode()
    }
    Color_elements()
})

colorRange.dispatchEvent(new Event('input'))
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
