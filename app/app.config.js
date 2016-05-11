( function() {"use strict";

	var requireCallback = function() {
		return {
			modules: {
				core: {
					name: "core.module",
					ctrl: "core.ctrl",
					services: {
						coreDataService: "core-data.service",
						backendService: "backend.service"
					},
					header: {
						name: "header.module",
						ctrl: "header.ctrl",
						directive: "njHeader",
						templateUrl: "app/modules/core/header/header.view.html"
					},
					mainMenu: {
						name: "main-menu.module",
						ctrl: "main-menu.ctrl",
						directive: "njMainMenu",
						templateUrl: "app/modules/core/main-menu/main-menu.view.html"
					},
					bCrumb: {
						name: "bread-crumb.module",
						ctrl: "bread-crumb.ctrl",
						directive: "njBreadCrumb",
						templateUrl: "app/modules/core/bread-crumb/bread-crumb.view.html"
					},
					appScreen: {
						name: "app-screen.module",
						ctrl: "app-screen.ctrl",
						directive: "njAppScreen",
						templateUrl: "app/modules/core/app-screen/app-screen.view.html"
					},
					fileManager: {
						name: "file-manager.module",
						ctrl: "file-manager.ctrl",
						directive: "njFileManager",
						templateUrl: "",
						services: {
							fileManagerDataService: "file-manager-data.service"
						}
					}
				},
				common: {
					plugins: {
						jQueryAngularUI: "jq.angular.ui"
					}
				},
				designer: {
					name: "designer.module",
					ctrl: "designer.ctrl",
					dashboard: {
						name: "dashboard.module",
						ctrl: "dashboard.ctrl",
						directive: "njDashboard",
						templateUrl: "app/modules/designer/dashboard/dashboard.view.html",
						services: {
							dashboardDataService: "dashboard-data.service"
						}
					},
					widget: {
						name: "widget.module",
						ctrl: "widget.ctrl",
						directive: "njWidget",
						templateUrl: "app/modules/designer/widget/widget.view.html",
						services: {
							widgetDataService: "widget-data.service"
						}
					},
					services: {
						designerDataService: "desiger-data.service"
					}
				}
			},
			ngVars: {
				scope: "$scope",
				injector: "$injector",
				timeout: "$timeout"
			}
		}
	};

	define( [], requireCallback );

} )();