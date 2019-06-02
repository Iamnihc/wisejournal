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
  ["George Washington","1789 – 1797"],
  ["John Adams","1797 – 1801"],
  ["Thomas Jefferson","1801 – 1809"],
  ["James Madison","1809 – 1817"],
  ["James Monroe","1817 – 1825"],
  ["John Quincy Adams","1825 – 1829"],
  ["Andrew Jackson","1829 – 1837"],
  ["Martin van Buren","1837 – 1841"],
  ["William Henry Harrison","1841"],
  ["John Tyler","1841 – 1845"],
  ["James Polk","1845 – 1849"],
  ["Zachary Taylor","1849 – 1850"],
  ["Millard Fillmore","1850 – 1853"],
  ["Franklin Pierce","1853 – 1857"],
  ["James Buchanan","1857 – 1861"],
  ["Abraham Lincoln","1861 – 1865"],
  ["Andrew Johnson","1865 – 1869"],
  ["Ulysses S. Grant","1869 – 1877"],
  ["Rutherford B. Hayes","1877 – 1881"],
  ["James Abram Garfield","1881"],
  ["Chester Alan Arthur","1881 – 1885"],
  ["Grover Cleveland (1)","1885 – 1889"],
  ["Benjamin Harrison","1889 – 1893"],
  ["Grover Cleveland (2)","1893 – 1897"],
  ["William McKinley","1897 – 1901"],
  ["Theodore Roosevelt","1901 – 1909"],
  ["William Howard Taft","1909 – 1913"],
  ["Woodrow (Thomas) Wilson","1913 – 1921"],
  ["Warren Gamaliel Harding","1921 – 1923"],
  ["Calvin (John) Coolidge","1923 – 1929"],
  ["Herbert Clark Hoover","1929 – 1933"],
  ["Franklin Delano Roosevelt","1933 – 1945"],
  ["Harry S. Truman","1945 – 1953"],
  ["Dwight (David) Eisenhower","1953 – 1961"],
  ["John Fitzgerald Kennedy","1961 – 1963"],
  ["Lyndon Baines Johnson","1963 – 1969"],
  ["Richard Milhouse Nixon","1969 – 1974"],
  ["Gerald Rudolph Ford","1974 – 1977"],
  ["Jimmy Carter","1977 – 1981"],
  ["Ronald Wilson Reagan","1981 – 1989"],
  ["George Herbert Walker Bush","1989 – 1993"],
  ["William (Bill) Jefferson Clinton","1993 – 2001"],
  ["George Walker Bush","2001 – 2009"],
  ["Barack Hussein Obama","2009 – 2017"],
  ["Donald Trump","2017 –"],

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
 var curpres = 1;
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
  var newContent = document.createTextNode(" was president number " + presnum + " from " +info[num - 1][1] );
  title.appendChild(ttext);
  newDiv.appendChild(title);
  p.appendChild(newContent);
  newDiv.appendChild(p);
  var currentDiv = document.getElementById("middle");
  currentDiv.appendChild(newDiv);
  var tot = $("#middle").innerHeight();
  currentDiv.scrollTo(0, tot * (num - 1));
  curpres ++;
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
