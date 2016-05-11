( function() { "use strict";
	
	/**
	 * [requireCallback description]
	 * @param  {[type]} widgetModule [description]
	 * @param  {[type]} appConfig       [description]
	 * @return {[type]}                 [description]
	 */
	var requireCallback = function( widgetModule, appConfig ) {
		/**
		 * [widgetCtrl description]
		 * @param  {[type]} $scope [description]
		 * @return {[type]}        [description]
		 */
		var widgetCtrl = function( $scope, backendService ) {

			$scope.widgetResizeConfig = {
				create: function( e, ui ) {

				},
				resize: function( e, ui ) {

				},
				start: function( e, ui ) {

				},
				stop: function( e, ui ) {

				},
				handles: {
					n: ".r-handle-n",
					ne: ".r-handle-ne",
					e: ".r-handle-e",
					se: ".r-handle-se",
					s: ".r-handle-s",
					sw: ".r-handle-sw",
					w: ".r-handle-w",
					nw: ".r-handle-nw"
				}
			};

			$scope.widgetDragConfig = {
				containment: ".d-dashboard",
				create: function( e, ui ) {

				},
				drag: function( e, ui ) {

				},
				start: function( e, ui ) {

				},
				stop: function( e, ui ) {

				}
			};

			$scope.onClickWidget = function( e, wObj ) {
				console.info( wObj );
			};

		};

		widgetModule.controller( appConfig.modules.designer.widget.ctrl, [ 
			appConfig.ngVars.scope,
			appConfig.modules.core.services.backendService,
			
			widgetCtrl 
		] );

		return widgetCtrl;
	};

	define( [ "widgetModule", "appConfig" ], requireCallback );

} )();