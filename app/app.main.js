( function() { "use strict";

	var requireCallback = function( ng, appConfig, appStart ) {
		ng.bootstrap( document, [ appConfig.modules.core.name ], {
			strictDi: true
		} );
	};

	require.config( {
		baseUrl: "app/modules",
		paths: {
			jQuery : "/node_modules/jquery/dist/jquery.min",
			jQueryUI : "/node_modules/jquery-ui/jquery-ui",
			jQueryAngularUI: "common/jq.angular.ui",
			canvasJs : "/node_modules/canvasjs/dist/jquery.canvasjs.min",
			angular : "/node_modules/angular/angular",
			bootstrap : "/node_modules/bootstrap/dist/js/bootstrap.min",
			bContextMenu : "/bower_components/bootstrap-contextmenu/bootstrap-contextmenu",
			jsTree : "/node_modules/jstree/dist/jstree.min",

			appStart: "/app/app.start",
			appConfig: "/app/app.config",

			coreModule: "core/core.module",
			coreCtrl: "core/core.ctrl",
			coreDataService: "core/core-data.service",
			cxtMenuService: "core/cxt-menu.service",
			backendService: "core/backend.service",
			utilService: "core/util.service",

			headerModule: "core/header/header.module",
			headerCtrl: "core/header/header.ctrl",
			headerDir: "core/header/header.dir",

			mainMenuModule: "core/main-menu/main-menu.module",
			mainMenuCtrl: "core/main-menu/main-menu.ctrl",
			mainMenuDir: "core/main-menu/main-menu.dir",

			bCrumbModule: "core/bread-crumb/bread-crumb.module",
			bCrumbCtrl: "core/bread-crumb/bread-crumb.ctrl",
			bCrumbDir: "core/bread-crumb/bread-crumb.dir",

			fileManagerModule: "core/file-manager/file-manager.module",
			fileManagerCtrl: "core/file-manager/file-manager.ctrl",
			fileManagerDir: "core/file-manager/file-manager.dir",
			fileManagerDataService: "core/file-manager/file-manager-data.service",

			modalDialogModule: "core/modal-dialog/modal-dialog.module",
			modalDialogCtrl: "core/modal-dialog/modal-dialog.ctrl",
			modalDialogDir: "core/modal-dialog/modal-dialog.dir",

			appScreenModule: "core/app-screen/app-screen.module",
			appScreenCtrl: "core/app-screen/app-screen.ctrl",
			appScreenDir: "core/app-screen/app-screen.dir",

			designerModule: "designer/designer.module",
			designerCtrl: "designer/designer.ctrl",
			designerDir: "designer/designer.dir",
			designerDataService: "designer/designer-data.service",

			dashboardModule: "designer/dashboard/dashboard.module",
			dashboardCtrl: "designer/dashboard/dashboard.ctrl",
			dashboardDir: "designer/dashboard/dashboard.dir", 
			dashboardDataService: "designer/dashboard/dashboard-data.service",
			
			widgetModule: "designer/widget/widget.module",
			widgetCtrl: "designer/widget/widget.ctrl",
			widgetDir: "designer/widget/widget.dir"

		},
		shim : {
			appStart: {
				deps: [ "appConfig", "coreCtrl" ]
			},
			coreCtrl: {
				deps: [ "coreModule" ]
			},
			coreModule: {
				deps: [ "angular" ]
			},
			angular : {
				deps: [ "bootstrap" ],
				exports : "angular"
			},
			bContextMenu: {
				deps: [ "jQuery" ]	
			},
			bootstrap: {
				deps: [ "jQuery" ]
			},
			canvasJs: {
				deps: [ "jQuery" ]
			},
			"jQueryAngularUI": {
				deps: [ "jQuery", "jQueryUI" ]
			},
			jQuery : {
				exports : "jQuery"
			}
		},
		waitSeconds : 180
	} );

	require( [ "angular", "appConfig", "appStart" ], requireCallback );

} )();