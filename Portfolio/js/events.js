$(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 250)
        {
            $("#profileImg").fadeOut(100);
            $(".but").fadeOut(100);
        }
        else
        {
            $("#profileImg").fadeIn(100);
            $(".but").fadeIn(100);
        }
    });
});