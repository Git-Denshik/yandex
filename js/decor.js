sharik.onmousedown = function(event) {

    let shiftX = event.clientX - sharik.getBoundingClientRect().left;
    let shiftY = event.clientY - sharik.getBoundingClientRect().top;
    
    sharik.style.position = 'absolute';
    sharik.style.zIndex = 1000;
    document.body.append(sharik);
    
    moveAt(event.pageX, event.pageY);
    
    // переносит елемент на координаты,
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
        sharik.style.left = pageX - shiftX + 'px';
        sharik.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    // передвигаем елемент при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
    
    // отпустить елемент, удалить ненужные обработчики
    sharik.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      sharik.onmouseup = null;
    };
    
    };
    
    sharik.ondragstart = function() {
    return false;
    };



    // Скрипт для второго шарика
    sharik_2.onmousedown = function(event) {

        let shiftX = event.clientX - sharik_2.getBoundingClientRect().left;
        let shiftY = event.clientY - sharik_2.getBoundingClientRect().top;
        
        sharik_2.style.position = 'absolute';
        sharik_2.style.zIndex = 1000;
        document.body.append(sharik_2);
        
        moveAt(event.pageX, event.pageY);
        
        // переносит елемент на координаты,
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            sharik_2.style.left = pageX - shiftX + 'px';
            sharik_2.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
        
        // передвигаем елемент при событии mousemove
        document.addEventListener('mousemove', onMouseMove);
        
        // отпустить елемент, удалить ненужные обработчики
        sharik_2.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          sharik_2.onmouseup = null;
        };
        
        };
        
        sharik_2.ondragstart = function() {
        return false;
        };

         // Скрипт для третьего шарика
    sharik_3.onmousedown = function(event) {

        let shiftX = event.clientX - sharik_3.getBoundingClientRect().left;
        let shiftY = event.clientY - sharik_3.getBoundingClientRect().top;
        
        sharik_3.style.position = 'absolute';
        sharik_3.style.zIndex = 1000;
        document.body.append(sharik_3);
        
        moveAt(event.pageX, event.pageY);
        
        // переносит елемент на координаты,
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            sharik_3.style.left = pageX - shiftX + 'px';
            sharik_3.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
        
        // передвигаем елемент при событии mousemove
        document.addEventListener('mousemove', onMouseMove);
        
        // отпустить елемент, удалить ненужные обработчики
        sharik_3.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          sharik_3.onmouseup = null;
        };
        
        };
        
        sharik_3.ondragstart = function() {
        return false;
        };


        // Скрипт для сердца
        heart.onmousedown = function(event) {

        let shiftX = event.clientX - heart.getBoundingClientRect().left;
        let shiftY = event.clientY - heart.getBoundingClientRect().top;
        
        heart.style.position = 'absolute';
        heart.style.zIndex = 1000;
        document.body.append(heart);
        
        moveAt(event.pageX, event.pageY);
        
        // переносит елемент на координаты,
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            heart.style.left = pageX - shiftX + 'px';
            heart.style.top = pageY - shiftY + 'px';
        }
        
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
        
        // передвигаем елемент при событии mousemove
        document.addEventListener('mousemove', onMouseMove);
        
        // отпустить елемент, удалить ненужные обработчики
        heart.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          heart.onmouseup = null;
        };
        
        };
        
        heart.ondragstart = function() {
        return false;
        };


        // Скрипт для еще одного сердца
        heart_2.onmousedown = function(event) {

            let shiftX = event.clientX - heart_2.getBoundingClientRect().left;
            let shiftY = event.clientY - heart_2.getBoundingClientRect().top;
            
            heart_2.style.position = 'absolute';
            heart_2.style.zIndex = 1000;
            document.body.append(heart_2);
            
            moveAt(event.pageX, event.pageY);
            
            // переносит елемент на координаты,
            // дополнительно учитывая изначальный сдвиг относительно указателя мыши
            function moveAt(pageX, pageY) {
                heart_2.style.left = pageX - shiftX + 'px';
                heart_2.style.top = pageY - shiftY + 'px';
            }
            
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            
            // передвигаем елемент при событии mousemove
            document.addEventListener('mousemove', onMouseMove);
            
            // отпустить елемент, удалить ненужные обработчики
            heart_2.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              heart_2.onmouseup = null;
            };
            
            };
            
            heart_2.ondragstart = function() {
            return false;
            };



            // Скрипт флажков
        flag.onmousedown = function(event) {

            let shiftX = event.clientX - flag.getBoundingClientRect().left;
            let shiftY = event.clientY - flag.getBoundingClientRect().top;
            
            flag.style.position = 'absolute';
            flag.style.zIndex = 1000;
            document.body.append(flag);
            
            moveAt(event.pageX, event.pageY);
            
            // переносит елемент на координаты,
            // дополнительно учитывая изначальный сдвиг относительно указателя мыши
            function moveAt(pageX, pageY) {
                flag.style.left = pageX - shiftX + 'px';
                flag.style.top = pageY - shiftY + 'px';
            }
            
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            
            // передвигаем елемент при событии mousemove
            document.addEventListener('mousemove', onMouseMove);
            
            // отпустить елемент, удалить ненужные обработчики
            flag.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              flag.onmouseup = null;
            };
            
            };
            
            flag.ondragstart = function() {
            return false;
            };


            // Скрипт цветов
            flowers.onmousedown = function(event) {

            let shiftX = event.clientX - flowers.getBoundingClientRect().left;
            let shiftY = event.clientY - flowers.getBoundingClientRect().top;
            
            flowers.style.position = 'absolute';
            flowers.style.zIndex = 1000;
            document.body.append(flowers);
            
            moveAt(event.pageX, event.pageY);
            
            // переносит елемент на координаты,
            // дополнительно учитывая изначальный сдвиг относительно указателя мыши
            function moveAt(pageX, pageY) {
                flowers.style.left = pageX - shiftX + 'px';
                flowers.style.top = pageY - shiftY + 'px';
            }
            
            function onMouseMove(event) {
              moveAt(event.pageX, event.pageY);
            }
            
            // передвигаем елемент при событии mousemove
            document.addEventListener('mousemove', onMouseMove);
            
            // отпустить елемент, удалить ненужные обработчики
            flowers.onmouseup = function() {
              document.removeEventListener('mousemove', onMouseMove);
              flowers.onmouseup = null;
            };
            
            };
            
            flowers.ondragstart = function() {
            return false;
            };


             // Скрипт цветов
             flowers_2.onmousedown = function(event) {

                let shiftX = event.clientX - flowers_2.getBoundingClientRect().left;
                let shiftY = event.clientY - flowers_2.getBoundingClientRect().top;
                
                flowers_2.style.position = 'absolute';
                flowers_2.style.zIndex = 1000;
                document.body.append(flowers_2);
                
                moveAt(event.pageX, event.pageY);
                
                // переносит елемент на координаты,
                // дополнительно учитывая изначальный сдвиг относительно указателя мыши
                function moveAt(pageX, pageY) {
                    flowers_2.style.left = pageX - shiftX + 'px';
                    flowers_2.style.top = pageY - shiftY + 'px';
                }
                
                function onMouseMove(event) {
                  moveAt(event.pageX, event.pageY);
                }
                
                // передвигаем елемент при событии mousemove
                document.addEventListener('mousemove', onMouseMove);
                
                // отпустить елемент, удалить ненужные обработчики
                flowers_2.onmouseup = function() {
                  document.removeEventListener('mousemove', onMouseMove);
                  flowers_2.onmouseup = null;
                };
                
                };
                
                flowers_2.ondragstart = function() {
                return false;
                };


            // Скрипт цвто музыка
            music_decor.onmousedown = function(event) {

                let shiftX = event.clientX - music_decor.getBoundingClientRect().left;
                let shiftY = event.clientY - music_decor.getBoundingClientRect().top;
                
                music_decor.style.position = 'absolute';
                music_decor.style.zIndex = 1000;
                document.body.append(music_decor);
                
                moveAt(event.pageX, event.pageY);
                
                // переносит елемент на координаты,
                // дополнительно учитывая изначальный сдвиг относительно указателя мыши
                function moveAt(pageX, pageY) {
                    music_decor.style.left = pageX - shiftX + 'px';
                    music_decor.style.top = pageY - shiftY + 'px';
                }
                
                function onMouseMove(event) {
                  moveAt(event.pageX, event.pageY);
                }
                
                // передвигаем елемент при событии mousemove
                document.addEventListener('mousemove', onMouseMove);
                
                // отпустить елемент, удалить ненужные обработчики
                music_decor.onmouseup = function() {
                  document.removeEventListener('mousemove', onMouseMove);
                  music_decor.onmouseup = null;
                };
                
                };
                
                music_decor.ondragstart = function() {
                return false;
                };