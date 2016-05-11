( function() {
	"use strict"
	define( [ "bCrumbModule", "appConfig" ], function( bCrumbModule, appConfig ) {
		var
		bCrumbModuleCtrl = function( $scope ) {
			
		};

		return bCrumbModule.controller( 
					appConfig.modules.core.bCrumb.ctrl,
					[
						appConfig.ngVars.scope,
						bCrumbModuleCtrl
					] 
				);
	} );
} )();