( function() {
	
	"use strict";
	
	var
	mainMenuDirectiveFn = function() {
		
		return {
			restrict: "AE",
		    templateUrl: CAD.DIRECTIVES.MAIN_MENU_DIRECTIVE.URL,
		    controller: CAD.CONTROLLERS.MAIN_MENU_CONTROLLER
		};
		
	};
	
	CAD.MODULE_OBJs.MAIN_MENU_MODULE_OBJ.directive(
		CAD.DIRECTIVES.MAIN_MENU_DIRECTIVE.NAME,
		mainMenuDirectiveFn
		);
	
} )();