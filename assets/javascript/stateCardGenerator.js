function stateCardGenerator(response) {

    parkInfo = response;
    // console.log(parkInfo);
    // Generating all park names and designations in the state
    var numParks = parkInfo.data.length
    console.log(numParks)
    var stateContainer = $(".cardsGoHere");
    for (i = 0; i < numParks; i++) {
        var parkName = parkInfo.data[i].fullName;
        var parkDesignation = parkInfo.data[i].designation;
        var parkCode = parkInfo.data[i].parkCode;

        // State Cards Generator
        // Create new div to hold the card
        var stateParkCard = $("<div>")
        // Append card elements 
        stateParkCard.addClass("card card-body")
        stateParkCard.attr({ "data-toggle": "modal", "data-target": "#exampleModalCenter", "data-value": parkCode });
        // var stateParkCardBody = $("<div class='card-body'>")
        var stateImage = $("<img>").attr({
            src: "assets/images/NPS-sign1.png", class: "card-img-top", id: "stateCardImage", alt: "..."
        });
        stateParkCard.append(stateImage)
        // stateParkCard.append(stateParkCardBody)
        var stateParkCardHeader = $("<h5 class='card-title'>")
        stateParkCardHeader.text(parkName)
        stateParkCard.append(stateParkCardHeader);
        var stateParkCardP = $("<p class ='card-text'>");
        stateParkCardP.text(parkDesignation);
        stateParkCard.append(stateParkCardP);
        stateContainer.append(stateParkCard);

        var maxResults = 1
        var maxDistance = 10

        if (parkInfo.data[i].latLong !== "") {
            latitude = parkInfo.data[i].latLong.split(",")[0].split(":")[1].trim();
            longitude = parkInfo.data[i].latLong.split(",")[1].split(":")[1].trim();
            trails(latitude, longitude, maxResults, maxDistance, populateImage, stateImage);
        }

    }
    console.log(parkInfo)




};


function populateImage(trailsResponse) {

    if (trailsResponse.trails[0] !== undefined && trailsResponse.trails[0].imgMedium !== "") {

        $(this.element).attr("src", trailsResponse.trails[0].imgMedium);
    }
    else {
        $(this).attr("src", 'assets/images/NPS-sign1.png');

    }

    console.log("trailsresponse per card:");
    console.log(trailsResponse);


}

