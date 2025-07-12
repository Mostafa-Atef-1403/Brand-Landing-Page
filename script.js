let chosen = document.querySelector('.selected')
let change_color = document.querySelector('.container')

function switching(clicked_src){
    chosen.src = clicked_src
}
function background(color) {
    change_color.style.background = color
}