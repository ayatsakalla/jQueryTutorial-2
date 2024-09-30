$(document).ready(function () {
    $('.swatch').on('mouseover', function(){
        color = $(this).attr('id');
        $('#product-photo').attr('src', 'img/chair-' + color + '@2x.jpg');
        $('.swatch').removeClass('selected');
        $(this).addClass('selected');
        
    });
});