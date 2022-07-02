
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

setInterval(colorInputs, 60000) //refresh colors on the minute