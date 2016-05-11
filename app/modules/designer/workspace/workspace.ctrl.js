( function() { "use strict";
	/**
	 * [requireCallback description]
	 * @param  {[type]} workspaceModule [description]
	 * @param  {[type]} appConfig       [description]
	 * @return {[type]}                 [description]
	 */
	var requireCallback = function( workspaceModule, appConfig ) {
		/**
		 * [workspaceCtrl description]
		 * @param  {[type]} $scope [description]
		 * @return {[type]}        [description]
		 */
		var workspaceCtrl = function( $scope ) {

		};
		
		workspaceModule.controller( "", workspaceCtrl );

		return workspaceCtrl;

	};

	define( [], requireCallback );

} )();