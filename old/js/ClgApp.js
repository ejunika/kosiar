( function() {
	var ANGULAR_MODULE = angular.module;
	
	CAD.MODULE_OBJs.HEADER_MODULE_OBJ = 
		ANGULAR_MODULE(
			CAD.MODULES.HEADER_MODULE,
			[
			 
			]
		);
	
	CAD.MODULE_OBJs.BREADCRUMB_MODULE_OBJ = 
		ANGULAR_MODULE(
			CAD.MODULES.BREADCRUMB_MODULE,
			[
			 
			]
		);
	
	CAD.MODULE_OBJs.MAIN_MENU_MODULE_OBJ = 
		ANGULAR_MODULE(
			CAD.MODULES.MAIN_MENU_MODULE,
			[
			 
			]
		);
	
	CAD.MODULE_OBJs.MAIN_MODULE_OBJ = 
		ANGULAR_MODULE(
			CAD.MODULES.MAIN_MODULE,
			[
				 CAD.MODULES.HEADER_MODULE,
				 CAD.MODULES.BREADCRUMB_MODULE,
				 CAD.MODULES.MAIN_MENU_MODULE
			]
		);
	
} )();