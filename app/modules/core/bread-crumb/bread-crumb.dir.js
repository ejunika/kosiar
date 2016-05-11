( function() {
	"use strict";
	define( [ "bCrumbModule", "appConfig" ], function( bCrumbModule, appConfig ) {
		var
		compileFn = function( el, attr ) {
			return function( $scope, el, attr, ctrl ) {

			};
		},
		bCrumbDirective = function() {
			return {
				restrict: "E",
				replace: true,
				templateUrl: appConfig.modules.core.bCrumb.templateUrl,
				controller: appConfig.modules.core.bCrumb.ctrl,
				compile: compileFn
			};
		};

		return bCrumbModule.directive(
				appConfig.modules.core.bCrumb.directive,
				bCrumbDirective
			);
	} );
} )();