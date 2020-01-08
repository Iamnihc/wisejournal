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
  ["Journal 0.0:\nDecisions", "1/7/20", "Almost as soon as I started writing, I realized that I had to make big decisions about this journal.\n\nHow do I organize it? Most of it will be broken up into sections. Every week should have a section about what I learned on other cars, a section for my own car, and a section for any reading or other research I do, probably at least one short section on the status of the journal itself, and more if required.\n\nDo I keep it simple to understand, or do I keep it more technical? Although a year ago, I did not have any knowledge about cars, my knowledge is increasing and some of the things I do might be hard to write about without using technical terms. Instead of solving this problem, I will add a section to each journal entry explaining all the parts of a car that I mention. \n\nBecause I don't like google docs, I will type the whole journal on google docs but it will be a lot more organized on the website that goes along with it. I am going to write a script that makes my wise journal look pretty on a website. That site will be hosted at http://iamnihc.github.io/wisejournal. It’s going to be created by downloading this doc in plain text and reformatting it. I just like code. Also, I can add pictures, videos, diagrams, drawings, and a lot more there. In my laziness, I decided to use a website that I had already built instead of starting from scratch. Things may look a little weird for the first few weeks but I will slowly perfect it. While I figure out the best way to automate things, the doc may be styled strangely"],
  ["Journal 0.1\n Why", "12/20/19", "I have a confession to make. I started my wise project a while ago to pacify my mother. Over the summer, she bothered me repeatedly to get some sort of job, instead of sitting at home and playing games. Instead of picking a job I could get, I thought of the hardest job I could never get: a car mechanic. I knew nothing about cars. I didn't know how to change oil, brakes, batteries, or anything else. For that matter, I didn't know how to jump-start a car or change a tire. As I was in the process of getting my license, I knew my car had a dying battery, old wipers, and probably a lot more wrong. My mom contacted our go-to car mechanic and asked if I could help out over the summer. After a brief interview and changing a battery as a test, I started going there every day. At this point, I had little thought about WISE. My goal was simply to learn more about cars and do something fun over the summer. Although I would have enjoyed continuing over the summer, I only had 3 free weeks at the start of summer. As my last day in my 3-week trial ended, I thought about WISE, and what I could do. My mind jumped to cell phone repair and automotive maintenance. Still knowing very little about cars, I chose automotive maintenance, wanting to return to the weeks in the summer that I had enjoyed. "],
  ["Journal 0.2\n Goals", "12/20/19", "This semester in WISE, I want to learn more about cars, as even though I can do a brake job with some help, and oil changes with ease, I know nothing more than this basic maintenance. I want to go from keeping a car running to making a car run again. Entirely out of WISE, I want to learn how to drive a stick shift car, and along with that, maintain one, fixing things like the clutch and transmission. Personally, I would like to buy a car, something my parents will allow, but only with a limited budget, fix it up, and make it suit my aesthetic tastes along with my tastes for speed. A smaller, but more important personal goal is to not get another speeding ticket, but that shouldn’t be that hard, after all, I have already learned my lesson. Learning from all the cars that come in in various states of disrepair, I would like to be able to do more advanced repairs on my own and go from the “hand me the wrench” or “undo this bolt” kid to somebody who can be assigned whole jobs, and complete them in a day. Although many days I will probably be perfecting the art of the speed oil change, I want to learn more about the other systems that make a car go. From the conveniences of AC and stereo systems to the more important like engine rebuilds, I want to be as advanced as anyone else at this shop. As I learn best hands-on, it would be easiest for me to learn these repairs by working with the people who know what they are doing first, along with guidance from my mentor, the shop owner. As I advance on each system, I want to start working on my personal car and make it less of an overheating mess. Finally, in the professional parts of my wise project, I plan to become an asset who can be relied upon to do any of the work needed in the shop, even though I’m not getting paid. I would like to work on at least one whole car every day, although some projects may be more complicated and take longer. Other ambitions I have include building a digital display for my car using my code and electronics knowledge, and possibly tuning an ECU, also using my code knowledge. Although my 3 passions are Code, Cars, and Space (I couldn’t make that start with a C) I would like to combine as many of them as possible. Another possible project would be to use the knowledge of cars to help a friend build an electric go-kart. Although almost all the cars that come in are going to be gas-powered, I also have some knowledge of electric cars and propulsion through my electronics and robotics knowledge. From what I have done so far, I have learned that cars, along with all the things I mess with, are just like legos. In fact, Every system is its own lego-like system, and all I need to do is build what I want, and the adapters between them."],
  ["Journal 0.3\n Oh No", "1/7/20", "After a lot of looking, I finally got my own car. It’s a 2001 red convertible Ford Mustang v6 automatic. Pretty much exactly what my parents don't want me to have. Unfortunately, It has quite a few problems. The registration expires in 2 weeks, and I need to get it to pass smog. To do so, I have to replace the aftermarket air intake. On the drive back from Brentwood, I realized that the headlights did not work properly. Upon further investigation at home (with Stevie Wilder) I realized those too were aftermarket. The last major problem I discovered was a leak that put a lot of water in the back seat on the passenger side. The other problems include: a few missing or out lights, an oil change is needed soon, the driver’s power seat doesn’t work, a misaligned trunk, the AC and heat are stuck at one fan speed, one power outlet doesn’t work, the trunk is hard to open and close, the power locks don't work all the time, and everything rattles.\n\nI have a lot of work to do, but I did pretty well for the budget I had. "],
  ["Journal 0.4\n Technical Terms", "1/8/20", "Transmission: The gears in a car\n\nEngine Rebuild: When somebody takes apart an engine and replaces everything but the engine block.\n\nEngine layouts: Which way the pistons in an engine face. The first letter is the shape, the number is the number of pistons. Broken up into I (inline, pistons face up) and V (V-shaped, pistons face up). Other configurations include flat (Pistons are split facing each side of the car), and rotary (these are just weird). A v6 engine has 6 pistons in a v shape, 3 on each side. \n\nEngine Block: A big piece of metal to which all moving parts of an engine attach\n\nClutch: The thing used to switch gears in a manual/stick shift car\n\nStock/OEM: The parts that come on a car from the factory\n\nAftermarket: New parts that are installed by owners and not made by the manufacturer. Sometimes these parts don't comply with regulations (illegal).\n\nAir intake: Air comes in from the outside into the engine through the air intake. Changing this part to an aftermarket part not approved by the state can cause a vehicle to fail a smog check.\n\nJournal 0 Word count: 1463"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"],
  ["Journal 1.0\n Template", "Date", "Content"]
  
]

var info = [

  [docPull[0][0] , docPull[0][2] , docPull[0][1] ],
  [docPull[1][0] , docPull[1][2] , docPull[1][1] ],
  [docPull[2][0] , docPull[2][2] , docPull[2][1] ],
  [docPull[3][0] , docPull[3][2] , docPull[3][1] ],
  [docPull[4][0] , docPull[4][2] , docPull[4][1] ],
  [docPull[5][0] , docPull[5][2] , docPull[5][1] ],
  [docPull[6][0] , docPull[6][2] , docPull[6][1] ],


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
  var ttext = document.createTextNode(info[num - 1][0] + "\n\n" + info[num - 1][2] );
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