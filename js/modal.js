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

// Модульное окно для footer раздел документы - пользовательское соглашение
let open_polzovatel = document.getElementById('open_polzovatel')
let modal_polzovatel= document.getElementById('modal_polzovatel')
let close_polzovatel = document.getElementById('close_polzovatel')

open_polzovatel.addEventListener('click', function(event) {
    event.preventDefault()
    modal_polzovatel.style.display = 'block'
})

close_polzovatel.addEventListener('click', function(event) {
    event.preventDefault()
    modal_polzovatel.style.display = 'none'
})

// Модульное окно для footer раздел документы - Cлужба потдержки
let open_support = document.getElementById('open_support')
let modal_support= document.getElementById('modal_support')
let close_support = document.getElementById('close_support')

open_support.addEventListener('click', function(event) {
    event.preventDefault()
    modal_support.style.display = 'block'
})

close_support.addEventListener('click', function(event) {
    event.preventDefault()
    modal_support.style.display = 'none'
})