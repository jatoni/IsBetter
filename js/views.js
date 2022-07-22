$(document).ready(function(){
    $('.header').load('../views/header.html', function(data){
        $(this).html(data);
    });
    $('.menu').load('../views/menu.html', function(data){
        $(this).html(data);
    });
    $('.about').load('../views/AboutUs.html', function(data){
        $(this).html(data);
    });
});