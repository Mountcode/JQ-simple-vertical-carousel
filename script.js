 $(document).ready(function(){
   // Vertical product carousel
    function stepCarousel(carouselId, items){
        let carouselItemHeight = $('.item', carouselId).outerHeight(true), //высота одного элемента карусели
            allHEight = $('.item',carouselId).length * carouselItemHeight, //высота всех элементов карусели
            visibleHeight = items * carouselItemHeight, //высота видимых элементов карусели
            hidesHeight = (carouselItemHeight - visibleHeight) - carouselItemHeight, //высота скрытых элементов карусели
            moverTo = 0; //
        
        //  Среда карусели
        $(carouselId).css('height', visibleHeight);
        $(carouselId).prepend(`
            <div class="toTop disabled">
                TOTOP
            </div>
            <div class="toBot">
                TODOWN
            </div>                
        `);
        
        //  Анимация карусели
        $('.toTop', carouselId).click(function(){
            if(moverTo != 0){
                moverTo = moverTo + carouselItemHeight;
                $('.itemsContainer', carouselId).css('transform','translate3d(0, '+moverTo+'px, 0)');
                if(moverTo == 0){
                    $(this).addClass('disabled');
                }
            }
            if(moverTo > hidesHeight){
                $('.toBot', carouselId).removeClass('disabled'); 
            }
        });
        $('.toBot', carouselId).click(function(){
            if(moverTo > hidesHeight){
                moverTo = moverTo - carouselItemHeight;
                $('.itemsContainer', carouselId).css('transform','translate3d(0, '+moverTo+'px, 0)');
                if(moverTo <= hidesHeight){
                    $(this).addClass('disabled');
                }
            }
            if(moverTo > hidesHeight){
                $('.toTop', carouselId).removeClass('disabled'); 
            }
        });
    }
    //  Карусель галереи товара (страница карточка товара)
    stepCarousel('.stepCarousel', '3');
});
    
