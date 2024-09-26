$(function(){
$("ul li").has("span").css("color","red");//1.KULLANIM  Ul ve Li de span Olanları has ile denetle ve css ver
$("ul li:has('span')").css("color","red");//2.KULLANIM

})