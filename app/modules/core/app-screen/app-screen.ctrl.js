( function() {
	"use strict"
	define( [ "jQuery", "appScreenModule", "appConfig" ], function( $, appScreenModule, appConfig ) {
		var
		appScreenCtrl = function( $scope ) {
			
		};

		return appScreenModule.controller( 
			appConfig.modules.core.appScreen.ctrl, 
			[
				appConfig.ngVars.scope,
				appScreenCtrl
			]
		);
	} );
} )();