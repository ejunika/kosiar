/**
 * 
 */
define( [ "jquery", "clgConfig", "modalDialogModule" ],
		function($, CLG_CONFIG, modalDialogModule) {
			var modalDialogDirective = function() {

				return {
					restrict : "A",
					templateUrl : CLG_CONFIG.MODULES.MODAL_DIALOG.DIRECTIVES.MODAL_DIALOG_DIRECTIVE.TEMPLATE_URL,
					controller : CLG_CONFIG.MODULES.MODAL_DIALOG.CONTROLLER
				};

			};

			modalDialogModule.directive(
					CLG_CONFIG.MODULES.MODAL_DIALOG.DIRECTIVES.MODAL_DIALOG_DIRECTIVE.NAME,
					modalDialogDirective
				);

			return modalDialogDirective;
		}
	);