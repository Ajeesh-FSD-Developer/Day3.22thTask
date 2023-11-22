// Step 01: Create a XHR Object
var request = new XMLHttpRequest();
// Step 02: Specify the API
request.open("GET", "https://restcountries.com/v2/all");
// Step 03: Sending the request
request.send();
//Step 04: Once the requested data is there in server once data is successfully loaded
//Server response will be of 200 status code.
//Functions: they are used to perform specific task
request.onload = function () {
    var result = JSON.parse(request.response);
    console.log(result);

for (var i = 0; i < result.lenght; i++){
    var countryName = result[i].name.common;
    var population = result[i].population;
    var region = result[i].region;
    var subregion = result[i].subregion;
    console.log("countryName:"+countryName);
    console.log("region:"+region);
    console.log("subregion:"+subregion);
    console.log("population:"+population);

}
}