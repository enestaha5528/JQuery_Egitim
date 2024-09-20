$(function(){
    $("ul li").find("span").hide();//ul ve li deki spanları arar ve gizler
    $("ul li").eq(2).hide();//ul ve li ye gider ve 2. elemanı seçer(0 dan başlar) 1.KULLANIM
    $("ul li:eq(2)").hide();//ul ve li ye gider ve 2. elemanı seçer(0 dan başlar) 2.KULLANIM

})