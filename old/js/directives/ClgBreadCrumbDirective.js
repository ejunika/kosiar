( function() {
	
	"use strict";
	
	var
	breadCrumbDirectiveFn = function() {
		
		return {
			restrict: "AE",
		    templateUrl: CAD.DIRECTIVES.BREADCRUMB_DIRECTIVE.URL,
		    controller: CAD.CONTROLLERS.BREADCRUMB_CONTROLLER
		};
		
	};
	
	CAD.MODULE_OBJs.BREADCRUMB_MODULE_OBJ.directive(
		CAD.DIRECTIVES.BREADCRUMB_DIRECTIVE.NAME,
		breadCrumbDirectiveFn
		);
	
} )();