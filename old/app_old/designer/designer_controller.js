/**
 * @author EID201
 */
define(
	[ 
	  "jquery", 
	  "clgConfig", 
	  "angular", 
	  "designerModule"
	],
	function( $, CLG_CONFIG, angular, designerModule ) {
		var 
		designerController = function( $scope, $timeout, BACKEND_SERVICE_FACTORY ) {
			
			$scope.dashboardCount = 0;
			$scope.dashboardList = [];
			$scope.DESIGNER_CURRENT_OBJECT = {
				ACTIVE_DASHBOARD: "",
				SELECTED_DASHBOARD: [],
				ACTIVE_WIDGET: "",
				SELECTED_WIDGET: [],
				ACTIVE_DATA_PROVIDER: "",
				SELECTED_DATA_PROVIDER: []
			};
			$scope.DESIGNER_ARRAY_MAPPER = {
				DASHBOARD_IN_DASHBOARD_LIST: {
					"dashboardId": "index"
				},
				WIDGET_IN_WIDGETS: {
					"widgetId": "index"
				}
			};
			
			/**
			 * @author EID201
			 * */
			$scope.afterAllDashboardLoad = function( d ) {
				$timeout( function() {
					$( "#TAB_" + d[ "Layout" ][ "id" ] ).click();
				}, 0 );
			};
			
			/**
			 * @function
			 * @description
			 * @author EID201
			 * */
			$scope.notifyAll = function( nType, obj ) {
				switch( nType ) {
					case "ADD_DASHBOARD": 
						$scope.dashboardList.push( obj );
						$scope.DESIGNER_CURRENT_OBJECT[ "ACTIVE_DASHBOARD" ] = obj[ "Layout" ][ "id" ];
						$scope.DESIGNER_CURRENT_OBJECT[ "SELECTED_DASHBOARD" ].push( obj[ "Layout" ][ "id" ] );
						break;
					default:
						break;
				}
			};
			
			$scope.createWidgetContainer = function( widget ) {
				var amDbId = "MAIN_" + $scope.DESIGNER_CURRENT_OBJECT[ "ACTIVE_DASHBOARD" ];
				var containerId = "w_container";
				var $container = $( "<div id='w_container'></div>" );
				$container.css( {
					height: widget[ "Properties" ][ "General" ][ "height" ] + "px",
					width: widget[ "Properties" ][ "General" ][ "width" ] + "px",
					position: "absolute",
					left: widget[ "Properties" ][ "General" ][ "xCo" ] + "px",
					top: widget[ "Properties" ][ "General" ][ "yCo" ] + "px",
					border: "2px solid transparent"
				} )
				.draggable({
					containment: ".d-dashboard"
				});
				$( "#" + amDbId ).append( $container );
				return containerId;
			};
			
			$scope.addWidget = function( e, widName ) {
				
				var DATA_URL = "app/designer/widget/column_chart.json",
				sCallbackFn = function( widget ) {
					$scope.chart = new CanvasJS.Chart( $scope.createWidgetContainer( widget ), {
						title:{
							text: widget[ "Properties" ][ "Title" ][ "title" ]            
						},
						data: widget[ "Data" ]
					});
					$scope.chart.render();
				};
				
				BACKEND_SERVICE_FACTORY.getJson(
						DATA_URL,
						sCallbackFn
					);
				
			};
			
			$scope.getDashboardStyle = function( d ) {
				return {
	            	'background':'linear-gradient('+ d.Layout.gredientRotation +'deg,'+d.Layout.gredientColor +')',
	            	'height':d.Layout.height+'px',
	            	'width':d.Layout.width+'px'
            	};
			};
			
			/**
			 * @author EID201
			 * */
			$scope.addDashboard = function( e ) {
				var
				DATA_URL = "app/designer/dashboard/dashboard.json",
				sCallbackFn = function( dashboard ) {
					dashboard[ "Layout" ][ "height" ] = "2200";
					dashboard[ "Layout" ][ "width" ] = "2200";
					dashboard[ "Layout" ][ "title" ] = "Untitled_" + ++$scope.dashboardCount;
					dashboard[ "Layout" ][ "id" ] = "DB_" + $scope.dashboardCount;
					dashboard[ "Layout" ][ "gredientColor" ] = "#ecf0f1";
					dashboard[ "Layout" ][ "gredientRotation" ] = "90";
					$scope.notifyAll( "ADD_DASHBOARD", dashboard );
				};
				if( $scope.dashboardList.length < 4 ) {
					BACKEND_SERVICE_FACTORY.getJson(
						DATA_URL,
						sCallbackFn
					);
				}
				else {
					
				}
			};
			
			/**
			 * @author EID201
			 * */
			$scope.hideRightPane = function( e ) {
				$( ".d-right-pane" ).addClass( "d-right-pane-hide" );
				$( ".d-dashboard-wrapper" ).addClass( "d-dashboard-wrapper-full" );
			};
			
			/**
			 * @author EID201
			 * */
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
			
		};
		
		designerModule.controller( 
				CLG_CONFIG.MODULES.DESIGNER.CONTROLLER, 
				[
				 	"$scope",
				 	"$timeout",
				 	CLG_CONFIG.MODULES.CORE.FACTORIES.BACKEND_SERVICE_FACTORY,
				 	designerController
				]
			);
		
		return designerController;
	}
);