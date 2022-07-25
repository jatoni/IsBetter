$(document).ready(function(){
    $('div.widget-first').on('click', 'div.boton-menu', function(e){
        e.preventDefault();
        $(this).closest('div.widget-first').find('widget-social').slideToggle(1000);
    })
})