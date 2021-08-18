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

