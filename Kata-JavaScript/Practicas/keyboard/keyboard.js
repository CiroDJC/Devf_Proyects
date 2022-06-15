const write = document.getElementById('write');
const btnLetters = document.querySelectorAll('.letter');
const btnDelete = document.querySelector('.delete')
const btnSpace = document.querySelector('.space')
const btnMayus = document.querySelector('.mayus')

let chars = []

//Agrega elementos
btnLetters.forEach((btnletters)=>{
    btnletters.addEventListener("click",()=>{
        write.value+=btnletters.innerText
        chars = write.value.split("")
    })
})

//Eliminar elementos
btnDelete.addEventListener("click",()=>{
    chars.pop()
    write.value=chars.join("")
})

//Espacio entre elementos
btnSpace.addEventListener("click",()=>{
    chars.push(" ")
    write.value=chars.join("")
})

//Mayusculas
btnMayus.addEventListener("click", () => {
    btnLetters.forEach((btnLetters) => {
        btnLetters.innerHTML=btnLetters.innerText.toUpperCase()
    })
})

