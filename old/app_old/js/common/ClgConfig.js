/**
 * @author M A AKHTAR
 */
define([], function() {
	return {
		ANGULAR_VARS : {
			SCOPE : "$scope"
		},
		MODULES : {
			CORE : {
				MODULE : "clg_app_module",
				CONTROLLER : "clg_app_controller",
				DIRECTIVE : "",
				SERVICES : {
					DATA_SERVICE : "clg_data_service",
					CONTEXT_MENU_SERVICE: "clg_cxt_menu_service"
				},
				FACTORIES : {
					BACKEND_SERVICE_FACTORY : "backend_service_factory",
					UTIL_SERVICE_FACTORY : "util_service_factory"
				}
			},
			HEADER : {
				MODULE : "clg_header_module",
				CONTROLLER : "clg_header_controller",
				DIRECTIVES : {
					HEADER_DIRECTIVE: {
						NAME: "clgHeaderDir",
						TEMPLATE_URL: "./app/header/header.html"
					}
				},
				FACTORIES : {

				}
			},
			MAIN_MENU : {
				MODULE : "clg_main_menu_module",
				CONTROLLER : "clg_main_menu_controller",
				DIRECTIVES : {
					MAIN_MENU_DIRECTIVE: {
						NAME: "clgMainMenuDir",
						TEMPLATE_URL: "./app/main_menu/main_menu.html"
					}
				},
				FACTORIES : {

				}
			},
			BREADCRUMB : {
				MODULE : "clg_breadcrumb_module",
				CONTROLLER : "clg_breadcrumb_controller",
				DIRECTIVES : {
					BREADCRUMB_DIRECTIVE: {
						NAME: "clgBreadcrumbDir",
						TEMPLATE_URL: "./app/breadcrumb/breadcrumb.html"
					}
				},
				FACTORIES : {

				}
			},
			FILE_MANAGER: {
				MODULE : "clg_file_manager_module",
				CONTROLLER : "clg_file_manager_controller",
				DIRECTIVES : {
					MODAL_DIALOG_DIRECTIVE: {
						NAME: "",
						TEMPLATE_URL: ""
					}
				},
				SERVICES : {
					FILE_SERVICE : "clg_file_manager_service"
				},
				FACTORIES : {

				}
			},
			MODAL_DIALOG : {
				MODULE : "clg_modal_dialog_module",
				CONTROLLER : "clg_modal_dialog_controller",
				DIRECTIVES : {
					MODAL_DIALOG_DIRECTIVE: {
						NAME: "clgModalDialogDir",
						TEMPLATE_URL: "./app/modal_dialog/modal_dialog.html"
					}
				},
				FACTORIES : {

				}
			},
			DESIGNER: {
				MODULE : "designer_module",
				CONTROLLER : "designer_controller",
				DIRECTIVES : {
					
				},
				FACTORIES : {

				}
			}
		}
	};
});