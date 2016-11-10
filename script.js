$(function(){

// select/deselect actual color
$(".palette li").on("click", function(){
	$("ul li").removeClass("selected");
	$(this).addClass("selected");
})

//hide/show color select panel
$("#newColor").on("click", function(){
	$("#colorPanel").toggle();
})

function changeColor(){
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("span").css("backgroundColor", "rgb(" + r + "," + g + "," + b + ")");
}

$("input").on("change", changeColor);

}); //end of ready function