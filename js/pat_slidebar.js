//************************//
//      Pat Slidebar      //
//      Version 1.0       //
//************************//

;( function ( $ ) {

	$.pat_slidebar = function ( options ) {

		var settings = $.extend( {
			bgcolor: '#222222', // main slide bar panel color.
			overlay: true, // true or false - Use background overlay when slide menu was opened.
			siteClose: true, // true or false - Enable closing slide menu when clicked at outside.
		}, options );

		//init element variable
		var $pat_menu_toggle = 				$('.pat_menu_toggle');
		var $pat_slide_menu = 				$('.pat_slide_menu');
		var $pat_slide_container = 			$('.pat_slide_container');
		var $pat_slide_other_container = 	$('.pat_slide_other_container');
		var $pat_slide_overlay = 			$('.pat_slide_overlay');
		var $pat_slide_input = 				$('.pat_slide_menu input[type=text], .pat_slide_menu input[type=password]');

		var $pat_ulmenu_hassub = $('.pat_ulmenu .has-sub');

	    function getTranslateX(obj)
	    {
	     var transformMatrix = obj.css("-webkit-transform") ||
	       obj.css("-moz-transform")    ||
	       obj.css("-ms-transform")     ||
	       obj.css("-o-transform")      ||
	       obj.css("transform");
	     var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
	     var x = matrix[12] || matrix[4]; //translate x
	     var y = matrix[13] || matrix[5]; //translate y
	     return x;
	    }

	    function setTranslateX(obj, distance)
	    {
	      obj.css('transform', 'translateX( ' + distance + 'px)' );
	      obj.css('webkit-transform', 'translateX(' + distance + 'px)');
	      obj.css('moz-transform', 'translateX(' + distance + 'px)');
	      obj.css('o-transform', 'translateX(' + distance + 'px)');
	      obj.css('-ms-transform', 'translateX(' + distance + 'px)');
	    }

	    function openPatSlideMenuCallback(e)
	    {
	      e.preventDefault();
	      $pat_slide_container.bind('touchstart click', function(e) {

	      	var currentPageX = e.originalEvent.pageX;
	      	if ( currentPageX == undefined || currentPageX == 0 )
	      		currentPageX = e.originalEvent.touches[0].pageX;

	        if ( getTranslateX($pat_slide_menu) == 260 && currentPageX > 260 )
	        {
	          $pat_slide_menu.removeClass("active");
	          $pat_slide_other_container.removeClass("active");

	          if ( settings.overlay )
		      	$pat_slide_overlay.removeClass("active");
	        }
	      });
	    }
	    function closePatSlideMenuCallback(e)
	    {
	      e.preventDefault();
	      $pat_slide_container.unbind('touchstart click');
	    }

		//init function
	    function initPatSlideMenu()
	    {
	    	$pat_slide_menu.css('background-color', settings.bgcolor);

	    	$pat_menu_toggle.on('touchstart click', function (e) 
	    	{
		    	e.preventDefault();

		        $pat_slide_menu.toggleClass("active");
		        $pat_slide_other_container.toggleClass("active");

		        if ( settings.overlay )
		        	$pat_slide_overlay.toggleClass("active");

		        if ( settings.siteClose )
		        {
			        if ( $pat_slide_menu.hasClass("active") )
			          openPatSlideMenuCallback(e);
			        else
			          closePatSlideMenuCallback(e);
		     	}
	    	});
	    }

      	initPatSlideMenu();
		
	}; // End Pat Slidebar function.

} ) ( jQuery );