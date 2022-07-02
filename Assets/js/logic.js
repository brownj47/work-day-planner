
function updateClock() { //function to update timer element
    var timerEl = $("#timer-slot")
    timerEl.text(moment().format("MMM Do, YYYY hh:mm:ss"))
}
updateClock() // call function to fill timer element on page load
setInterval(updateClock, 1000) // interval to update clock

//if their hour value is below the current hour value
// set their background color to grey
//if their hour value is the current hour value
// set their background color to red
//if their hour value is above the current hour value
// set their background color to green

//get all input elements
var hourInputArray = $("input").get()
console.log(hourInputArray)

var currentHour =  parseInt(moment().format("H"), 10) // get the current hour
console.log(currentHour)

function colorInputs(){
    for (i = 0; i < hourInputArray.length; i++) { //loop through hourInput Array
        console.log(hourInputArray[i])
        var jQhour = $(hourInputArray[i])
        console.log(jQhour)
        
        console.log(parseInt(hourInputArray[i].dataset.timeindex, 10))
        
        if (hourInputArray[i].dataset.timeindex < currentHour) {
            jQhour.addClass("passed")
        } else if (hourInputArray[i].dataset.timeindex === currentHour) {
            jQhour.addClass("now")
        } 
        else if (hourInputArray[i].dataset.timeindex > currentHour){
            jQhour.addClass("future")
        }
    }
}

colorInputs()

setInterval(colorInputs, 60000) //refresh colors on the minute