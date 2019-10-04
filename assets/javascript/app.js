/*Global Varibales=============================================================================================
*/ var parkInfo;
var imageResponse;
var stateSelected = "TX";

//Start Function===============================================================================================
$(document).ready(function () {
  function imageScroller() {
    var images = ["assets/images/bg2.jpeg", "assets/images/fallroad.jpg"];
    var index = 0;
    $("#bg").attr("src", images[index]);

    setInterval(function () {
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

  //Images fixed and working AJAX
  //Unsplash API Below: We are working on having the Unsplash API information incorporate photo based on image and location.
  function unsplashAjaxRequest() {
    var userSearch = "" // What ever attribute they clicked on will go into the seach for our API Example"seach a park, click on park, image is random generated with that parks image"
    var parksUrl =
      "https://api.unsplash.com/photos/random/?client_id=de60a94209a9bef884f3a7ad3716dcb45770113151dea2b8e5aa7acc131efc54&query=" + userSearch; //<---here is where our users search generates image related from API
    $.ajax({
      method: "GET",
      url: parksUrl
    }).then(unsplashAPICall);
  }

  function unsplashAPICall(imgResponse) {
    imageResponse = imgResponse;
    console.log(imageResponse);
  }
  // For state requests
  function bothAjaxRequests() {
    unsplashAjaxRequest;
    NPSAjaxRequest;
  }
  $("#stateButton").on("click", bothAjaxRequests)
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
    stateCardGenerator(response);
    // modelGenerator(response)
  }
  function stateCardGenerator(response) {
    parkInfo = response;
    console.log(parkInfo);

    // Generating all park names and designations in the state
    var numParks = parkInfo.data.length
    console.log(numParks)
    var stateContainer = $("<container id='stateCardContainer'>")
    for (i = 0; i < numParks; i++) {
      var parkName = parkInfo.data[i].fullName;
      userSearch = parkName;
      var parkDesignation = parkInfo.data[i].designation;
      // Image from Unsplash
      var parkImage = imageResponse.urls.full;
      console.log(parkName);
      console.log(parkDesignation);

      // State Cards Generator
      // Create new div to hold the card
      var stateParkCard = $("<div>")
      // Append card elements 
      stateParkCard.addClass("card")
      stateParkCard.attr("style", "width: 18rem;");
      var stateImage = $("<img>").attr({ src: parkImage, class: "card-img-top", alt: "..." })
      stateParkCard.append(stateImage)
      var stateParkCardBody = $("<div class='card-body'>")
      stateParkCard.append(stateParkCardBody)
      var stateParkCardHeader = $("<h5 class='card-title'>")
      stateParkCardHeader.text(parkName)
      stateParkCard.append(stateParkCardHeader);
      var stateParkCardP = $("<p class ='card-text'>");
      stateParkCardP.text(parkDesignation);
      stateParkCard.append(stateParkCardP);
      stateContainer.append(stateParkCard);
      stateContainer.appendTo($("#card"));
    }
    console.log(parkInfo)
  }

  // HOME PAGE====================================================================================================
  // "take me home" button says take me home
  $("#takeMeHome").on("click", function () {
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