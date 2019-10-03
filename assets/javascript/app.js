var queryURL =
    "https://developer.nps.gov/api/v1/parks?stateCode=TX&api_key=aYUUJ6WlFhXa4FxFlzz8RR712lrylzDsnov99dCe";
$.ajax({
    method: "GET",
    url: queryURL
}).then(function (response) {
    console.log(response);
});
