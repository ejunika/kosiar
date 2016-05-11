( function() { "use strict";
	
	/**
	 * [requireCallback description]
	 * @param  {[type]} dashboardModule [description]
	 * @param  {[type]} appConfig       [description]
	 * @return {[type]}                 [description]
	 */
	var requireCallback = function( dashboardModule, appConfig ) {
		/**
		 * [dashboardCtrl description]
		 * @param  {[type]} $scope [description]
		 * @return {[type]}        [description]
		 */
		var dashboardCtrl = function( $scope, backendService, dashboardDataService ) {

			$scope.OPEN_DASHBOARD = {};

			$scope.init = function( dObject ) {
				var dId = dObject[ "dId" ];
				$scope.OPEN_DASHBOARD[ dId ] = dObject;
			};

			/**
			 * [addWidget description]
			 * @param {[type]} e       [description]
			 * @param {[type]} widName [description]
			 */
			$scope.addWidget = function( e, widName ) {
				
			};

// 			WIDGET SELECTION
			$scope.isSelectedWidget = function( wId ) {

			};

			$scope.handleWidgetSelection = function( e, ctrlKey, wId ) {
				if( ctrlKey ) {
//					Multi-Selection
					if( $scope.isSelectedWidget( wId ) ) {
						$scope.deSelectWidget( wId );
					}
					else {
						$scope.selectWidget( wId );
					}
				}
				else {
//					Single-Selection
					if( $scope.isSelectedWidget( wId ) ) {
						$scope.deSelectAllWidget();
						$scope.selectWidget( wId );
					}
					else {
						$scope.deSelectWidget( wId );
					}
				}
			};

			$scope.selectWidget = function( wId ) {

			};

			$scope.displayWidgetAsSelected = function( wId ) {

			};

			$scope.deSelectWidget = function( wId ) {

			};

			$scope.displayWidgetAsDeselected = function( wId ) {

			};

		};

		dashboardModule.controller( appConfig.modules.designer.dashboard.ctrl, [ 
			appConfig.ngVars.scope,
			appConfig.modules.core.services.backendService,
			// appConfig.modules.designer.dashboard.services.dashboardDataService,

			dashboardCtrl 
		] );

		return dashboardCtrl;
	};

	define( [ "dashboardModule", "appConfig" ], requireCallback );

} )();