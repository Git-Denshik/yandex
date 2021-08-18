const cartWrapper = document.querySelector('.card-wrapper');


// Отслеживаеим клик на страницы
window.addEventListener('click', function(event) {

    // Проверяем, что клик был совершен по кнопки "Добавить в корзину"
    if (event.target.hasAttribute('data-cart')) {
        // Находим карточку с товаром внутри которой был совершон клик
        const card = event.target.closest('.card')
        
        // Собираем данные с этого товара и записываем их в единный объект productInfo
        const productInfo = {
            id: card.dataset.id,
            title: card.querySelector('.item-title').innerText,
            audioSrc: card.querySelector('.product-audio').getAttribute('src'),
        }

        const cartItemHTML = `<div class="card-item" data-id="${productInfo.id}">
        <div class="card-item__top">
            <div class="card-item__img">
            <div class="card-item__title">${productInfo.title}</div>
            <audio controls src="${productInfo.audioSrc}"></audio>
            </div>
         
        </div>
    </div>`;

    cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)

    }
    
})