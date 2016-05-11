/**
 * 
 */
define([ "jquery", "clgConfig", "angular", "coreModule" ], function($,
		CLG_CONFIG, angular, coreModule) {
	var coreController = function($scope, DATA_SERVICE, FILE_SERVICE,
			BACKEND_SERVICE_FACTORY, UTIL_SERVICE_FACTORY) {

		$scope.DATA_SERVICE = DATA_SERVICE;
		$scope.FILE_SERVICE = FILE_SERVICE;
		$scope.BACKEND_SERVICE_FACTORY = BACKEND_SERVICE_FACTORY;
		$scope.DATA_SERVICE.FILE_MANAGER = {
			treeData: []
		};
		
		$scope.contextMenuList = [
		    {
		    	id: "doThis",
		    	displayName: "Do This",
		    },
		    {
		    	id: "doThat",
		    	displayName: "Do That"
		    }
        ];
		
		/**
		 * 
		 * */
		$scope.getUserInfo = function( token, sCallbackFn ) {
			var 
			REQ_URL = "http://115.119.114.10:8181/cxf/auth/getUserInfoByToken",
			REQ_DATA = {
				token: token
			},
			eCallbackFn = function( resData ) {
				
			};
			BACKEND_SERVICE_FACTORY.doPostRequest( 
					REQ_URL, 
					REQ_DATA, 
					sCallbackFn, 
					eCallbackFn 
				);
		};
		
		$scope.renameFile = function( e, file ) {
			$(e.target).parent().find( "input" ).show().select().on( "blur", function( e ) {
				$( this ).hide();
			} );
		};
		
		/**
		 * 
		 * */
		$scope.doLogin = function( userName, password, authType ) {
			var 
			getSpaces = function( userName, sCallbackFn, eCallbackFn ) {
				var 
				REQ_URL = "http://115.119.114.10:8181/cxf/auth/getcustomerkeys",
				REQ_DATA = {
					userid: userName
				};
				BACKEND_SERVICE_FACTORY.doPostRequest( 
						REQ_URL, 
						REQ_DATA, 
						sCallbackFn, 
						eCallbackFn 
					);
			},
			afterGettingSpaces = function( resData ) {
				var allSpaces = resData[ "space" ];
				var spaceInUse = UTIL_SERVICE_FACTORY.searchObjInArray( allSpaces, "spaceId", 1 );
				sCallbackFn = function( srData ) {
					var 
					afterGettingUserInfo = function( userInfoData ) {
						var rootFolders = userInfoData.users.trees || [];
						DATA_SERVICE.FILE_MANAGER.treeData = [];
						for( var i = 0; i < rootFolders.length; i++ ) {
							var dirNode = {
								text: rootFolders[ i ][ "title" ],
								id: rootFolders[ i ][ "id" ],
								children: true,
								data: {
									folder: true
								},
								parent: "#"
							};
							DATA_SERVICE.FILE_MANAGER.treeData.push( dirNode );
						}
					};
					sessionStorage[ "login" ] = JSON.stringify( srData );
					$scope.getUserInfo( srData.users.authToken, afterGettingUserInfo );
				},
				eCallbackFn = function( erData ) {
					
				};
				authenticateUser( userName, password, spaceInUse[0][ "customerKey" ], authType, sCallbackFn, eCallbackFn );
			}, 
			authenticateUser = function( userName, password, customerKey, authType, sCallbackFn, eCallbackFn ) {
				var 
				REQ_URL = "http://115.119.114.10:8181/cxf/auth/authenticateuser",
				REQ_DATA = {
					userid: userName,
					password: password,
					customerkey: customerKey,
					authType: authType
				};
				BACKEND_SERVICE_FACTORY.doPostRequest( 
						REQ_URL, 
						REQ_DATA, 
						sCallbackFn, 
						eCallbackFn 
					);
			};
			getSpaces( userName, afterGettingSpaces );
		};
		
		$scope.loadDirectries = function() {
			var 
			REQ_URL = "http://localhost:8181/cxf/file/getRootFolders";
			REQ_DATA = {
				fileRequest: {
					file: {
						id: "0"
					}
				}
			},
			sCallbackFn = function( resData ) {
				var files = null;
				if( resData[ "fileResponse" ][ "status" ] ) {
					files = resData[ "fileResponse" ][ "files" ];
					if( files ) {
						if( !Array.isArray( files ) ) {
							files = [ files ];
						}
						DATA_SERVICE.FILE_MANAGER.treeData = [];
						for( var i = 0; i < files.length; i++ ) {
							var dirNode = {
								text: files[ i ][ "title" ],
								id: files[ i ][ "id" ],
								children: true,
								data: {
									folder: true
								},
								parent: "#"
							};
							DATA_SERVICE.FILE_MANAGER.treeData.push( dirNode );
						}
					}
				}
			},
			eCallbackFn = function(  ) {
				
			};
			BACKEND_SERVICE_FACTORY.doPostRequest( 
					REQ_URL, 
					REQ_DATA, 
					sCallbackFn, 
					eCallbackFn 
				);
		};
		
		$scope.createDirectry = function() {
			var 
			REQ_URL = "http://localhost:8181/cxf/file/createFile";
			REQ_DATA = {
				fileRequest: {
					file: {
						title: "New Folder",
						type: 1,
						status: 1,
						discription: "Test file",
						creationDate: new Date().getTime(),
						lastModified: new Date().getTime()
					}
				}
			},
			sCallbackFn = function( resData ) {
				resData;
			},
			eCallbackFn = function(  ) {
				
			};
			BACKEND_SERVICE_FACTORY.doPostRequest( 
					REQ_URL, 
					REQ_DATA, 
					sCallbackFn, 
					eCallbackFn 
				);
		};
		
		$scope.initServerInfo = function( serverInfo ) {
//			$scope.SERVER_INFO = {
//				URL: serverInfo[ "SERVER_INFO" ][ "IP_ADDRESS" ] + ":" + 
//			};
		};
		
		/**
		 * 
		 * */
		$scope.onInitCoreModule = function() {
			var 
			DATA_URL = "app/core/backend_service.json", 
			sCallbackFn = function( serverInfo ) {
				$scope.initServerInfo( serverInfo );
				
//				LOGIN PROCESS
//				$scope.doLogin( "vimal.m@bdisys.com", "admin", "ep" );
				$scope.loadDirectries();
//				$scope.createDirectry();
			};
			
			BACKEND_SERVICE_FACTORY.getJson(
					DATA_URL,
					sCallbackFn
				);
		};

		/**
		 * 
		 * */
		$scope.openView = function(vName) {
			switch (vName) {
			case "FILE_MANAGER":
				$scope.clgView = "FILE_MANAGER";
				break;
			case "DESIGNER":
				$scope.clgView = "DESIGNER";
				break;
			default:
				break;
			}
		};

		/**
		 * 
		 * */
		$scope.postInclude = function(page) {
			
			switch (page) {
				case "FILE_MANAGER":
					FILE_SERVICE.initFileManager();
					break;
				default:
					break;
			}
		
		};

		/**
		 * 
		 * */
		$scope.getFileOptions = function(e, file) {
			// e.stopPropagation();
			$scope.opnList = [ {
				opnId : "OPEN",
				opnName : "Open"
			}, {
				opnId : "MOVE_TO",
				opnName : "Move to"
			}, {
				opnId : "SHARE_WITH",
				opnName : "Share with"
			} ];
		};

	};
	
	coreModule.controller(CLG_CONFIG.MODULES.CORE.CONTROLLER, [
			CLG_CONFIG.ANGULAR_VARS.SCOPE,
			CLG_CONFIG.MODULES.CORE.SERVICES.DATA_SERVICE,
			CLG_CONFIG.MODULES.FILE_MANAGER.SERVICES.FILE_SERVICE,
			CLG_CONFIG.MODULES.CORE.FACTORIES.BACKEND_SERVICE_FACTORY,
			CLG_CONFIG.MODULES.CORE.FACTORIES.UTIL_SERVICE_FACTORY,
			coreController ]);
	return coreController;
});