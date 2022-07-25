var lastScrollTop = 0;
$(document).ready(function(){
    $(window).on('scroll',function(){
        let st = $(this).scrollTop();
        if(st < lastScrollTop){
            $('.menu').addClass('menu-fixed');
            $('.menu').removeClass('menu-Up');
        }else if(st > lastScrollTop){
            $('.menu').addClass('menu-Up');
            $('.menu').removeClass('menu-fixed');
        }else if(st == 0){
            $('.menu').removeClass('menu-Up');
            $('.menu').removeClass('menu-fixed');
        }
        lastScrollTop = st;
        console.log(lastScrollTop)
    });
});