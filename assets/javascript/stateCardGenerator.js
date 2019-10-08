function stateCardGenerator(response) {



    // Unsplash search depends on how we are able to get images to load




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
        // Image from Unsplash

        // console.log(parkName);
        // console.log(parkDesignation);

        // State Cards Generator
        // Create new div to hold the card
        var stateParkCard = $("<div>")
        // Append card elements 
        stateParkCard.addClass("card card-body")
        stateParkCard.attr({ "data-toggle": "modal", "data-target": "#exampleModalCenter", "data-value": parkCode });
        // var stateParkCardBody = $("<div class='card-body'>")
        var stateImage = $("<img>").attr({ src: "../images/NPS-sign1.png", class: "card-img-top", alt: "..." })
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

        if (parkInfo.data[i].latLong !== "") {
            latitude = parkInfo.data[i].latLong.split(",")[0].split(":")[1].trim();
            longitude = parkInfo.data[i].latLong.split(",")[1].split(":")[1].trim();
            trails(latitude, longitude, maxResults, populateImage, stateImage);
        }

    }
    console.log(parkInfo)




};


function populateImage(trailsResponse) {
    $(this.element).attr("src", trailsResponse.trails[0].imgMedium);

    console.log("trailsresponse per card:");
    console.log(trailsResponse);


}
