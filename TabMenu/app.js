$(function() {
    $("button").click(function() {
        var buttonId = $(this).attr("id"); 
        $(".sayfa").css("display","none");
        $("." + buttonId).css("display", "flex"); 
    });
});
