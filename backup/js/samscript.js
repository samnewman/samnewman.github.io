
$(document).ready(function() {

	$('html').hide().fadeIn(500);
  
  //$('.alternatetitle').click(function() {

       	//$(".container,.hide,.alternatetitle").hide();
        //$(".archivecontainer").show();
        //$(".navzone").css({"opacity":"1" , "position":"absolute"});
        //$('.blocker').hide();
		
		//});

  // show alternate project title and corresponding slideshow, hide everything else

  $('.title').click(function(){
              var self = $(this);
              $('.alternatetitle,.slideshow,.slide').hide();
              $('.alternatetitle[rel=div' + self.attr('target') +'],.slideshow[rel=div' + self.attr('target') +'],.slide[rel=div' + self.attr('target') +']').show();
                            $(".container").fadeIn(100); 
              $(".archivecontainer").hide();
              $(".nav").css("opacity",".15");
              $(".slide").parent().find(self).first();
              $(".back").show();
              $(".name").hide();
              $(".blocker").show();

        });

  $(".back").click(function(){
        $(".name").show();
        $(".back").hide();
        $(".container,.hide,.alternatetitle").hide();
        $(".archivecontainer").show();
        $(".nav").css({"opacity":"1" , "position":"absolute"});
        $('.blocker').hide();
        $(".bio").hide();
        $(".info").removeClass("underline");

  });

  $('.info').click(function() {
        $(".name").hide();
        $(".back").show();

       	$(".bio").show();
       	$(".archivecontainer").hide();
       	$(".info").addClass("underline");
		
		});

  // cycle images of the same class //

  $('.slide').click(function () {
        $(this).hide();
        var next = $(this).next();
        console.log(next.length);
        if (next.length == 0)
        next = $(this).parent().find('.slide').first();
        next.show();
  });


  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
		
    $('img, .description').hover(function() {

      $('img, .description').css('cursor','pointer');

	  });

  }

  if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || $.browser.msie == 1)
    {
  $('img, .description').css('cursor','pointer');
    }

     

 });