/*global $, alert, console*/
$(function(){
    
      $('.show-More').click(function(){
        
        $('.prodact .hidden').fadeIn(2000);
    });
    
        $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
});
$(function (){
    'use strict';
    $('.shoping ul li').on('click' , function () {
        $(this).addClass('selector').siblings().removeClass('selector');
        if($(this).data('class') === 'all'){
            $('.prodact .col-md-3').css('opacity' , '1');
        }else{
            $('.prodact .col-md-3').css('opacity' , '.08');
            $($(this).data('class')).parent().css('opacity' , '1');
        }
    });
});


