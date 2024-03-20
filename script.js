// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



const Modal = {

    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open() {
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}



form.onsubmit = HandleSubmit
Modal.buttonClose.onclick = closePopUp

function HandleSubmit(event){
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const result = calculateIMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
    
}



function closePopUp(){
    Modal.close()
}



function calculateIMC(weight, height) {
    return(weight / ((height/100)**2)).toFixed(2)
}