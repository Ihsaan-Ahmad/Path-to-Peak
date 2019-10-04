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