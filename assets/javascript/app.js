function imageScroller() {
  var images = ["assets/images/bg2.jpeg", "assets/images/fallroad.jpg", "assets/images/bryce2.jpeg", "assets/images/tetons.jpeg", "assets/images/beardunes.jpeg", "assets/images/antelope.jpeg", "assets/images/bison.jpeg", "assets/images/rocky.jpeg", "assets/images/bear.jpeg", "assets/images/bryce.jpeg", "assets/images/fjords.jpeg", "assets/images/joshua.jpeg", "assets/images/glacier.jpeg", "assets/images/moose.jpeg", "assets/images/redwoods.jpeg", "assets/images/northrim.jpeg", "assets/images/silent.jpeg", "assets/images/whitesands.jpeg", "assets/images/spring.jpeg", "assets/images/yosemite.jpeg", "assets/images/ysfalls.jpeg", "assets/images/zion.jpeg"];
  var index = 0;
  $("#bg").attr("src", images[index]);

  setInterval(function () {
    if (index === images.length - 1) {
      index = 0;
      $("#bg").attr("src", images[index]);
    } else {
      index++;
      $("#bg").attr("src", images[index]);
    }
  }, 6000);
}


imageScroller();

$(document).on("click", ".NPSBtn", function () {
  event.preventDefault();
  $(".spotify").show();
  $("#searchButton").show();
  $("#putItIn").show();
  $(".NPSBtn").hide();
  $(".byeFoot").show();
  $("#takeMeHome").show();
  $(".clickEnter").hide();
});

$("#searchButton").click(function () {
  event.preventDefault();
  $("#searchBar").show();
  $("#searchButton").hide();
  $("#fillMe").show();
});

$("#stateButton").click(function () {
  event.preventDefault();
  $("#fillMe").hide();
  $("#searchBar").hide();
  $("#searchButton").hide();
  // $("#state-entered").val("");
});

$("#takeMeHome").on("click", function () {
  event.preventDefault();
  $(".spotify").hide();
  $("#searchBar").hide();
  $("#searchButton").hide();
  $("#putItIn").hide();
  $("#fillMe").hide();
  $(".cardsGoHere").empty();
  $(".byeFoot").hide();
  $(".NPSBtn").show();
  $(".clickEnter").show();
  $("#takeMeHome").hide();
  $("#state-entered").val("");
});


// API
/*Global Varibales=============================================================================================
*/
var parkInfo;
// var parkCode;
var imageResponse;
var stateSelected = "";
var unsplashSearch = "";
var region;
var beerResponse = "";
var county;
var trailImage;

//Images fixed and working AJAX
//Unsplash API Below: We are working on having the Unsplash API information incorporate photo based on image and location.
// function unsplashAjaxRequest() {
//   var unsplashURL =
//     "https://api.unsplash.com/photos/random/?client_id=bf539b043528dafae4c292cea01214b50b01cdc58feb7880e0b4964fabcb0a86&query=" + unsplashSearch; //<---here is where our users search generates image related from API
//   $.ajax({
//     method: "GET",
//     url: unsplashURL
//   }).then(unsplashAPICall);
// }

// function unsplashAPICall(imgResponse) {
//   imageResponse = imgResponse;
//   console.log(imageResponse);
// }

//National Park API is below

function NPSAjaxRequest() {


  // This line grabs the input from the textbox
  var state = $(".form-control").val().trim();
  console.log("STATE: " + state);
  if (state.length > 2) {
    var stateAcronym = abbrState(state, 'abbr')
    stateSelected = stateAcronym;
    console.log("ACRONYM: " + stateAcronym);
    console.log(stateSelected)
  }
  else {
    stateSelected = state;
  }
  var queryURL =
    //Hide our key once ready to push! (12:57pm)
    "https://developer.nps.gov/api/v1/parks?stateCode=" + stateSelected + "&api_key=aYUUJ6WlFhXa4FxFlzz8RR712lrylzDsnov99dCe";
  $.ajax({
    method: "GET",
    url: queryURL
  }).then(NPSAPICall);
}

function NPSAPICall(response) {
  console.log(response);
  stateCardGenerator(response);
}


function bothAjaxRequests(event) {
  event.preventDefault();

  //unsplashAjaxRequest();
  NPSAjaxRequest();
}
$("#stateButton").on("click", bothAjaxRequests);

// Geolocation
function geolocation(latitude, longitude, populateLocation, element) {


  var locationUrl =
    "https://api.opencagedata.com/geocode/v1/json?q=" + latitude + "%2C" + longitude + "&key=56b3edc6998940e095b41f02d7376b21&pretty=1"
  $.ajax({
    method: "GET",
    element: element,
    url: locationUrl
  }).then(populateLocation);
}




// Trails 
function trails(latitude, longitude, maxResults, maxDistance, populateElement, element) {
  var trailsUrl = "https://www.hikingproject.com/data/get-trails?lat=" + latitude + "&lon=" + longitude + "&maxDistance=" + maxDistance + "&maxResults=" + maxResults + "&key=200612410-9f382d3dcd1ea30e2507f860ebe7ef29"
  $.ajax({
    method: "GET",
    element: element,
    url: trailsUrl,
  }).then(populateElement);
}






// HOME PAGE====================================================================================================
// LINDSAY: ON STATE PAGE ======================================================================================

// When user enters a state into the search bar it hides container containing home page html

// If the state is not a real state name (misspelled, not in the US, etc.,) display error message

// Populates screen with cards of each national park in the state
// MODALS =======================================================================================================

// On state page with all parks: when user clicks on a card, card pops up a modal about that park

// Individual park modal: Populates with park information from NPS API, populates with brewery info from brewery API















//END OF CODE
