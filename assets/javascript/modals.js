$(document).on("click", ".card-body", function () {
    $(".modal-body").empty();
    $(".modal-title").empty();




    // GRAB VALUE OF CARD
    var modalParkSelected = $(this).attr("data-value");
    var modalInfo = parkInfo.data.filter(item => item.parkCode === modalParkSelected)[0];

    // Latitude and Longitude to city
    if (modalInfo.latLong !== "") {
        var latLong = modalInfo.latLong
        console.log("LAT LONG: " + latLong);
        latitude = modalInfo.latLong.split(",")[0].split(":")[1].trim();
        longitude = modalInfo.latLong.split(",")[1].split(":")[1].trim();
        console.log("LAT AND LONG: " + latLong);
        geolocation(latitude, longitude)
        console.log(modalInfo);
        var maxResults = 5;
        var maxDistance = 30;
        trails(latitude, longitude, maxResults, maxDistance, populateModal);
    }


    // Place info into modal
    var modalTitle = $(".modal-title")
    modalTitle.append(modalInfo.name + " " + modalInfo.designation);
    var modalBody = $(".modal-body");
    var modalCounty = $("<p>");
    modalCounty.text(county);
    console.log("MODAL COUNTY: " + county); //Working second API
    modalBody.append(modalCounty);

    modalBody.append(modalInfo.description);
    var modalP = $("<p>");
    modalP.append("<a href='" + modalInfo.url + "' target=_blank>" + modalInfo.url + "</a>");
    modalBody.append(modalP);
    modalDirections = $("<p>");
    modalDirections.append("Get directions to " + modalInfo.name + " " + modalInfo.designation + ": " + "<a href='" + modalInfo.directionsUrl + "' target=_blank>" + modalInfo.directionsUrl + "</a>");
    modalBody.append(modalDirections);

})



function populateModal(trailsResponse) {

    // console.log("TRAILS: " + JSON.stringify(trailsResponse.trails));


    trailImage = trailsResponse.trails[0].imgMedium;
    $("#modalImage").attr("src", trailImage);


    for (var i = 0; i < trailsResponse.trails.length; i++) {
        console.log("TRAILS: " + trailsResponse.trails[i].name);
        console.log("TRAILS: " + trailsResponse.trails[i].url);
        console.log("TRAILS: " + trailsResponse.trails[i].imgMedium);
    }

}


