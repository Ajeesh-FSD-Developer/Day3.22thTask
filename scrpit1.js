var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
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