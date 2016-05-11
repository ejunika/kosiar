/**
 * @author M A AKHTAR
 */
define([ "jquery", "clgConfig", "angular", "breadcrumbModule" ], function($,
		CLG_CONFIG, angular, breadcrumbModule) {
	var breadcrumbController = function($scope) {
		
	};
	breadcrumbModule.controller(CLG_CONFIG.MODULES.BREADCRUMB.CONTROLLER, [
			"$scope", breadcrumbController ]);
	return breadcrumbController;
});