let open_modal = document.getElementById('open_modal')
let modal = document.getElementById('modal')
let close_modal = document.getElementById('close_modal')

open_modal.addEventListener('click', function(event) {
    event.preventDefault()
    modal.style.display = 'block'
});

close_modal.addEventListener('click', function(event) {
    event.preventDefault()
    modal.style.display = 'none'
})

// Модульное окно для footer раздел документы - права обладателя
let open_prava = document.getElementById('open_prava')
let modal_prava = document.getElementById('modal_prava')
let close_prava = document.getElementById('close_prava')

open_prava.addEventListener('click', function(event) {
    event.preventDefault()
    modal_prava.style.display = 'block'
})

close_prava.addEventListener('click', function(event) {
    event.preventDefault()
    modal_prava.style.display = 'none'
})

