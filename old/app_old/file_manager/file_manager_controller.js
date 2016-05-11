/**
 * @author M A AKHTAR
 */
define([ "jquery", "clgConfig", "angular", "fileManagerModule" ], function($,
		CLG_CONFIG, angular, fileManagerModule) {
	var fileManagerController = function($scope) {
		$scope.createFile = function( x ) {
			alert( "CreateFile" );
		};
	};
	fileManagerModule.controller(CLG_CONFIG.MODULES.FILE_MANAGER.CONTROLLER, [
			"$scope", fileManagerController ]);
	return fileManagerController;
});