$(function(){
    $("h1[id]").css("backgroundColor","Red");//h1 Leri Seç Ama İd si Olanları Seçer
    $("h1[id=h1]").css("backgroundColor","Pink");//h1 İd li h1 i seçer
    $("h1[id^=h]").css("backgroundColor","Pink");//id si h ile başlayan h1 i seç
    $("h1[id$=1]").css("backgroundColor","Pink");//1 ile Biten İd yi Seçer
    $("h1[id*=1]").css("backgroundColor","Pink");//İdsi içerisinde 1 olanı seçer
    
})