slides = document.getElementById("js--slides")
console.log(slides.children[0].classList)
let active = 0
let next = 1
setInterval(() => {
    slides.children[active].classList.remove("active")
    slides.children[next].classList.add("active")
    active = next
    next += 1 
    if (next == 4) {
        next = 0
    }
},10000)

