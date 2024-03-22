// Mad Lib

// Event listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadLib);

//Event Function
function buildMadLib() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let secoundNoun = document.getElementById("secound-noun").value;
  let secoundAdjective = document.getElementById("secound-adjective").value;

  //Process
  let result =
    '"There are too many ' +
    pluralNoun +
    " on this " +
    adjective +
    ' airplane!", I screamed. "Somebody has to ' +
    verb +
    " on the " +
    noun +
    " to solve this problem." +
    secoundNoun +
    "Somebody hurry up." +
    secoundAdjective +
    "To get this done with.";

  document.getElementById("html").style.background = "url(images/plane.jpg)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";

  document.getElementById("result").style.fontFamily = "Arial";
  document.getElementById("result").style.borderColor = "orange";
  //Output
  document.getElementById("result").innerHTML = result;
}

//Secound Mad Lib
// Event listener
document.getElementById("mad-lib-btn2").addEventListener("click", buildMadLib2);

//Event Function
function buildMadLib2() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let secoundNoun = document.getElementById("secound-noun").value;
  let secoundAdjective = document.getElementById("secound-adjective").value;

  //Process
  let result =
    '"Hurry, ' +
    pluralNoun +
    " are catching up to us. " +
    adjective +
    "  to the plane! " +
    verb +
    " Quickly, " +
    noun +
    " we get caught." +
    secoundNoun +
    " Is  inside?" +
    secoundAdjective +
    " Wait, what is that .";

  document.getElementById("html").style.background = "url(images/download.jpg)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("result").style.fontFamily = "Impact";
  document.getElementById("result").style.borderColor = "red";

  //Output
  document.getElementById("result").innerHTML = result;
}

//Mad lib 3

//Event Listener
document.getElementById("mad-lib-btn3").addEventListener("click", buildMadLib3);

//Event Function
function buildMadLib3() {
  //Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let secoundNoun = document.getElementById("secound-noun").value;
  let secoundAdjective = document.getElementById("secound-adjective").value;
  //Process
  let result =
    '"He goes and , ' +
    pluralNoun +
    " going  the defence. " +
    adjective +
    "  Going towards goal. " +
    verb +
    " 35 feet away, will he shoot? " +
    noun +
    "  goes for it " +
    secoundNoun +
    " It's going to the goal and...." +
    secoundAdjective +
    " What a goal by.";

  document.getElementById("html").style.background =
    "url(images/soccer-ball-goal.jpg)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("result").style.fontFamily = "Cursive";
  document.getElementById("result").style.borderColor = "Green";
  //Output
  document.getElementById("result").innerHTML = result;
}
