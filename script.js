$(document).ready(function(){

    $("#getWeatherBtn").on("click",function() {

        // Step 1 - Read the Zip code from the text box
        let zip = $("#zipCode").val();
        if (zip) {

        // Step 2 - Define the URL for openweathermap based on the appid, units, and zip.
        //          Read the Instructions.txt for the OpenWeatherMap documentation on the use of the API.
        //          use appid=000c53231273df2ac9323e70eee830d4
        let url = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&appid=000c53231273df2ac9323e70eee830d4&units=imperial";

        // Step 3 - use jQuery to make an Ajax call using the $.getJSON function.
        //          After the result is returned, access the object properties based on
        //          the format of the object returned. use reqbin or FireFox to study the structure
        //          Refer to the Instructions.txt for the ids of the page elements and what they represent
        $.getJSON(url, function (data) {
            console.log(data);
            $("#locationName").text(data.name + ", " + data.sys.country).fadeOut(1000).fadeIn(1000);
            $("#currentTemp").html(Math.round(data.main.temp)).fadeOut(1000).fadeIn(1000);
            $("#humidity").html(data.main.humidity).fadeOut(1000).fadeIn(1000);
            $("#windSpeed").html(Math.round(data.wind.speed)).fadeOut(1000).fadeIn(1000);
            $("#pressure").html(Math.round(data.main.pressure)).fadeOut(1000).fadeIn(1000);
            $("#minTemp").html(Math.round(data.main.temp_min)).fadeOut(1000).fadeIn(1000);
            $("#maxTemp").html(Math.round(data.main.temp_max)).fadeOut(1000).fadeIn(1000);
            $("#weatherIcon").attr("src", "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png").fadeOut(1000).fadeIn(1000);
            $("#condition").html(data.weather[0].description).fadeOut(1000).fadeIn(1000);

        })
        } else {
            alert("Please enter a Zip Code");}

        $("#zipCode").val("");
    });

});
