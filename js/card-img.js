const carImgWrapper = document.querySelector('.wrapper-img');


// Отслеживаеим клик на страницы
window.addEventListener('click', function(event) {

    // Проверяем, что клик был совершен по кнопки "Добавить в корзину"
    if (event.target.hasAttribute('data-img')) {
        // Находим карточку с товаром внутри которой был совершон клик
        const cardimg = event.target.closest('.cardimg')
        
        // Собираем данные с этого товара и записываем их в единный объект productInfo
        const productInfoImg = {
            id: cardimg.dataset.id,
            imgtitle: cardimg.querySelector('.item-title-img').innerText,
            imgSrc: cardimg.querySelector('.product-img').getAttribute('src'),
        }

        const cartImgItemHTML = `<div class="card-item-img" data-id="${productInfoImg.id}">
        <div class="card-item__top-img">
            <div class="card-item__image">
            <div class="card-item__title-img">${productInfoImg.imgtitle}</div>
            <img controls src="${productInfoImg.imgSrc}">
            </div>
         
        </div>
    </div>`;

    carImgWrapper.insertAdjacentHTML('beforeend', cartImgItemHTML)

    }
    
})