( function() {
	
	"use strict";
	
	var
	headerControllerFn = function( $scope ) {
		
		$scope.handleHeaderControlClick = function( e, action ) {
			switch( action ) {
				case "TOGGLE_MENU": {
					if( $( ".clg-main-menu" ).hasClass( "clg-full-menu" ) ) {
						$( ".clg-toggle-menu-btn" ).addClass( "rotate" );
						$( ".clg-main-menu" ).removeClass( "clg-full-menu" ).addClass( "clg-hf-menu" );
						$( ".clg-wrapper" ).removeClass( "clg-wrapper-hf" ).addClass( "clg-wrapper-full" );
					}
					else {
						$( ".clg-toggle-menu-btn" ).removeClass( "rotate" );
						$( ".clg-main-menu" ).removeClass( "clg-hf-menu" ).addClass( "clg-full-menu" );
						$( ".clg-wrapper" ).removeClass( "clg-wrapper-full" ).addClass( "clg-wrapper-hf" );
					}
				}
				case "": {
					
				}
				default: {
					
				}
			}
		};
		
	};
	
	CAD.MODULE_OBJs.HEADER_MODULE_OBJ.controller(
		CAD.CONTROLLERS.HEADER_CONTROLLER,
		[
		 CAD.ANGULAR_VAR.SCOPE,
		 headerControllerFn
		]
		);
	
} )();