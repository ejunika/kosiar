/**
 * 
 */
define( [ "jquery", "clgConfig", "breadcrumbModule" ],
		function($, CLG_CONFIG, breadcrumbModule) {
			var breadcrumbDirective = function() {

				return {
					restrict : "A",
					templateUrl : CLG_CONFIG.MODULES.BREADCRUMB.DIRECTIVES.BREADCRUMB_DIRECTIVE.TEMPLATE_URL,
					controller : CLG_CONFIG.MODULES.BREADCRUMB.CONTROLLER
				};

			};

			breadcrumbModule.directive(
					CLG_CONFIG.MODULES.BREADCRUMB.DIRECTIVES.BREADCRUMB_DIRECTIVE.NAME,
					breadcrumbDirective
				);

			return breadcrumbDirective;
		}
	);