var 
	URL_CONFIG = {
		IPv4: "localhost",
		PORT: "8181",
		createUrl: function( url ) {
			return "http://" + this.IPv4 + ":" + this.PORT + "/cxf/" + url;
		}
	},
	CAD = {
	ANGULAR_VAR: {
		SCOPE: "$scope"
	},
	MODULE_OBJs: {},
	MODULES: {
		MAIN_MODULE: "ClgApp",
		HEADER_MODULE: "ClgHeader",
		MAIN_MENU_MODULE: "ClgMainMenu",
		BREADCRUMB_MODULE: "ClgBreadCrumb"
	},
	CONTROLLERS: {
		MAIN_CONTROLLER: "ClgAppController",
		HEADER_CONTROLLER: "ClgHeaderController",
		MAIN_MENU_CONTROLLER: "ClgMainMenuController",
		BREADCRUMB_CONTROLLER: "ClgBreadCrumbController",
		FILE_MANAGER_CONTROLLER: "ClgFileManagerController"
	},
	FACTORIES: {
		DATA_FACTORY: "ClgDataFactory",
		SERVICE_FACTORY: "ClgServiceFactory"
	},
	DIRECTIVES: {
		HEADER_DIRECTIVE: {
			NAME: "clgHeaderDir",
			URL: "views/common/header/header.html"
		},
		BREADCRUMB_DIRECTIVE: {
			NAME: "clgBreadCrumbDir",
			URL: "views/common/breadcrumb/breadcrumb.html"
		},
		MAIN_MENU_DIRECTIVE: {
			NAME: "clgMainMenuDir",
			URL: "views/common/menus/main_menu.html"
		}
	},
	URLs: {
		FILE: {
			CREATE_FILE: URL_CONFIG.createUrl( "file/createFile" ),
			GET_FILE_BY_ID: URL_CONFIG.createUrl( "file/getFileById" ),
			GET_FILES_BY_PARENT_ID: URL_CONFIG.createUrl( "file/getFilesByParentId" )
		}
	},
	DATA: {
		
	}
};