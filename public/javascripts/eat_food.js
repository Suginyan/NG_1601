$(function(){

var eat_foodModule = function(data){
	var obj = "<ul style='list-style:none;'>";

	for(var i = 0; i < data.length; i++) obj += "<li>" + data[i] + "</li>";
	obj += "</ul>";
    $("#eat_food_list").append(obj);
}


function getUserFoodList() {
	$.get("/get/food_list", function(data){
		alert("success!");
		eat_foodModule(data);
	});
}

});
