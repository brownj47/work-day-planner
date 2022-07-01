
//get all save buttons
var svBtn9 = $("#save-button-9am")
var svBtn10 = $("#save-button-10am")
var svBtn11 = $("#save-button-11am")
var svBtn12 = $("#save-button-12pm")
var svBtn1 = $("#save-button-1pm")
var svBtn2 = $("#save-button-2pm")
var svBtn3 = $("#save-button-3pm")
var svBtn4 = $("#save-button-4pm")
var svBtn5 = $("#save-button-5pm")
//get all input elements
var hourInputArray = $("input").get()
console.log(hourInputArray)
// make all inputs into jquery objects
var inputJQ9am = $(hourInputArray[0]);
var inputJQ10am = $(hourInputArray[1]);
var inputJQ11am = $(hourInputArray[2]);
var inputJQ12pm = $(hourInputArray[3]);
var inputJQ1pm = $(hourInputArray[4]);
var inputJQ2pm = $(hourInputArray[5]);
var inputJQ3pm = $(hourInputArray[6]);
var inputJQ4pm = $(hourInputArray[7]);
var inputJQ5pm = $(hourInputArray[8]);


function updateClock() { //function to update timer element
    var timerEl = $("#timer-slot")
    timerEl.text(moment().format("MMM Do, YYYY hh:mm:ss"))
}
updateClock() // call function to fill timer element on page load
setInterval(updateClock, 1000) // interval to update clock


var currentHour = parseInt(moment().format("H"), 10) // get the current hour, make it an integer
console.log(currentHour)

function colorInputs() {
    for (i = 0; i < hourInputArray.length; i++) { //loop through hourInput Array
        console.log(hourInputArray[i])
        var jQhour = $(hourInputArray[i]) // make the object a jquery object
        console.log(jQhour)

        console.log(parseInt(hourInputArray[i].dataset.timeindex, 10))

        if (hourInputArray[i].dataset.timeindex < currentHour) {  // set passed hours to a color
            jQhour.addClass("passed")
        } else if (hourInputArray[i].dataset.timeindex == currentHour) { // set current hour to a color
            jQhour.addClass("now")
        }
        else if (hourInputArray[i].dataset.timeindex > currentHour) { // set coming hours to a color
            jQhour.addClass("future")
        }
    }
}

colorInputs() //set colors on page load

setInterval(colorInputs, 60000); //refresh colors on the minute

//save input values
//create an object to hold values
//listen for clicks on our save buttons
//save the data in the input to its place in the object
//save object in local storage

var hourlyEvents = {};

svBtn9.on("click", function (event) { // on click, get the value and save it 
    event.preventDefault()
    var inputVal = inputJQ9am.val(); //save the value 
    console.log(inputVal);
    hourlyEvents.nineam = inputVal
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents)) //save object in local storage
    console.log(hourlyEvents)
})
svBtn10.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ10am.val();
    hourlyEvents.tenam = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn11.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ11am.val();
    hourlyEvents.elevenam = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn12.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ12pm.val();
    hourlyEvents.twelvepm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn1.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ1pm.val();
    hourlyEvents.onepm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn2.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ2pm.val();
    hourlyEvents.twopm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn3.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ3pm.val();
    hourlyEvents.threepm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn4.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ4pm.val();
    hourlyEvents.fourpm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})
svBtn5.on("click", function (event) {
    event.preventDefault()
    var inputVal = inputJQ5pm.val();
    hourlyEvents.fivepm = inputVal;
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents));
})

function renderSavedEvents() {
    var hourlyEventsMidMan = JSON.parse(localStorage.getItem("hourlyEventsStored")) // get data from local storage
    if (hourlyEventsMidMan == "") {
        return
    }

    hourlyEvents = hourlyEventsMidMan
    console.log(hourlyEvents)

    inputJQ9am.val(hourlyEvents.nineam)
    inputJQ10am.val(hourlyEvents.tenam)
    inputJQ11am.val(hourlyEvents.elevenam)
    inputJQ12pm.val(hourlyEvents.twelvepm)
    inputJQ1pm.val(hourlyEvents.onepm)
    inputJQ2pm.val(hourlyEvents.twopm)
    inputJQ3pm.val(hourlyEvents.threepm)
    inputJQ4pm.val(hourlyEvents.fourpm)
    inputJQ5pm.val(hourlyEvents.fivepm)
}
renderSavedEvents()
//render saved inputs on page load
    // get from local storage
    // set inputs to new value 
