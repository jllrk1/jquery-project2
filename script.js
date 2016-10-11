$(document).ready(function () {
    var $body = $("body").addClass("body");
    var $message = $('#fav-things').addClass("h3");
    $('#favorite-things').append('<p><button>Click me</button></p>');
    var $button = $(':button');
    var $otherH3$ = $('#favorite-things').append('<p id="otherH3">Now click each item to expand</p>').first().addClass("white");
    $('#otherH3').hide();


    console.log($button.get(0));


    var GetData = function (title, description, image) {
        //after button is clicked add paragraph to list items and change color to white
        $button.on("click", function () {
            $button.hide();
            $('#otherH3').show();




            var CreateWebPageSections = function () {

                var $Div = $('<div id="things"> </div>');
                $('#favorite-things').append($Div);
                var $H3 = $('<h3>' + title + '</h3>').addClass("h3");
                $('#things').append($H3);

                var $P = $('<p>' + description + '</p>').addClass("p");
                $('#things').append($P);

                //$('#items').append('<img src="' + image + '">');
                var $Img = $('<img src="' + image + '">');
                $('#things').append($Img);
                //make sure paragraph hides till heading is clicked
                $P.hide();
                $Img.hide();

                $H3.on("click", function () {
                    $P.toggle();
                    $Img.toggle();




                });





            };

            CreateWebPageSections();









        });



    }

    $.getJSON("items.json", function (data) {

        var i;
        var item;

        for (i = 0; i < data.items.length; i++) {
            item = data.items[i];
            GetData(item.title, item.description, item.image);
            console.log(item);

        }








    });



});