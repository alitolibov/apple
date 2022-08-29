let btn = document.querySelector('.green')
let btnSecond = document.querySelector('.pink')
let btnThird = document.querySelector('.blue')
let btnFour = document.querySelector('.black')
let btnFive = document.querySelector('.white')
let btnSix = document.querySelector('.red')
let img = document.querySelector('.img-block')

btn.onclick = () => {
    img.classList.add('active')
}
btnSecond.onclick = () => {
    img.classList.add('active1')
}
btnThird.onclick = () => {
    img.classList.add('active2')
}
btnFour.onclick = () => {
    img.classList.add('active3')
}
btnFive.onclick = () => {
    img.classList.add('active4')
}
btnSix.onclick = () => {
    img.classList.add('active5')
}