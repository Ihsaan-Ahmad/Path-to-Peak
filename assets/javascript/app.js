/*Global Varibales=============================================================================================
*/

//Start Function===============================================================================================
$(document).ready(function(){
    function imageScroller() {
        var images = ["assets/images/bg2.jpeg", "assets/images/fallroad.jpg"];
        var index = 0;
        $("#bg").attr("src", images[index]);
    
        setInterval(function() {
          if (index === images.length - 1) {
            index = 0;
            $("#bg").attr("src", images[index]);
            console.log(index);
          } else {
            index++;
            $("#bg").attr("src", images[index]);
            console.log(index);
          }
        }, 2000);
      }
      imageScroller();


// API

//National Park API is below
var userSearch = "" // What ever attribute they clicked on will go into the seach for our API Example"seach a park, click on park, image is random generated with that parks image"
var queryURL =
//Hide our key once ready to push! (12:57pm)
"https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=aYUUJ6WlFhXa4FxFlzz8RR712lrylzDsnov99dCe";
$.ajax({
    method: "GET",
    url: queryURL
}).then(function (response) {
    console.log(response);
});
//Images fixed and working AJAX
//Unsplash API Below: We are working on having the Unsplash API information incorporate photo based on image and location.

var parksUrl =
"https://api.unsplash.com/photos/random/?client_id=de60a94209a9bef884f3a7ad3716dcb45770113151dea2b8e5aa7acc131efc54&query=" + userSearch; //<---here is where our users search generates image related from API
$.ajax({
    method: "GET",
    url: parksUrl
}).then(function (imgResponse) {
    console.log(imgResponse);
});

// HOME PAGE====================================================================================================
// "take me home" button says take me home
$("#takeMeHome").on("click", function() {
//console.log(alert("this button works!"));

})
// LINDSAY: ON STATE PAGE ======================================================================================

// When user enters a state into the search bar it hides container containing home page html

// If the state is not a real state name (misspelled, not in the US, etc.,) display error message

// Populates screen with cards of each national park in the state

// Each card contains park name (AT LEAST--WE WILL DISCUSS AS GROUP WHAT ELSE TO DISPLAY)

// MODELS =======================================================================================================

// On state page with all parks: when user clicks on a card, card pops up a model about that park

// Individual park model: Populates with park information from NPS API, populates with brewery info from brewery API















//END OF CODE
})