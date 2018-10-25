$(document).ready(function() {

    var giftypes = ["Spider-man", "Batman", "Superman", "Bugs Bunny",]

    function addgifs () {
        
        $("#image-dump").empty();

        console.log("Can I make it here at least?");

        var keyword = $(this).attr("data-name");
        console.log(keyword);

        var queryURL =  "http://api.giphy.com/v1/gifs/search?q=" + keyword + "&api_key=d5XSa6kCGKCoZ4Fp2ytaE7zq69DYDUCs";

        $.ajax({
            url : queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);

            var boo = response.data    

    for (var i = 0; i < 10; i++) {
            var gifdiv = $("<div class='gif'>");
            var rating = boo[i].rating;
            gifdiv.append(rating);
            gifdiv.append("<br>");
            var imageURL = boo[i].images.fixed_height.url;
            var newgif = $("<img>");
            newgif.attr("src" , imageURL);
            newgif.attr("alt" , "didn't work");
            gifdiv.append(newgif);
            $("#image-dump").append(gifdiv);
            }

        })

    }

function makebuttons() {
    $("#new-buttons").empty();

    for (var i = 0; i < giftypes.length; i++) {

    var a = $("<button>");
    a.addClass("gif-btn");
    a.attr("data-name", giftypes[i]);
    a.text(giftypes[i]); 
    $("#new-buttons").append(a);
    }

}

$("#add-gif-btn").on("click", function(event) {
    event.preventDefault();
    var newtype = $("#new").val().trim();
    giftypes.push(newtype);
    console.log(giftypes);

    makebuttons();
    })

$(document).on("click", ".gif-btn", addgifs);

makebuttons();

})


