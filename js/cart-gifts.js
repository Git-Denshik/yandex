const cargiftsWrapper = document.querySelector('.wrapper-gifts');


// Отслеживаеим клик на страницы
window.addEventListener('click', function(event) {

    // Проверяем, что клик был совершен по кнопки "Добавить в корзину"
    if (event.target.hasAttribute('data-gifts')) {
        // Находим карточку с товаром внутри которой был совершон клик
        const cardgifts = event.target.closest('.cardgifts')
        
        // Собираем данные с этого товара и записываем их в единный объект productInfo
        const productInfogifts = {
            id: cardgifts.dataset.id,
            giftstitle: cardgifts.querySelector('.item-title-gifts').innerText,
            giftstext: cardgifts.querySelector('.item-text-gifts').innerText,
            giftsSrc: cardgifts.querySelector('.product-gifts').getAttribute('src'),
        }

        const cartgiftsItemHTML = `<div class="card-item-gifts" data-id="${productInfogifts.id}">
        <div class="card-item__top-gifts">
            <div class="card-gifts">
            <div class="card-item__title-gifts">${productInfogifts.giftstitle}</div>
            <div class="card-text-gifts">${productInfogifts.giftstext}</div>
            <img src="${productInfogifts.giftsSrc}">
            </div>
         
        </div>
    </div>`;

    cargiftsWrapper.insertAdjacentHTML('beforeend', cartgiftsItemHTML)

    }
    
})