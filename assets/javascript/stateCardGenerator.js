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
        unsplashSearch = parkName;
        var parkDesignation = parkInfo.data[i].designation;
        // Image from Unsplash
        var parkImage = imageResponse.urls.full;
        // console.log(parkName);
        // console.log(parkDesignation);

        // State Cards Generator
        // Create new div to hold the card
        var stateParkCard = $("<div>")
        // Append card elements 
        stateParkCard.addClass("card card-body")
        stateParkCard.attr({ "data-toggle": "modal", "data-target": "#exampleModalCenter", "data-value": parkName });
        var stateImage = $("<img>").attr({ src: parkImage, class: "card-img-top", alt: "..." })
        stateParkCard.append(stateImage)
        // var stateParkCardBody = $("<div class='card-body'>")
        // stateParkCard.append(stateParkCardBody)
        var stateParkCardHeader = $("<h5 class='card-title'>")
        stateParkCardHeader.text(parkName)
        stateParkCard.append(stateParkCardHeader);
        var stateParkCardP = $("<p class ='card-text'>");
        stateParkCardP.text(parkDesignation);
        stateParkCard.append(stateParkCardP);
        stateContainer.append(stateParkCard);
    }
    console.log(parkInfo)




};
