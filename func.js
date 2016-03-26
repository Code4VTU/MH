var prices = {};
var names = {};
var total = 0;


function onLoad() {
	var body_size = document.body;
	var width = 0;
	width = body_size.clientWidth/2 - 700;
	document.getElementById("order").style.right  = width + "px";
}

function order() {

}

function LoadNewPage(pageName) {
	if(pageName == "index") {
	
	}
	else if(pageName == "menu") {
	
	}
	else if(pageName == "fun") {
	
	}
	else if(pageName == "news") {
	
	}
	else if(pageName == "contact") {
	
	}
}

function onScroll() {
	a = document.body.scrollTop;
	if(a>1) {
		document.getElementById("order").style.position = "fixed";
	}
	else document.getElementById("order").style.position = "absolute";
}