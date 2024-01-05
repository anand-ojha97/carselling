$(document).ready(function(){
    var header = $("nav");
    var sticky = header.offset().top;

    $(window).scroll(function() {
        if (window.pageYOffset > sticky) {
            header.addClass("sticky");
        } else {
            header.removeClass("sticky");
        }
    });
});