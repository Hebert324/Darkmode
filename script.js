const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme")

const getStyle = function(element, style) {
    window.getComputedStyle(element).getPropertyValue(style)
}

const initialColors = {
    //pegar o estilo do CSS
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "-color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664ff",
    colorText: "#B5B5B5"
}

const changeColors = (colors) =>{
    console.log(colors)
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})