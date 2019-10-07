function stateCardGenerator(response) {
    parkInfo = response;
    console.log(parkInfo);
    // Generating all park names and designations in the state
    var numParks = parkInfo.data.length
    console.log(numParks)
    var stateContainer = $(".cardsGoHere");
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
        stateParkCard.addClass("card card-body")
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
        var stateParkButton = $("<button>TELL ME MORE</button>");
        stateParkButton.attr('data-toggle', 'modal');
        stateParkButton.attr('data-target', 'exampleModalCenter');
        stateParkButton.attr('type', 'button');
        stateParkButton.attr('id', 'showModal');
        stateParkCard.append(stateParkButton);

    }
    console.log(parkInfo)
    



};
$('#showModal').on('click', function(ev) {
        jQuery.noConflict();
        console.log(ev);
        $('#showModal').modal('show');
        });