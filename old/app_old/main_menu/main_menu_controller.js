/**
 * @author M A AKHTAR
 */
define(
		[ 
		  "jquery", 
		  "clgConfig", 
		  "angular", 
		  "mainMenuModule"
		], 
		function( $, CLG_CONFIG, angular, mainMenuModule ) {
			var 
			mainMenuController = function( $scope, BACKEND_SERVICE_FACTORY ) {
				$scope.DATA_SERVICE.ADMINISTRATION = {};
				$scope.DATA_SERVICE.ADMINISTRATION.showAdminOptions = false;
		
				$scope.onInitMainMenu = function() {
		
					var
					DATA_URL = "app/main_menu/main_menu.json", 
					sCallbackFn = function( menuJson ) {
						$scope.mainMenus = menuJson[ "menus" ];
					};
		
					BACKEND_SERVICE_FACTORY.getJson(
							DATA_URL,
							sCallbackFn
						);
				};
		
				$scope.executeAction = function(e, menu) {
					var menuId = menu.id;
					switch( menuId ) {
						case "admin":
							$scope.DATA_SERVICE.ADMINISTRATION.showAdminOptions = true;
							$scope.clgView = "";
							break;
						case "designer":
							$scope.openView( "DESIGNER" );
							break;
						default:
							break;
						}		
				};
			};
			
			mainMenuModule.controller( 
					CLG_CONFIG.MODULES.MAIN_MENU.CONTROLLER, 
					[
					 	"$scope", 
					 	CLG_CONFIG.MODULES.CORE.FACTORIES.BACKEND_SERVICE_FACTORY,
					 	mainMenuController
					]
				);
			
			return mainMenuController;
		}
	);