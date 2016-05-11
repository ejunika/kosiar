/**
 * 
 */
define([ "jquery", "bootstrap", "bootstrapContextMenu", "clgConfig", "angular" ], function($,
		bootstrap, bootstrapContextMenu, CLG_CONFIG, angular) {
	return angular.module(CLG_CONFIG.MODULES.CORE.MODULE, [
			CLG_CONFIG.MODULES.HEADER.MODULE,
			CLG_CONFIG.MODULES.BREADCRUMB.MODULE,
			CLG_CONFIG.MODULES.FILE_MANAGER.MODULE,
			CLG_CONFIG.MODULES.MAIN_MENU.MODULE,
			CLG_CONFIG.MODULES.DESIGNER.MODULE,
			CLG_CONFIG.MODULES.MODAL_DIALOG.MODULE ]).directive("repeatEnd", function(){
	            return {
	                restrict: "A",
	                link: function (scope, element, attrs) {
	                    if (scope.$last) {
	                        scope.$eval(attrs.repeatEnd);
	                    }
	                }
	            };
	        });;
});