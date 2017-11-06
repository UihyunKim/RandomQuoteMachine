$(document).ready(function() {

    setTimeout(function() {
        $("#getMessage").trigger('click');
        console.log("setTimeout function working...");
    }, 10);

    $("#getMessage").on("click", function() {
        console.log("button clicked");

        $.getJSON("https://dl.dropboxusercontent.com/s/lrjwy7tp8262xh7/quotes.json?dl=1", function(json) {
            console.log("getJSON working... ");

            var randomId = Math.floor(Math.random() * 8);
            console.log("randomId: " + randomId);

            var html = "";

            json = json[randomId];

            console.log(json.id);
            console.log(json.book);

            var writer = function() {
                html += "<div class = 'bible'>";
                html += "<h2 class = 'text'>" + json.text + "</h2>";
                html += "<h4 class = 'book'>" + json.book + " " + json.chapter + ":" + json.verse + "</h4>";
                html += "</div>";
            };
            writer();

            $(".message").html(html);

            // CHANGE COLOR
            var pallette = ["#FFF056", "#C63D0F", "#A8CD1B", "#74AFAD", "#DE1B1B", "#4A96AD", "#67BCDB", "#E44424", "#FFE658"];
            var randomEl = Math.floor(Math.random() * pallette.length);
            $("body, button").animate({
                backgroundColor: pallette[randomEl]
            }, 1000);
            $("h2, h4").fadeOut(1).css("color", pallette[randomEl]).fadeIn(2000);

            // twitter share message prepare
            var twitterMsg = "https://twitter.com/intent/tweet?text=";

            var twitter = function() {
                twitterMsg += json.text + " " + json.book + " " + json.chapter + ":" + json.verse;
            };
            twitter();

            $("a").attr("href", twitterMsg);

        });   // end of $.getJSON

    }); // end of on.click
}); // End of js
