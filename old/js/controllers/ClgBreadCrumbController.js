( function() {
	
	"use strict";
	
	var
	breadCrumbControllerFn = function( $scope ) {
		
		$scope.DATA_FACTORY.BREADCRUMB = {};
		$scope.DATA_FACTORY.BREADCRUMB.displayList = [];
		
	};
	
	CAD.MODULE_OBJs.BREADCRUMB_MODULE_OBJ.controller(
		CAD.CONTROLLERS.BREADCRUMB_CONTROLLER,
		[
		 CAD.ANGULAR_VAR.SCOPE,
		 breadCrumbControllerFn
		]
		);
	
} )();