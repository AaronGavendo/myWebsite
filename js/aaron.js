$(document).ready(function (){
	console.log("ready function in aaron.js runs");
	document.getElementById("header").innerHTML = "Aaron Gavendo";
	document.getElementById("footer").innerHTML = "Aaron Gavendo 2016";
    $('head').append('<link rel="icon" href="Pictures/icon.png">');
    $('head').append('<link rel="icon" href="../Pictures/icon.png">');
    $('head').append('<link rel="icon" href="../../Pictures/icon.png">');

	document.getElementById("index").innerHTML = "Home";
	document.getElementById("news").innerHTML = "News";
	document.getElementById("blogs").innerHTML = "Blogs";
	document.getElementById("gameR").innerHTML = "Game Reviews";
	document.getElementById("sampleW").innerHTML = "Sample Work";
	document.getElementById("games").innerHTML = "Games";




});