function imageScroller() {
  var images = ["assets/images/bg2 copy.jpeg", "assets/images/fallroad copy.jpg", "assets/images/bryce2 copy.jpeg", "assets/images/tetons copy.jpeg", "assets/images/beardunes copy.jpeg", "assets/images/antelope copy.jpeg", "assets/images/bison copy.jpeg", "assets/images/rocky copy.jpeg", "assets/images/bear copy.jpeg", "assets/images/bryce copy.jpeg", "assets/images/fjords copy.jpeg", "assets/images/geyser copy.jpeg", "assets/images/joshua copy.jpeg", "assets/images/glacier copy.jpeg", "assets/images/moose copy.jpeg", "assets/images/redwoods copy.jpeg", "assets/images/northrim copy.jpeg", "assets/images/silent copy.jpeg", "assets/images/whitesands copy.jpeg", "assets/images/spring copy.jpeg", "assets/images/yosemite copy.jpeg", "assets/images/ysfalls copy.jpeg", "assets/images/zion copy.jpeg"];
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

$("#searchButton").click(function () {
  event.preventDefault();
  $("#searchBar").show();
  $("#searchButton").hide();
  
});

$("#stateButton").click(function(){
  event.preventDefault();
  $("#putItIn").hide();
  $("#fillMe").hide();
  $("#searchBar").hide();
  $("#searchButton").hide();
});

$("#takeMeHome").on("click", function () {
  event.preventDefault();
  $("#searchBar").hide();
  $("#searchButton").show();
  $("#putItIn").show();
  $("#fillMe").show();
  $(".cardsGoHere").empty();
});
// API
/*Global Varibales=============================================================================================
*/ 
var parkInfo;
var imageResponse;
var stateSelected = "TX";
var unsplashSearch = "";
var region;
var beerResponse= "";

//Images fixed and working AJAX
//Unsplash API Below: We are working on having the Unsplash API information incorporate photo based on image and location.
function unsplashAjaxRequest() {
var unsplashURL =
"https://api.unsplash.com/photos/random/?client_id=b9429332b4931ea777d5218c2dd0c972e59aa521cdd7693c57ae030db53d17ef&query=" + unsplashSearch; //<---here is where our users search generates image related from API
$.ajax({
  method: "GET",
  url: unsplashURL
}).then(unsplashAPICall);
}

function unsplashAPICall(imgResponse) {
imageResponse = imgResponse;
console.log(imageResponse);
}

//National Park API is below

function NPSAjaxRequest() {

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
// modelGenerator(response)
}
// For state requests
// function beerAPI() {
//     var beerURL ="https://sandbox-api.brewerydb.com/v2/" + region + "/?key=32a1127f99142177f29bc67c78a8a6d6"
//     // "https://api.unsplash.com/photos/random/?client_id=b9429332b4931ea777d5218c2dd0c972e59aa521cdd7693c57ae030db53d17ef&query=" + region; //<---here is where our users search generates image related from API
//     $.ajax({
//       method: "GET: /brewery/:breweryId/locations",
//       url: beerURL
//     }).then(beerAPI);
//   }
//   function beerAPICall(beerdbResponse) {
//     console.log(beerResponse);
//     beerResponse = beerdbResponse;
  
//   };

function bothAjaxRequests(event) {
event.preventDefault();

unsplashAjaxRequest();
NPSAjaxRequest();
}
$("#stateButton").on("click", bothAjaxRequests);


// HOME PAGE====================================================================================================
// "take me home" button says take me home

// $('#showModal').on('click', function() {
//     // jQuery.noConflict();
//     $('#showModal').modal('show');
//     });

// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//   })


// LINDSAY: ON STATE PAGE ======================================================================================

// When user enters a state into the search bar it hides container containing home page html

// If the state is not a real state name (misspelled, not in the US, etc.,) display error message

// Populates screen with cards of each national park in the state
// MODALS =======================================================================================================

// On state page with all parks: when user clicks on a card, card pops up a modal about that park

// Individual park modal: Populates with park information from NPS API, populates with brewery info from brewery API















//END OF CODE
