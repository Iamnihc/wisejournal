var dev = navigator.platform.substring(0,3).toLowerCase();
var valid = dev =="mac" || dev == "win" || dev == "ipa";
if (!valid){ alert("try chrome on desktop for the best experience");}
if(window.innerHeight/window.innerWidth >2.4 ){ alert("Woah there thats very tall. Are you sure you  dont want to resize"); }
if(window.innerHeight/window.innerWidth <.3 ){ alert("Woah there thats very tall. Are you sure you  dont want to resize"); }
if(window.innerHeight<400 ){ alert("Woah there thats very small. Are you sure you  dont want to resize?"); }
if(window.innerwidth<400 ){ alert("Woah there thats very small. Are you sure you  dont want to resize"); }

var info = [["Event 1", "event body for things"],["Event 2","event things stuff so its long"],["Thing 3","here is stuff it should maybe possibly work"],["Thing 4","thigns that may or may not work but now theyre long"],["Thing 4","thigns that may or may not work but now theyre long"],["Thing 4","thigns that may or may not work but now theyre long"]];

var buttons = document.getElementById("bottom");
var numlist = [];
for (var i = 0; i< info.length; i++){
	numlist.push(i);
}

var currentEvent = 1;
function showline(num){
	console.log(num);
	if(num == currentEvent){
		console.log("adding");
		currentEvent ++;
		addElement(num)
		document.getElementById("button" + num).setAttribute("class", "clicked");
	}
	else if (num<currentEvent){
		var currentDiv = document.getElementById("middle");
		  var tot=$("#middle").innerHeight();
		currentDiv.scrollTo(0,tot*(num-1));
	}
	else{
		alert("No this is incorrect");
		console.log("nope");
	}
}

// Adding stuff
function addElement (num) {
  var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "infosection");
	var title = document.createElement("h2");
	var ttext = document.createTextNode(info[num-1][0]);
  var p = document.createElement("p");
	p.setAttribute("class", "body");
	title.setAttribute("class", "title");
	console.log(num);
  var newContent = document.createTextNode(info[num-1][0]);
	title.appendChild(ttext);
  newDiv.appendChild(title);
	p.appendChild(newContent);
	newDiv.appendChild(p);
  var currentDiv = document.getElementById("middle");
  currentDiv.appendChild(newDiv);
	var tot=$("#middle").innerHeight();
	currentDiv.scrollTo(0,tot*(num-1));

}

function aaaa(){
	$('head').append('<link rel="stylesheet" type="text/css" href="assets/help.css">');
}

// Scroll animation
$("#middle").on("scroll", function () {
  var pageTop = $("#middle").scrollTop();
  var pageBottom = pageTop + $("#middle").height();
  var tags = $(".infosection");
  var tot=$("#middle").innerHeight();
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var tagtop=$(tag).position().top;
    var diff;
		diff = Math.abs(tagtop % tot);
    console.log(i+" diff "+diff);
    var op=(1-((diff)/(tot)))**8;
    tag.style.opacity = op;
  }
})

// make buttons
while (numlist.length >0){

	var newButton = document.createElement("button");
	var rand = Math.floor(Math.random() * numlist.length);
	newButton.setAttribute("onclick", "showline("+(numlist[rand]+1)+")");
	newButton.setAttribute("type", "button");
	newButton.setAttribute("id", "button" + (numlist[rand]+1));
	newButton.appendChild(document.createTextNode(info[numlist[rand]][0]));
	buttons.appendChild(newButton);
	numlist.splice(rand,1);
}

document.addEventListener('keydown', logKey);
function logKey(e){
	console.log(e);
	console.log(e.getModifierState("Alt"))
	if(e.keyCode == 38 && e.ctrlKey && e.shiftKey && e.altKey){
		aaaa();
	}
}
var alerted = false;
var alerted3 = false;
var alerted4 = false;
$(window).resize(function(){
	if(window.innerHeight/window.innerWidth >2 && !alerted){alerted = true; alert("Woah there thats very tall. Are you sure you want to do that?"); }
	if(window.innerHeight<300 ){alerted3 = true; alert("Woah there thats very small. Are you sure you  dont want to resize?"); }
	if(window.innerwidth<400 ){alerted4 = true;  alert("Woah there thats very small. Are you sure you  dont want to resize"); }
})
var alerted2 = false;
$(window).resize(function(){if(window.innerHeight/window.innerWidth <.4 && !alerted2){alerted22 = true; alert("Woah there thats very narrow. Are you sure you want to do that?"); }})
