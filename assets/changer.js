
var info = [["event 1", "event body for things"],["event 2","event things stuff so its long"],["thing","here is stuff it should maybe possibly work"],["thing","thigns that may or may not work but now theyre long"]];

var buttons = document.getElementById("bottom");
var numlist = [];
for (var i = 0; i< info.length; i++){
	numlist.push(i);
}
while (numlist.length >0){

	var newButton = document.createElement("button");
	var rand = Math.floor(Math.random() * numlist.length);
	newButton.setAttribute("onclick", "showline("+numlist[rand]+")");
	newButton.appendChild(document.createTextNode(info[numlist[rand]][0]));
	buttons.appendChild(newButton);
	numlist.splice(rand,1);
}

var currentEvent = 1;
function showline(num){
	console.log(num);
	if(num == currentEvent){
		console.log("adding");
		currentEvent ++;
		addElement(num)
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


$("#middle").on("scroll", function () {
  var pageTop = $("#middle").scrollTop();
  var pageBottom = pageTop + $("#middle").height();
  var tags = $(".infosection");
  var tot=$("#middle").innerHeight();
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var tagtop=$(tag).position().top;
    var diff;
		/*
    if (pageTop-tagtop>tot){
      diff=0;
    }
    else if (pageTop-tagtop<0){
      diff=tagtop-pageTop;
    }
    else{
      diff=pageTop-tagtop;
    }
		*/
		diff = Math.abs(tagtop % tot);
    console.log(i+" diff "+diff);
    var op=(1-((diff)/(tot)))**8;
    tag.style.opacity = op;
  }
})
/*
$("#middle").scroll(function(){
    $(".infosection").css("opacity", 1 - ($(".infosection").scrollTop()  .)/ 250);
		console.log( 1 - $(".infosection").scrollTop() / 250);
  });
*/