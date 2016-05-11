( function( win, $ ) { "use strict"
	
	var
	cxtMenu = function() {
		$( this ).each( function() {
			initCxtMenu.apply( this );
		} );
	},
	initCxtMenu = function() {
		$( this ).off( "contextmenu" )
		.on( "contextmenu", cxtMenuHandler );
	},
	cxtMenuHandler = function( e ) {
		e.preventDefalut();
		e.stopPropagation();
		console.log( this );
	};

	$.fn.cxtMenu = cxtMenu;

} )( window, jQuery );