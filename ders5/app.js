$(function(){
    $("p").remove(); //Elemanı Siler
    var kopya=$("h1").clone(); //Kopyalar
    kopya.appendTo("h2");
    $("h1,h2,p").wrapAll("<div></div>")//h1,h2,p elemanlarını div içine alır
    $("h1").wrapInner("<div></div>");
    var img= $("img").attr("src");
    $("h1").text(img);//img deki src yi değişkene atayıp h1 e yazdırır
    $("button").click(function(){
        $("img").attr({
            src : "negan.jpg",
            width:"300px",
            height:"300px",
            title: "negan"
        })
    })
})