$(function() {
    $.ajax({
       beforeSend: function(xhr) {
           if (xhr.overrideMimeType) {
               xhr.overrideMimeType("application/json");
           }
       } 
    });
        var $h2 = $('h2');
        var $mPage = $('#mPage');
        
        $h2.on("click", function(){
    $mPage.after('<section id = "jlInfo"></section>');
        $h2.remove();
        var $jlInfo = $('#jlInfo');
        $jlInfo.append('<h2>This weeks articles</h2>');       
            $jlInfo.append('<div id = "curArticles"></div>');
            $jlInfo.after('<div id = "aboutPg"><h3>About this page</h3></div>');
        var $about = $('#aboutPg');
            $about.append('<p>This page contains 3 pieces that cover different parts of my life, from sports I play/watch, music festivities I enjoy, and things I have seen/done on trips that I have taken.</p>');
            
        var $curArt = $('#curArticles');
            $curArt.prepend('<ul><li><span class ="cur-item">Vacations</span></li><li><span class ="cur-item">Music Events</span></li><li><span class ="cur-item">Sports</span></li></ul>');
            $curArt.append('<div id = "feat-articles"><h2>Click here to reveal this weeks articles</h2></div>');
    
    
    var $featart = $('#feat-articles');
    $featart.on("click", function(){
        $(this).children().first().remove();   
        $.getJSON("JLarticles.json")
        .done ( function(data){
            $("aside").removeClass("hide");
            for (i = 0; i < data.JLfeatures.length; i++){
              $("#feat-articles").append("<h3>" + data.JLfeatures[i].name + "</h3>");
                $("#feat-articles").append("<img src =" + data.JLfeatures[i].image + "></img>");
                 $("#feat-articles").append("<p>" + data.JLfeatures[i].description + "</p>");
                $("#feat-articles").append("<p>" + data.JLfeatures[i].location + "</p>");
                $("#feat-articles").append("<p>" + data.JLfeatures[i].type + "</p>");
                $("#feat-articles").append("<p>" + data.JLfeatures[i].date + "</p>");
                
            };
        }).fail( function() {
            $('section.jlInfo').html('Error, could not load featured items at the moment');
            $("aside").addClass("hide");
        });
    });
});
                
});