$(function(){
    $("#baslik"); //JQuery Seçici
    $("p").css("color","red") //Tüm P leri Seçer ve css verir
    $("p").children().css("color","blue");// Ebeveyn Dive verilir Alt Divleri Etkiler
    $("p").children(":first").css("border-bottom","1px solid black");//1. alt divi etkiler
    $(".gozukmeyen").hide();//Elemanı Göstermez

    // Parent() Üst Elemanı Etkiler
    $(".parentspan").parent().css("color","red"); // Üst Nesnesini Etkiler

    //siblings() Kardeş Elemanları Etkiler(kendisini etkilemez)
    $("em").siblings().css("color","red");

    $("button").click(function(){
        $("h1").addClass("active");//button click olunca h1'e class ekler
        $("h1").removeClass("yeni");//Class Siler
        $(".gozukmeyen").toggleClass("gozukmeyenaktive"); //Sürekli Yapılmasını Sağlar birkere basınca class verir 2.tıklanamda siler
    });

});