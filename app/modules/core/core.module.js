( function() {
	"use strict"
	define( [ 
				"angular", 
				"appConfig", 
				"headerModule", 
				"headerCtrl", 
				"headerDir",
				"bCrumbModule",
				"bCrumbCtrl",
				"bCrumbDir",
				"mainMenuModule",
				"mainMenuCtrl",
				"mainMenuDir",
				"fileManagerModule",
				"fileManagerCtrl",
				"fileManagerDataService",
				"appScreenModule",
				"appScreenCtrl",
				"appScreenDir",
				"jQueryAngularUI"
			], 
			function( ng, appConfig ) {
				var 

				coreModule = ng.module( 
					appConfig.modules.core.name, 
					[
						appConfig.modules.core.header.name,
						appConfig.modules.core.bCrumb.name,
						appConfig.modules.core.mainMenu.name,
						appConfig.modules.core.fileManager.name,
						appConfig.modules.core.appScreen.name,
						appConfig.modules.common.plugins.jQueryAngularUI
					]
				  );

				coreModule.directive( "repeatEnd", [ function() {
					return {
		                restrict: "A",
		                link: function ( scope, element, attrs ) {
		                    if (scope.$last) {
		                        scope.$eval( attrs.repeatEnd );
		                    }
		                }
		            };
				} ] );

				return coreModule;
			} );
} )();