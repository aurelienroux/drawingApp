$(function(){

// select/deselect actual color
$(".palette").on("click", "li", function(){
	$("ul li").removeClass("selected");
	$(this).addClass("selected");
})

//hide/show color select panel
$("#newColor").on("click", function(){
	$("#colorPanel").toggle();
})

//refresh span color with sliders
function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("span").css("backgroundColor", "rgb(" + r + "," + g + "," + b + ")");
}
$("input").on("change", changeColor);

//append new color to palette
$("#addColor").on("click", function(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();

	var $colorAdd = $("<li></li>");
	$(".palette").append($colorAdd);
	$colorAdd.css("backgroundColor", "rgb(" + r + "," + g + "," + b + ")");
	$colorAdd.click();
});


}); //end of ready function