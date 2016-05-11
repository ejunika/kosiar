( function() {
	"use strict"
	define( [ "mainMenuModule", "appConfig" ], function( mainMenuModule, appConfig ) {
		var
		mainMenuCtrl = function( $scope, coreDataService, backendService ) {
			
			/**
			 * @function
			 * @author EID201
			 * */
			$scope.init = function() {
				var 
				reqUrl = "app/modules/core/main-menu/main-menu.data.json", 
				successFn = function( jsonData ) {
					$scope.mainMenuList = jsonData.menus;
				},
				errorFn = function( errorData ) {

				};

				backendService.getJson( reqUrl, successFn, errorFn );
				$scope.mainMenuList = [];
			};

			/**
			 * @function
			 * @author EID201
			 * */
			$scope.executeAction = function( e, menu ) {
				var menuId = menu.id;
				if( menuId ) {
					switch( menuId ) {
						case "admin":
							$scope.showOptions = true;
							$scope.clgView = "";
							break;
						case "designer":
							$scope.openView( "DESIGNER" );
							break;
						default:
							coreDataService.showOptions = false;
							$scope.openView( "DEFAULT" );
							break;
					}
				}		
			};
		};

		return mainMenuModule.controller( 
			appConfig.modules.core.mainMenu.ctrl, 
			[
				appConfig.ngVars.scope,
				appConfig.modules.core.services.coreDataService,
				appConfig.modules.core.services.backendService,
				mainMenuCtrl
			]
		);
	} );
} )();