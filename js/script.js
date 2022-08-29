let mobilenav = document.getElementById("mobilenav")
let close = document.getElementById("close")
let mobilemenu = document.getElementById("mobilemenu")

mobilenav.addEventListener("click", (e) => {
    mobilemenu.classList.toggle("hidden")
    mobilenav.classList.toggle("hidden")
    close.classList.toggle("hidden")
})

close.addEventListener("click", (e) => {
    mobilemenu.classList.toggle("hidden")
    mobilenav.classList.toggle("hidden")
    close.classList.toggle("hidden")
})