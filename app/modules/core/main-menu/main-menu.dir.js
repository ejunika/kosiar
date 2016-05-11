( function() {
	"use strict";
	define( [ "mainMenuModule", "appConfig" ], function( mainMenuModule, appConfig ) {
		var
		compileFn = function( el, attr ) {
			return function( $scope, el, attr, ctrl ) {

			};
		},
		mainMenuDirective = function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.core.mainMenu.templateUrl,
				controller: appConfig.modules.core.mainMenu.ctrl,
				compile: compileFn
			};
		};

		return mainMenuModule.directive(
				appConfig.modules.core.mainMenu.directive,
				mainMenuDirective
			);
	} );
} )();