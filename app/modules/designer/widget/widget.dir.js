( function() { "use strict";
	
	var requireCallback = function( widgetModule, appConfig ) {
		var
		
		linkFn = function( $scope, el, attr, ctrl ) {

		},
		compileFn = function( el, attr ) {
			
			return linkFn;
		},
		widgetDirective = function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.designer.widget.templateUrl,
				controller: appConfig.modules.designer.widget.ctrl,
				compile: compileFn
			};
		};

		return widgetModule.directive(
				appConfig.modules.designer.widget.directive,
				widgetDirective
			);
	};

	define( [ "widgetModule", "appConfig" ], requireCallback );

} )();