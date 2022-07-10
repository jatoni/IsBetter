$(document).ready(function(){
    $('.header').load('../views/header.html', function(data){
        $(this).html(data);
    });

    $('.menu').load('../views/menu.html', function(data){
        $(this).html(data);
        console.log(data);
    });
});