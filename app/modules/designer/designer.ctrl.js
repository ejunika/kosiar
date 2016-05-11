( function() { "use strict";

	/**
	 * [requireCallback description]
	 * @param  {[type]} designerModule [description]
	 * @param  {[type]} appConfig      [description]
	 * @param  {[type]} canvasJs       [description]
	 * @return {[type]}                [description]
	 */
	var requireCallback = function( designerModule, appConfig, canvasJs ) {
		
		var

		/**
		 * [designerCtrl description]
		 * @param  {[type]} $scope         [description]
		 * @param  {[type]} $timeout       [description]
		 * @param  {[type]} backendService [description]
		 * @return {[type]}                [description]
		 */
		designerCtrl = function( $scope, $timeout, backendService, designerDataService ) {

			/**
			 * [init description]
			 * @return {[type]} [description]
			 */
			$scope.init = function() {
				$scope.MAX_DASHBOARD_CAPACITY = 4;
				$scope.openDashboardIds = designerDataService.openDashboardIds;
	            $scope.selectedDashboardIds = designerDataService.selectedDashboardIds;
	            $scope.dashboardMap = designerDataService.dashboardMap;
	            $scope.activeDashboardId = designerDataService.activeDashboardId;
			};

			$scope.notifyAll = function( nType, nObj ) {
				if( nType ) {
					switch( nType ) {
						case "ADD_DASHBOARD": 
							$scope.addToOpenDashboardIds( nObj );
							$scope.addToSelectedDashboardIds( nObj );
							$scope.addToDashboardMap( nObj );
							$scope.setActiveDashboard( nObj );
							break;
						default:
							break;
					}
				}
			};

			$scope.isSelectedDashboard = function( dId ) {
				var sd = designerDataService.selectedDashboardIds;
				try {
					if( dId ) {
						for( var i = 0; i < sd.length; i++ ) {
							if( dId == sd[ i ] ) {
								return true;
							}
						}
						return false;
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {

				}
			}

			$scope.isDashboardAlreadyExists = function( dId ) {
				var odi = designerDataService.openDashboardIds;
				try {
					if( dId ) {
						for( var i = 0; i < odi.length; i++ ) {
							if( dId == odi[ i ] ) {
								return true;
							}
						}
						return false;
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {

				}
			};

			$scope.addToOpenDashboardIds = function( dObj ) {
				var dId;
				try {
					dId = dObj.Layout.id;
					if( !$scope.isDashboardAlreadyExists( dId ) ) {
						designerDataService.openDashboardIds.push( dId )
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {
					
				}
			};
			
			$scope.addToSelectedDashboardIds = function( dObj ) {
				var dId;
				try {
					dId = dObj.Layout.id;
					if( !$scope.isSelectedDashboard( dId ) ) {
						designerDataService.selectedDashboardIds.push( dId );
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {

				}
			};

			$scope.addToDashboardMap = function( dObj ) {
				var dm, dId;
				try {
					dm = designerDataService.dashboardMap;
					if( dObj ) {
						dId = dObj.Layout.id;
						if( !dm.hasOwnProperty( dId ) ) {
							dm[ dId ] = dObj;
						}
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {

				}
			};

			$scope.setActiveDashboard = function( dObj ) {
				var dId;
				try {
					if( dObj ) {
						dId = dObj.Layout.id;
						designerDataService.activeDashboardId = dId;
					}
				}
				catch( error ) {
					console.error( error );
				}
				finally {

				}
			};

			
			/**
			 * [afterAllDashboardLoad description]
			 * @param  {[type]} d [description]
			 * @return {[type]}   [description]
			 */
			$scope.afterAllDashboardLoad = function( dId ) {
				$timeout( function() {
					$( "#TAB_" + dId ).click();
				}, 0 );
			};
			
			
			/**
			 * [getDashboardStyle description]
			 * @param  {[type]} d [description]
			 * @return {[type]}   [description]
			 */
			$scope.getDashboardStyle = function( d ) {
				return {
	            	// 'background': 'linear-gradient('+ d.Layout.gredientRotation +'deg,'+d.Layout.gredientColor +')',
	            	'background': "#ecf0f1",
	            	// 'height': d.Layout.height+'px',
	            	// 'width': d.Layout.width+'px',
	            	'height': 'calc( 100% - 3px )',
	            	'width': 'calc( 100% - 3px )',
	            	'border': '2px solid #E0E0E0'
            	};
			};

			$scope.getOpenDashboardCount = function() {
				return designerDataService.openDashboardIds.length;
			};
			
			/**
			 * [addDashboard description]
			 * @param {[type]} e [description]
			 */
			$scope.addDashboard = function( e ) {
				var
				reqUrl = "./app/modules/designer/dashboard/dashboard.data.json",
				dCount = $scope.getOpenDashboardCount(),
				sCallback = function( dObj ) {
					dObj[ "Layout" ][ "height" ] = "2200";
					dObj[ "Layout" ][ "width" ] = "2200";
					dObj[ "Layout" ][ "title" ] = "Untitled_" + ++dCount;
					dObj[ "Layout" ][ "id" ] = "DB_" + dCount;
					dObj[ "Layout" ][ "gredientColor" ] = "#000000";
					dObj[ "Layout" ][ "gredientRotation" ] = "90";
					$scope.notifyAll( "ADD_DASHBOARD", dObj );
				};
					
				if( dCount < $scope.MAX_DASHBOARD_CAPACITY ) {
					backendService.getJson( reqUrl, sCallback );
				}
				else {
					
				}
			};
			
			/**
			 * [hideRightPane description]
			 * @param  {[type]} e [description]
			 * @return {[type]}   [description]
			 */
			$scope.hideRightPane = function( e ) {
				$( ".d-right-pane" ).addClass( "d-right-pane-hide" );
				$( ".d-dashboard-wrapper" ).addClass( "d-dashboard-wrapper-full" );
			};
			
			/**
			 * [toggleRightPane description]
			 * @param  {[type]} e [description]
			 * @return {[type]}   [description]
			 */
			$scope.toggleRightPane = function( e ) {
				var 
				$rightPane = $( ".d-right-pane" ),
				$dashboardWrapper = $( ".d-dashboard-wrapper" );
				
				if( $rightPane.hasClass( "d-right-pane-hide" ) ) {
					$rightPane.removeClass( "d-right-pane-hide" );
					$dashboardWrapper.removeClass( "d-dashboard-wrapper-full" );
				}
				else {
					$rightPane.addClass( "d-right-pane-hide" );
					$dashboardWrapper.addClass( "d-dashboard-wrapper-full" );
				}
				
			};

			$scope.widgetDragConfig = {
				helper: "clone",
				appendTo: "body",
				create: function( e, ui ) {

				},
				drag: function( e, ui ) {

				},
				start: function( e, ui ) {

				},
				stop: function( e, ui ) {
					
				}
			};

		};

		return designerModule.controller( appConfig.modules.designer.ctrl, [
				appConfig.ngVars.scope,
				appConfig.ngVars.timeout,
				appConfig.modules.core.services.backendService,
				appConfig.modules.designer.services.designerDataService,
				designerCtrl
			] );
	};

	define( 
		[ 
			"designerModule", 
			"appConfig", 
			"designerDataService", 
			"canvasJs" 
		], 
		requireCallback 
	);

} )();