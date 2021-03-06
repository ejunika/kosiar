/**
 * 
 */
define([ "jquery", "clgConfig", "angular", "headerModule" ], function($,
		CLG_CONFIG, angular, headerModule) {
	var headerController = function($scope) {
		$scope.handleHeaderControlClick = function(e, action) {
			switch (action) {
			case "TOGGLE_MENU":
				if ($(".clg-main-menu").hasClass("clg-full-menu")) {
					$(".clg-toggle-menu-btn").addClass("rotate");
					$(".clg-main-menu").removeClass("clg-full-menu").addClass(
							"clg-hf-menu");
					$(".clg-wrapper").removeClass("clg-wrapper-hf").addClass(
							"clg-wrapper-full");
				} else {
					$(".clg-toggle-menu-btn").removeClass("rotate");
					$(".clg-main-menu").removeClass("clg-hf-menu").addClass(
							"clg-full-menu");
					$(".clg-wrapper").removeClass("clg-wrapper-full").addClass(
							"clg-wrapper-hf");
				}
				break;
			case "":

				break;
			default:

				break;
			}
		};
	};
	headerModule.controller(CLG_CONFIG.MODULES.HEADER.CONTROLLER, [ "$scope",
			headerController ]);
	return headerController;
});