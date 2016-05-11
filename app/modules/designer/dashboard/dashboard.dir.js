( function() { "use strict";
	
	var requireCallback = function( dashboardModule, appConfig ) {
		var
		
		linkFn = function( $scope, el, attr, ctrl ) {

		},
		compileFn = function( el, attr ) {
			
			return linkFn;
		},
		dashboardDirective = function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.designer.dashboard.templateUrl,
				controller: appConfig.modules.designer.dashboard.ctrl,
				compile: compileFn
			};
		};

		return dashboardModule.directive(
				appConfig.modules.designer.dashboard.directive,
				dashboardDirective
			);
	};

	define( [ "dashboardModule", "appConfig" ], requireCallback );

} )();