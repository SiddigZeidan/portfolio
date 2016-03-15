/*
Main Scrips Javascript
*/

$(document).ready(function(){
hovereffect();
	

	   $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=siddig_zeidan&api_key=81c67f5cbcdcfb715d3feca6b004ff37&limit=4&format=json&callback=?", function(data) {

        var html = ''; // we declare the variable that we'll be using to store our information
        var counter = 1; // we declare a counter variable to use with the if statement in order to limit the result to 1
        $.each(data.recenttracks.track, function(i, item) {
       			console.log(item);
                html += '<div class ="col-md-3"><img src="' + item.image[3]['#text'] + '"> <span><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '</span></div>' ;
          
        }); // close each loop
        console.log(html);

    }); // close JSON call



	var main = $('.l-main');
	var overlay = $('.info');
	var overlay_inner = $('.info .container');
    var button = $('#information');
	var closeBtn = $('#close-button');
	var recentlyplayed = $('.recetly-played-container');
	
	//shrink overlay_inner initially
	TweenMax.set(overlay_inner, { scaleX:0.3, scaleY:0.3  });
	
	//open
	button.click(function() {
		TweenMax.to(overlay, 0.5, { ease: Power2.easeOut, right:0 });
		TweenMax.to(overlay_inner, 0.5, { ease: Power2.easeOut, scaleX:1, scaleY:1 });
		TweenMax.to(main, 0.5, { ease: Power2.easeOut, scaleX:0.3, scaleY:0.3  });

	});
	
	//close
	closeBtn.click(function() {
		TweenMax.to(overlay, 0.5, { ease: Power2.easeOut, right:'100%' });
		TweenMax.to(overlay_inner, 0.5, { ease: Power2.easeOut, scaleX:0.3, scaleY:0.3 });
		TweenMax.to(main, 0.5, { ease: Power2.easeOut, scaleX:1, scaleY:1  });
	});

})


function hovereffect(){
	$(".btn").hover(
		  function(){
		  	console.log("hovered");
      $(this).closest("section").find(".background-image-container").css("transform", "scale(1.02)");
     
 },
 
  function(){
 $(this).closest("section").find(".background-image-container").css("transform", "scale(1)");
     
  }
	)
}


