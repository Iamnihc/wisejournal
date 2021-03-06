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
  ["Journal 0.0:","Decisions", "1/7/20", "Almost as soon as I started writing, I realized that I had to make big decisions about this journal.\n\nHow do I organize it? Most of it will be broken up into sections. Every week should have a section about what I learned on other cars, a section for my own car, and a section for any reading or other research I do, probably at least one short section on the status of the journal itself, and more if required.\n\nDo I keep it simple to understand, or do I keep it more technical? Although a year ago, I did not have any knowledge about cars, my knowledge is increasing and some of the things I do might be hard to write about without using technical terms. Instead of solving this problem, I will add a section to each journal entry explaining all the parts of a car that I mention. \n\nBecause I don't like google docs, I will type the whole journal on google docs but it will be a lot more organized on the website that goes along with it. I am going to write a script that makes my wise journal look pretty on a website. That site will be hosted at http://iamnihc.github.io/wisejournal. It’s going to be created by downloading this doc in plain text and reformatting it. I just like code. Also, I can add pictures, videos, diagrams, drawings, and a lot more there. In my laziness, I decided to use a website that I had already built instead of starting from scratch. Things may look a little weird for the first few weeks but I will slowly perfect it. While I figure out the best way to automate things, the doc may be styled strangely"],
  ["Journal 0.1"," Why", "12/20/19", "I have a confession to make. I started my wise project a while ago to pacify my mother. Over the summer, she bothered me repeatedly to get some sort of job, instead of sitting at home and playing games. Instead of picking a job I could get, I thought of the hardest job I could never get: a car mechanic. I knew nothing about cars. I didn't know how to change oil, brakes, batteries, or anything else. For that matter, I didn't know how to jump-start a car or change a tire. As I was in the process of getting my license, I knew my car had a dying battery, old wipers, and probably a lot more wrong. My mom contacted our go-to car mechanic and asked if I could help out over the summer. After a brief interview and changing a battery as a test, I started going there every day. At this point, I had little thought about WISE. My goal was simply to learn more about cars and do something fun over the summer. Although I would have enjoyed continuing over the summer, I only had 3 free weeks at the start of summer. As my last day in my 3-week trial ended, I thought about WISE, and what I could do. My mind jumped to cell phone repair and automotive maintenance. Still knowing very little about cars, I chose automotive maintenance, wanting to return to the weeks in the summer that I had enjoyed. "],
  ["Journal 0.2","Goals", "12/20/19", "This semester in WISE, I want to learn more about cars, as even though I can do a brake job with some help, and oil changes with ease, I know nothing more than this basic maintenance. I want to go from keeping a car running to making a car run again. Entirely out of WISE, I want to learn how to drive a stick shift car, and along with that, maintain one, fixing things like the clutch and transmission. Personally, I would like to buy a car, something my parents will allow, but only with a limited budget, fix it up, and make it suit my aesthetic tastes along with my tastes for speed. A smaller, but more important personal goal is to not get another speeding ticket, but that shouldn’t be that hard, after all, I have already learned my lesson. Learning from all the cars that come in in various states of disrepair, I would like to be able to do more advanced repairs on my own and go from the “hand me the wrench” or “undo this bolt” kid to somebody who can be assigned whole jobs, and complete them in a day. Although many days I will probably be perfecting the art of the speed oil change, I want to learn more about the other systems that make a car go. From the conveniences of AC and stereo systems to the more important like engine rebuilds, I want to be as advanced as anyone else at this shop. As I learn best hands-on, it would be easiest for me to learn these repairs by working with the people who know what they are doing first, along with guidance from my mentor, the shop owner. As I advance on each system, I want to start working on my personal car and make it less of an overheating mess. Finally, in the professional parts of my wise project, I plan to become an asset who can be relied upon to do any of the work needed in the shop, even though I’m not getting paid. I would like to work on at least one whole car every day, although some projects may be more complicated and take longer. Other ambitions I have include building a digital display for my car using my code and electronics knowledge, and possibly tuning an ECU, also using my code knowledge. Although my 3 passions are Code, Cars, and Space (I couldn’t make that start with a C) I would like to combine as many of them as possible. Another possible project would be to use the knowledge of cars to help a friend build an electric go-kart. Although almost all the cars that come in are going to be gas-powered, I also have some knowledge of electric cars and propulsion through my electronics and robotics knowledge. From what I have done so far, I have learned that cars, along with all the things I mess with, are just like legos. In fact, Every system is its own lego-like system, and all I need to do is build what I want, and the adapters between them."],
  ["Journal 0.3","Oh No", "1/7/20", "After a lot of looking, I finally got my own car. It’s a 2001 red convertible Ford Mustang v6 automatic. Pretty much exactly what my parents don't want me to have. Unfortunately, It has quite a few problems. The registration expires in 2 weeks, and I need to get it to pass smog. To do so, I have to replace the aftermarket air intake. On the drive back from Brentwood, I realized that the headlights did not work properly. Upon further investigation at home (with Stevie Wilder) I realized those too were aftermarket. The last major problem I discovered was a leak that put a lot of water in the back seat on the passenger side. The other problems include: a few missing or out lights, an oil change is needed soon, the driver’s power seat doesn’t work, a misaligned trunk, the AC and heat are stuck at one fan speed, one power outlet doesn’t work, the trunk is hard to open and close, the power locks don't work all the time, and everything rattles.\n\nI have a lot of work to do, but I did pretty well for the budget I had. "],
  ["Journal 0.4","Technical Terms", "1/8/20", "Transmission: The gears in a car\n\nEngine Rebuild: When somebody takes apart an engine and replaces everything but the engine block.\n\nEngine layouts: Which way the pistons in an engine face. The first letter is the shape, the number is the number of pistons. Broken up into I (inline, pistons face up) and V (V-shaped, pistons face up). Other configurations include flat (Pistons are split facing each side of the car), and rotary (these are just weird). A v6 engine has 6 pistons in a v shape, 3 on each side. \n\nEngine Block: A big piece of metal to which all moving parts of an engine attach\n\nClutch: The thing used to switch gears in a manual/stick shift car\n\nStock/OEM: The parts that come on a car from the factory\n\nAftermarket: New parts that are installed by owners and not made by the manufacturer. Sometimes these parts don't comply with regulations (illegal).\n\nAir intake: Air comes in from the outside into the engine through the air intake. Changing this part to an aftermarket part not approved by the state can cause a vehicle to fail a smog check.\n\nJournal 0 Word count: 1463"],
  ["Journal 1.0","The Nothing", "1/6/20", "This Monday consisted of very little, except for the fact that Ravi Singh (aka bossman or my supervisor) took a close look at my car. He believed that my exhaust headers may have been aftermarket, which would be illegal and hard to fix. Jose and Param (everyone calls him Happy, I don't know why) also took a look at it. I will write more about these people in the coming weeks, along with more people."],
  ["Journal 1.1","Hydraulic Press Channel", "1/8/20", "After the WISE presentation, I got in my car and drove to Rheem. When I arrived (at about 2:30), I started by helping to make an excel spreadsheet for official purposes. Apparently more people than I thought had heard that I am good with computers. From what I gathered, it was for the state program that gives a bit of money to people to help cars pass smog. After creating this spreadsheet, which was pretty quick for me except for the painfully slow internet speed, I got to watch Bossman (I guess that’s what I'm going to call him for the rest of the journal; that's what I call him to my friends, both in school and at my third space) use a hydraulic press to remove a wheel bearing from the steering knuckle, and I helped put the new one on. Along with that, I did the usual oil change and learned how to change and patch a tire. Surprisingly enough, I had never done it before this, as all my experience came from my few summer weeks. To change a tire, you start by depressurizing the wheel. After that, you use the clamps on the tire changing machine to hold the wheel in place while prying up on the outside of the tire with a metal bar and using the machine to spin the tire around. After that, you pry up the bottom part of the tire in the same way and spin until the tire is removed. Even though I am still learning, my job still mostly consists of helping the three people who are usually on the floor and moving cars in and out of the shop but I am trying to learn more."],
  ["Journal 1.2","Regret and Saul", "1/8/20", "Today at work, I asked Saul about what he thought of his job. He joined shortly after I originally did, and moved from an Audi dealership. Although he, like everyone else, swears a lot, I’ll try to write what he told me.\n\nSaul went to DVC, and after that went to the Universal Technical Institute (UTI). I didn’t know what it was at the time but it seems pretty popular. He said he started to do automotive repair because he thought it was fun, but it’s not fun to do all day and he’s stuck with it.\n\nSaul, like every other adult I have spoken to this year, asked me if I was going to college, and if so, where. I told him I wasn’t sure, but probably a UC. Knowing that I was interested in computer science, he asked me if I was going to do any automotive work later in life. For now, I plan to learn computer science in college, and only do work on cars now and maybe as a hobby once I settle down.\n\nSaul was still unsure of my answer and asked me if computer science was building or designing computers. When I corrected him and told him that it was all about coding, he asked if I knew how to code. Although I can write code, the question of “can you code” is vague. I told him it’s like me asking him “can you fix my car”. Depending on what’s wrong with the car, he could fix it. If the car was in a major crash, he couldn’t, but if the car needs an oil change he could do it with his eyes closed.\n\nSaul told me that that was a much better idea than doing auto repair, as his formal training was supposedly pretty useless and just left him in debt, and I should stick with computer science and “Don't be like me”. From this conversation I realized that although I do want to pursue automotive maintenance as a hobby, and work on my own cars later in life, I don't want that to be my only career option."],
  ["Journal 1.3","Oh No (part 2) ", "1/9/20", "This was my first full day at my wise space, and I did quite a bit. I changed a tire on my own for the first time, although I was constantly supervised by Saul. I then learned how to check a car’s differential and transmission fluid, and filled up the rear differential fluid on a large Chevy truck. It was time to work on my own car. I struggled a bit putting the original air intake back together, but I figured it out at the end. My biggest problem was the mass airflow sensor was attached to a piece of the aftermarket air intake, and I did not know that that piece came from the stock intake. When doing this, I also found that I was missing a bolt that holds the air intake down to the chassis of the car. I had also forgotten that I needed a new air filter for my new air intake. The aftermarket air intake used an incompatible air filter, and there were no air filters in stock for my car. After telling bossman, he told me he would order one and I should come back as soon as possible to install it. After fixing that, I did an oil change on my car and got the first look under it. Under the car I found that it was leaking oil and transmission fluid, but both of those leaks were pretty slow. I then changed the oil and oil filter, as both of those needed to be changed as part of routine service."],
  ["Journal 1.4","Changes", "1/12/20", "While writing this journal, I realized that I might want to keep better records of what I did that day, as the jobs I did and the days I did them are starting to mix together. I am not sure if I should just write the day’s journal entry as soon as I’m home or possibly while I am there. The last option is to just write down a list of things I did and write my journal later, as I do like to procrastinate. Speaking of procrastination, I plan to add sections to the sidebar of the website for each week but thinking of the code already makes me dislike it, especially considering how old this code is. The other problem is my computer has already started to lag when editing this doc because of how long it is. I might run out of sidebar space after this journal entry, but I have a quick fix in mind. I might also make a second “beta” version of the website along with the master because GitHub lets me and I would like to have a working website up at all times. I also struggle to make my writing interesting as its currently bland and repetitive. I might go to academy to try to fix that. Other than that, I am learning how much 1000 words is, and that I am writing way too much right now. I think I will do a bit more writing past the due date, and turn in the first journal missing some sections. "],
  ["Journal 1.5","Finally Legal (kinda)", "1/10/20", "I had no plans of going again on Friday, but because there were no air filters in stock for my car and I still needed to get my car smogged, I did. I changed brakes and installed a backup camera, along with yet another oil change, before joining Jenny, Milla and many other of my friends on the first game night this semester (those are the only two in WISE). I probably will not be going any more Fridays unless I absolutely need to, and instead enjoy the second semester of my senior year with my friends. My car is now smogged and mostly legal, except for the aftermarket headlights and the weird brake light issue whenever that happens. Also, John showed up today, brought his dog, and bugged Happy to fix his Porsche, which needs an engine swap. Being a mid-engine car, this is difficult.  I don't exactly know how John is related to the shop but he is not treated like a regular customer."],
  ["Journal 1.6","Technical Terms", "1/12/20", "Exhaust header: the piece of metal that connects the exhaust from each piston to the exhaust pipe. \n\nMass airflow sensor (MAF): tells the engine how much air is going to it so it can decide how much fuel it should add \n\nSteering knuckle: connects the suspension and steering to the wheels of the car. \n\nWheels and tires: Wheels are the metal parts, while tires are the rubber parts. Wheels come off with four to 6 bolts or nuts on the axle of the car. When people say “changing a tire” they usually refer to changing a wheel from a wheel with a flat tire to a wheel with a spare tire already on it. Tires are the rubber parts that touch the ground. Tires usually don't have tubes inside anymore and are instead sealed with bead sealer, which is pretty much just liquid tire that dries and sticks to the wall of the wheel. Changing a tire is pretty complicated, and involves taking off the wheel and using a machine. \n\nEngine position: A car can have its engine in many places. Almost every car has its engine in the front. A few cars have the engine where the typical trunk would be, and even fewer have the engine in the middle, usually under a seat. Changing the engine position shifts the balance of the car and makes it handle better, and mid-engine cars are usually considered the best.\n\n\n Word Count: 1678"],
  ["Journal 1.6","Template", "Date", "Content"],
  ["Journal 1.6","Template", "Date", "Content"]
  
]

var info = [];
for (let i =0; i<docPull.length; i++){
info.push([docPull[i][0], docPull[i][1] , docPull[i][2], docPull[i][3]]);
}

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
    currentDiv.scrollTo(0, tot * (num ) );

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
  let surround = document.createElement("div");
  for (let i =0; i<3; i++){
    let title = document.createElement("h2");

    let ttext = document.createTextNode(info[num - 1][i]);
    title.appendChild(ttext);
    title.setAttribute("class", "titlepart")
    surround.appendChild(title);

  }
  surround.setAttribute("class", "title");
  newDiv.appendChild(surround);
  var p = document.createElement("p");
  p.setAttribute("class", "body");
  
  console.log(num);
  var newContent = document.createTextNode(info[num - 1][3]);
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
  newButton.appendChild(document.createTextNode(info[rand][0] + "\n" + info[rand][1]));
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