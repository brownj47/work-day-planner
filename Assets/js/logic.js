
//get all save buttons
var svBtn9 =  $("#save-button-9am")
var svBtn10 =  $("#save-button-10am")
var svBtn11=  $("#save-button-11am")
var svBtn12 =  $("#save-button-12pm")
var svBtn1 =  $("#save-button-1pm")
var svBtn2 =  $("#save-button-2pm")
var svBtn3 =  $("#save-button-3pm")
var svBtn4 =  $("#save-button-4pm")
var svBtn5 =  $("#save-button-5pm")





function updateClock() { //function to update timer element
    var timerEl = $("#timer-slot")
    timerEl.text(moment().format("MMM Do, YYYY hh:mm:ss"))
}
updateClock() // call function to fill timer element on page load
setInterval(updateClock, 1000) // interval to update clock

//get all input elements
var hourInputArray = $("input").get()
console.log(hourInputArray)

var currentHour =  parseInt(moment().format("H"), 10) // get the current hour, make it an integer
console.log(currentHour)

function colorInputs(){
    for (i = 0; i < hourInputArray.length; i++) { //loop through hourInput Array
        console.log(hourInputArray[i])
        var jQhour = $(hourInputArray[i]) // make the object a jquery object
        console.log(jQhour)
        
        console.log(parseInt(hourInputArray[i].dataset.timeindex, 10))
        
        if (hourInputArray[i].dataset.timeindex < currentHour) {  // set passed hours to a color
            jQhour.addClass("passed")
        } else if (hourInputArray[i].dataset.timeindex === currentHour) { // set current hour to a color
            jQhour.addClass("now")
        } 
        else if (hourInputArray[i].dataset.timeindex > currentHour){ // set coming hours to a color
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

svBtn9.on("click", function(event){ // on click, get the value and save it 
    event.preventDefault()
    var inputJQ = $(hourInputArray[0]); //make it a JQuery object
    var inputVal = inputJQ.val(); //save the value 
    console.log(inputVal);
    hourlyEvents.nineam = inputVal
    localStorage.setItem("hourlyEventsStored", JSON.stringify(hourlyEvents)) //save object in local storage
    console.log(hourlyEvents)
})


function renderSavedEvents(){
    var hourlyEventsMidMan = JSON.parse(localStorage.getItem("hourlyEventsStored"))
    console.log(hourlyEvents)
    console.log(hourInputArray[0])
    // if (hourlyEventsMidMan == ""){
    //     return
    // }
    hourlyEvents = hourlyEventsMidMan
    hourInputArray[0].textContent = hourlyEvents.nineam
}
renderSavedEvents()
//render saved inputs on page load
    // get from local storage
    // set inputs to new value 
