var dev = navigator.platform.substring(0, 3).toLowerCase();
var valid = dev == "mac" || dev == "win" || dev == "ipa";
if (!valid) {
  alert("try chrome on desktop for the best experience");
}
if (window.innerHeight / window.innerWidth > 2.4) {
  alert("Woah there thats very tall. Are you sure you  dont want to resize");
}
if (window.innerHeight / window.innerWidth < .3) {
  alert("Woah there thats very tall. Are you sure you  dont want to resize");
}
if (window.innerHeight < 400) {
  alert("Woah there thats very small. Are you sure you  dont want to resize?");
}
if (window.innerwidth < 400) {
  alert("Woah there thats very small. Are you sure you  dont want to resize");
}

var docPull = [
  ["title","date","In my lazyness I decided to use a website that I had already built instead of starting from scratch. Things may look a little weird for the first few weeks but I will slowly perfect it."],
  ["title","date","stuff"]
]

var info = [

  ["Journal Entry 0.0: Notes", docPull[0][0] ],
  ["Journal Entry 0.1: Goals", docPull[1][0] ],
  ["Journal Entry 0.2: I've Got the Horses in the Back", ""],
  ["Journal Entry 0.3: What I have done before", ""],
  ["Journal Entry 0.4: Oh No", ""],
  ["Journal Entry 1.0", ""],
  ["Journal Entry 1.1", ""],
];

var buttons = document.getElementById("bottom");
var numlist = [];
for (var i = 0; i < info.length; i++) {
  numlist.push(i);
}

var currentEvent = info.length;

function showline(num) {
  console.log(num);

    var currentDiv = document.getElementById("middle");
    var tot = $("#middle").innerHeight();
    currentDiv.scrollTo(0, tot * (num ));

}

for (let i =1; i<info.length+1; i++){
  console.log("adding");
  currentEvent++;
  addElement(i)
}

// Adding stuff
function addElement(num) {
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "infosection");
  var title = document.createElement("h2");
  var ttext = document.createTextNode(info[num - 1][0]);
  var p = document.createElement("p");
  p.setAttribute("class", "body");
  title.setAttribute("class", "title");
  console.log(num);
  var newContent = document.createTextNode(info[num - 1][1]);
  title.appendChild(ttext);
  newDiv.appendChild(title);
  p.appendChild(newContent);
  newDiv.appendChild(p);
  var currentDiv = document.getElementById("middle");
  currentDiv.appendChild(newDiv);
  var tot = $("#middle").innerHeight();
//  currentDiv.scrollTo(0, tot * (num - 1));

}

function aaaa() {
  $('head').append('<link rel="stylesheet" type="text/css" href="assets/help.css">');
}

// Scroll animation
$("#middle").on("scroll", function() {
  var pageTop = $("#middle").scrollTop();
  var pageBottom = pageTop + $("#middle").height();
  var tags = $(".infosection");
  var tot = $("#middle").innerHeight();
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    var tagtop = $(tag).position().top;
    var diff;
    diff = Math.abs(tagtop % tot);
    console.log(i + " diff " + diff);
    var op = (1 - ((diff) / (tot))) ** 8;
    tag.style.opacity = op;
  }
})



var half = numlist.length / 2;
// make buttons
for (let rand =0; rand<info.length; rand++){

  var newButton = document.createElement("button");

  newButton.setAttribute("onclick", "showline(" + (rand) + ")");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("id", "button" + (rand + 1));
  newButton.appendChild(document.createTextNode(info[rand][0]));
  newButton.setAttribute("class", "bottombutton");
  buttons.appendChild(newButton);

}

// add spacer in between buttons










document.addEventListener('keydown', logKey);

function logKey(e) {
  console.log(e);
  console.log(e.getModifierState("Alt"))
  if (e.keyCode == 38 && e.ctrlKey && e.shiftKey && e.altKey) {
    aaaa();
  }
}







var alerted = false;
var alerted3 = false;
var alerted4 = false;
$(window).resize(function() {
  if (window.innerHeight / window.innerWidth > 2 && !alerted) {
    alerted = true;
    alert("Woah there thats very tall. Are you sure you want to do that?");
  }
  if (window.innerHeight < 300) {
    alerted3 = true;
    alert("Woah there thats very small. Are you sure you  dont want to resize?");
  }
  if (window.innerwidth < 400) {
    alerted4 = true;
    alert("Woah there thats very small. Are you sure you  dont want to resize");
  }
})
var alerted2 = false;
$(window).resize(function() {
  if (window.innerHeight / window.innerWidth < .4 && !alerted2) {
    alerted22 = true;
    alert("Woah there thats very narrow. Are you sure you want to do that?");
  }
})


document.getElementById("middle").scrollTo(0, 0);