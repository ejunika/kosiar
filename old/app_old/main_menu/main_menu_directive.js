/**
 * 
 */
define( [ "jquery", "clgConfig", "mainMenuModule" ],
		function($, CLG_CONFIG, mainMenuModule) {
			var mainMenuDirective = function() {

				return {
					restrict : "A",
					templateUrl : CLG_CONFIG.MODULES.MAIN_MENU.DIRECTIVES.MAIN_MENU_DIRECTIVE.TEMPLATE_URL,
					controller : CLG_CONFIG.MODULES.MAIN_MENU.CONTROLLER
				};

			};

			mainMenuModule.directive(
					CLG_CONFIG.MODULES.MAIN_MENU.DIRECTIVES.MAIN_MENU_DIRECTIVE.NAME,
					mainMenuDirective
				);

			return mainMenuDirective;
		}
	);