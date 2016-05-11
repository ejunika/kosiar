( function() {
	"use strict";
	define( [ "appScreenModule", "appConfig" ], function( appScreenModule, appConfig ) {
		var
		compileFn = function( el, attr ) {
			return linkFn;
		},
		linkFn = function( $scope, $element, $attributes, $controller ) {

		},
		appScreenDirective = function() {
			return {
				restrict: "E",
				replace: true,
				transclude: true,
				templateUrl: appConfig.modules.core.appScreen.templateUrl,
				controller: appConfig.modules.core.appScreen.ctrl,
				compile: compileFn
			};
		};

		return appScreenModule.directive(
				appConfig.modules.core.appScreen.directive,
				[ appScreenDirective ]
			);
	} );
} )();