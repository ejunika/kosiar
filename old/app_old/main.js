require
		.config({
			baseUrl : "app",
			paths : {
				jquery : "js/plugins/jquery/jquery-1.11.1",
				jqueryUI : "js/plugins/jquery/jquery-ui",
				canvasjs : "js/plugins/canvasjs/jquery.canvasjs.min",
				angular : "js/plugins/angular/angular",
				bootstrap : "js/plugins/bootstrap/js/bootstrap.min",
				bootstrapContextMenu : "js/plugins/bootstrap-contextmenu/bootstrap-contextmenu",
				jsTree : "js/plugins/jsTree/jstree.min",

				coreModule : "core/core_module",
				coreController : "core/core_controller",
				dataService : "core/data_service",
				cxtMenuService : "core/context_menu_service",
				backendServiceFactory : "core/backend_service_factory",
				utilServiceFactory : "core/util_service_factory",

				headerModule : "header/header_module",
				headerController : "header/header_controller",
				headerDirective : "header/header_directive",

				mainMenuModule : "main_menu/main_menu_module",
				mainMenuDirective : "main_menu/main_menu_directive",
				mainMenuController : "main_menu/main_menu_controller",

				breadcrumbModule : "breadcrumb/breadcrumb_module",
				breadcrumbDirective : "breadcrumb/breadcrumb_directive",
				breadcrumbController : "breadcrumb/breadcrumb_controller",

				fileManagerModule : "file_manager/file_manager_module",
				fileManagerService : "file_manager/file_manager_service",
				fileManagerDirective : "file_manager/file_manager_directive",
				fileManagerController : "file_manager/file_manager_controller",
				
				designerModule: "designer/designer_module",
				designerController: "designer/designer_controller",

				modalDialogModule : "modal_dialog/modal_dialog_module",
				modalDialogDirective : "modal_dialog/modal_dialog_directive",
				modalDialogController : "modal_dialog/modal_dialog_controller",

				clgConfig : "js/common/ClgConfig"
			},
			shim : {
				jquery : {
					exports : "jquery"
				},
				angular : {
					exports : "angular"
				},
				bootstrapContextMenu: [ "jquery" ],
				bootstrap: [ "jquery" ],
				canvasjs: [ "jquery" ]
			},

			waitSeconds : 180
		});
require([ "jquery", "jqueryUI", "jsTree", "canvasjs", "clgConfig", "angular",
		"coreController", "dataService", "cxtMenuService",
		"fileManagerService", "utilServiceFactory", "backendServiceFactory",
		"headerController", "headerDirective", "mainMenuController",
		"mainMenuDirective", "breadcrumbController", "breadcrumbDirective",
		"fileManagerController", "designerController", "modalDialogController",
		"modalDialogDirective" ], function($, $UI, jsTree, cJs, CLG_CONFIG, angular,
		coreController) {
	angular.bootstrap(document, [ CLG_CONFIG.MODULES.CORE.MODULE ]);
});