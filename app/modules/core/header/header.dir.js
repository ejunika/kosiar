( function() {
	"use strict";
	define( [ "headerModule", "appConfig" ], function( headerModule, appConfig ) {
		var
		compileFn = function( el, attr ) {
			return function( $scope, el, attr, ctrl ) {

			};
		},
		headerDirective = function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.core.header.templateUrl,
				controller: appConfig.modules.core.header.ctrl,
				compile: compileFn
			};
		};

		return headerModule.directive(
				appConfig.modules.core.header.directive,
				headerDirective
			);
	} );
} )();