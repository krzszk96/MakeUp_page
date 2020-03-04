/////////////menu sticky////////////////////
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
// Get the header
var menu = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = menu.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}


function instagram(){
    window.open("https://www.instagram.com/");
}

function showMenu(){
    var burger = document.getElementById("menu");
    //burger.classList.toggle("show");

    if (burger.style.display === "block") {
    burger.style.display = "none";
    } else {
    burger.style.display = "block";
  }

  //   if (element.classList) {
  //   element.classList.toggle("mystyle");
  //    } else {
  //   var classes = element.className.split(" ");
  //   var i = classes.indexOf("mystyle");
  //
  //   if (i >= 0)
  //     classes.splice(i, 1);
  //   else
  //     classes.push("mystyle");
  //     element.className = classes.join(" ");
}

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');
//
// navBarToggle.addEventListener('click', function () {
//   mainNav.classList.toggle('active');
// });

let book = document.getElementById('bookcal');
book.addEventListener('click', function () {
  console.log(event.target.id);
})

function howManyDay(month, year){ //check how many days is in given month
  return new Date(year, month, 0).getDate();//month 12
}
function checkFirstDay(month, year){ //check what day of the week is first day of given month
  return new Date(year, month, 1).getDay(); //month 11
}
function whatDayNr(month, year){ //check how many gaps is difference on new board
  dayCalc = new Array(7);
  dayCalc[0]=6;
  dayCalc[1]=0;
  dayCalc[2]=1;
  dayCalc[3]=2;
  dayCalc[4]=3;
  dayCalc[5]=4;
  dayCalc[6]=5;
  return dayCalc[checkFirstDay(month, year)]; //month 11
}

function fillBoard(month, year){
  for (var i = 1; i <= howManyDay(month+1, year); i++) {
    var add = i + whatDayNr(month, year);
    document.getElementById("d"+ add).innerHTML = i;
  }
  // console.log("test");
  // console.log(42 - whatDayNr(month, year) - howManyDay(month, year));
  // for (i; 42 - whatDayNr(month, year) - howManyDay(month, year)){
  //
  //}
}
function getCurDay(){
  var date = new Date();
  var day = date.getDate();
  return day;
}
function getCurMonth(){
  var date = new Date();
  var month = date.getMonth();
  return month;
}
function getCurYear(){
  var date = new Date();
  var year = date.getFullYear();
  return year;
}

console.log(getCurDay());
console.log(getCurMonth());
console.log(getCurYear());

function displayDate(){
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();

  // var weekday = new Array(7);
  // weekday[0] = "Niedziela";
  // weekday[1] = "Poniedziałek";
  // weekday[2] = "Wtorek";
  // weekday[3] = "Środa";
  // weekday[4] = "Czwartek";
  // weekday[5] = "Piątek";
  // weekday[6] = "Sobota";
  // var dayNumber = weekday[date.getDay()];

  var monthNr = new Array(12);
  monthNr[0] = "Styczeń";
  monthNr[1] = "Luty";
  monthNr[2] = "Marzec";
  monthNr[3] = "Kwiecień";
  monthNr[4] = "Maj";
  monthNr[5] = "Czerwiec";
  monthNr[6] = "Lipiec";
  monthNr[7] = "Sierpień";
  monthNr[8] = "Wrzesień";
  monthNr[9] = "Październik";
  monthNr[10] = "Listopad";
  monthNr[11] = "Grudzień";
  var showMonth = monthNr[month];

  // console.log(howManyDay(month+1, year));
  // console.log(checkFirstDay(month, year));
  // console.log(whatDayNr(month, year));

  fillBoard(month, year);

  document.getElementById("disD").innerHTML = showMonth +" - "+ year;
  //document.getElementById("dayN").innerHTML = dayNumber;

  var id = day + whatDayNr(month, year)
  var current = document.getElementById("d" + id);
  current.classList.toggle('calendar__number--current');
}
displayDate();
function prevMonth(){
}
function nextMonth(){
  var tempM = getCurMonth();
  var tempY = getCurYear();

  if(tempM>11){tempM=0; tempY++;}
  tempM++;
  console.log(tempM);
    fillBoard(tempM, tempY);

}
