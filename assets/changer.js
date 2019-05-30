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

var info = [
  ["World Trade Center Built", "April 4, 1973, The World Trade Center opens. The World Trade Center quickly became an icon of New York City,  joining the Empire State Building, The Statue of Liberty, The Brooklyn Bridge, and Time Square. The World Trade Center became a very popular tourist attraction."],
  ["World Trade Center Bombed", " The original mastermind behind 911 was a jihadist named Khalid Sheikh Mohammed, made a plan to attack the World Trade Center in 1993. Mohammed carried out a bombing of the World Trade Center in 1993. This was done with a car bomb, and not planes."],
  ["Planning for Attacks Begin", "In 1996, Khalid Sheikh Mohammed  joined al-Qaeda and started planning for another attack. He was able to convince the Taliban to aid him in his efforts. A long few years of planning with multiple people take place. KSM personally trains a group of operatives on how to infiltrate the US and blend in. As this training happens,  America is completely unaware of the attack."],
  ["World Trade Center Attacked", "In 2000, 19 men from Al-Qaeda entered the United States, 4 of whom were trained as pilots. September 11th,  2001 4 planes were hijacked. 2 were flown into the north and south Towers of the World Trade Center. Later a plane was rammed into the pentagon and another fell into a grassy field in Pennsylvania after passengers overtook the hijackers arn re-routed the collision."],
  ["Countermeasures Taken", "In 2002, New precautions are put into place, including a five-color threat system, card-access systems, metal detectors, and video cameras. The public was also encouraged to report anything that could be viewed as suspicious.  US starts working on countermeasures for cyber attacks in 2009. In May 27, 2010, the National Security Strategy guidelines were released by the DHS"],
  ["Bin Laden Killed", "On May 2, 2011, Osama Bin Laden was killed by US special forces"]
];

var buttons = document.getElementById("bottom");
var numlist = [];
for (var i = 0; i < info.length; i++) {
  numlist.push(i);
}

var currentEvent = 1;

function showline(num) {
  console.log(num);
  if (num == currentEvent) {
    console.log("adding");
    currentEvent++;
    addElement(num)
    document.getElementById("button" + num).setAttribute("class", "clicked");
  } else if (num < currentEvent) {
    var currentDiv = document.getElementById("middle");
    var tot = $("#middle").innerHeight();
    currentDiv.scrollTo(0, tot * (num - 1));
  } else {
    alert("No this is incorrect");
    console.log("nope");
  }
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
  currentDiv.scrollTo(0, tot * (num - 1));

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
while (numlist.length > 0) {

  var newButton = document.createElement("button");
  var rand = Math.floor(Math.random() * numlist.length);
  newButton.setAttribute("onclick", "showline(" + (numlist[rand] + 1) + ")");
  newButton.setAttribute("type", "button");
  newButton.setAttribute("id", "button" + (numlist[rand] + 1));
  newButton.appendChild(document.createTextNode(info[numlist[rand]][0]));
  newButton.setAttribute("class", "bottombutton");
  buttons.appendChild(newButton);
  numlist.splice(rand, 1);
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
