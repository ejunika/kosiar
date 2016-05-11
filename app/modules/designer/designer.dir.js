( function() { "use strict";
	
	var requireCallback = function( designerModule, appConfig ) {
		var
		
		linkFn = function( $scope, el, attr, ctrl ) {

		},
		compileFn = function( el, attr ) {
			
			return linkFn;
		},
		designerDirective = function( designerDataService ) {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.designer.designer.templateUrl,
				controller: appConfig.modules.designer.designer.ctrl,
				compile: compileFn
			};
		};

		return designerModule.directive(
				appConfig.modules.designer.directive,
				[ 
					appConfig.modules.designer.services.designerDataService, 
					designerDirective
				]
			);
	};

	define( [ "designerModule", "appConfig" ], requireCallback );

} )();