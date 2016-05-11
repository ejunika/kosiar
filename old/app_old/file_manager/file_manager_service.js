/**
 * 
 */
define([ "jquery", "clgConfig", "fileManagerModule" ], function($, CLG_CONFIG, fileManagerModule) {
	var fileManagerService = function( $rootScope, DATA_SERVICE, BACKEND_SERVICE_FACTORY, CXT_MENU_SERVICE ) {
		
		this.serviceInfo = {
		    name: "FileManagerService"
		};
		
		this.selectedNode = {};
		
		/**
		 * 
		 * */
		this.onDropdownMenuClick = function( opn ) {
			this.getChildren();
		};
		
		/**
		 * 
		 * */
		this.onSelectFileTreeNode = function(e, data) {
			var node = data.node, children = node.children, files = [];
			for (var i = 0; i < children.length; i++) {
				var file = {}, temp = {};
				temp = DATA_SERVICE.FILE_MANAGER.TREE.jstree( "get_node", children[i] );
				file["text"] = temp["text"];
				file["id"] = temp["id"];
				file["folder"] = !temp[ "data" ][ "folder" ];
				files.push(file);
			}
			DATA_SERVICE.FILE_MANAGER.files = files;
			$rootScope.$apply();
		};
		
		this.createFile = function( fileName, parent ) {
			console.log( "fileName" );
		};
		
		/**
		 * 
		 * */
		this.getChildren = function(e, file) {
			var files = [], parentId = file.id;
			for (var i = 0; i < DATA_SERVICE.FILE_MANAGER.treeData.length; i++) {
				if (DATA_SERVICE.FILE_MANAGER.treeData[i].parent == parentId) {
					files.push(DATA_SERVICE.FILE_MANAGER.treeData[i]);
				}
			}
			DATA_SERVICE.FILE_MANAGER.files = files;
		};
		
		/**
		 * 
		 * */
		this.initFileManager = function() {
			
//			var 
//			REQ_URL = "http://115.119.114.10:8181/cxf/designer/getAllWorkspaceAndDashboard",
//			REQ_DATA = {
//					token: "62e1e8b32d373fe5ea077b162ba2fb531111",
//					spacekey: "1111"
//			},
//			sCallbackFn = function( resData ) {
//				DATA_SERVICE.FILE_MANAGER.treeData = processData( resData );
//			},
//			eCallbackFn = function( resData ) {
//				
//			},
//			processData = function( rawData ) {
//				resultData = null;
//				return resultData;
//			};
//			BACKEND_SERVICE_FACTORY.doPostRequest( 
//					REQ_URL, 
//					REQ_DATA, 
//					sCallbackFn, 
//					eCallbackFn 
//				);
			
			DATA_SERVICE.FILE_MANAGER.ICONS = {
					PATH : {
						FILE_ICON_PATH : "./images/my_document.png",
						FOLDER_ICON_PATH : "./images/Generic.png",
					},
					CLASS : {
						
					}
			};
			
//			DATA_SERVICE.FILE_MANAGER.treeData = [ {
//				"id" : "MyDocuments",
//				"text" : "My Documents",
//				"parent" : "#"
//			}, {
//				"id" : "PublicDocuments",
//				"text" : "Public Documents",
//				"parent" : "#"
//			}, {
//				"id" : "Hollywood",
//				"text" : "Hollywood",
//				"parent" : "MyDocuments"
//			}, {
//				"id" : "Bollywood",
//				"text" : "Bollywood",
//				"parent" : "MyDocuments"
//			}, {
//				"id" : "ekeh",
//				"text" : "Ek Khiladi Ek Hasina",
//				"parent" : "Bollywood"
//			}, {
//				"id" : "love",
//				"text" : "1942 A Love Story",
//				"parent" : "Bollywood"
//			}, {
//				"id" : "lsd",
//				"text" : "Love Sex N Dhokha",
//				"parent" : "Bollywood"
//			}, {
//				"id" : "Softwares",
//				"text" : "Softwares",
//				"parent" : "MyDocuments"
//			}, {
//				"id" : "Resumes",
//				"text" : "Resumes",
//				"parent" : "PublicDocuments"
//			}, {
//				"id" : "StudyMaterials",
//				"text" : "Study Materials",
//				"parent" : "PublicDocuments"
//			}, {
//				"id" : "Others",
//				"text" : "Others",
//				"parent" : "PublicDocuments"
//			} ];

			var config = {
				handles : "e",
				maxWidth : 500,
				minWidth : 100,
				resize : function(e, ui) {
					$(".clg-file-viewer").css( "width", "calc( 100% - " + (ui.element.width() + 3) + "px )");
				}
			};

			$( ".clg-file-browser" ).resizable( config );

//			var treeConfig = {
//				"core" : {
//					"themes" : {
//						"name" : "proton",
//						"responsive" : true
//					},
//					"data" : DATA_SERVICE.FILE_MANAGER.treeData
//				},
//				"plugins" : [ "wholerow" ]
//			};
			
			var treeConfig = {
					"core" : {
						"themes" : {
							"name" : "proton",
							"responsive" : true
						},
						"data": function( node, cb ) {
							if( node.id === "#" ) {
								cb.call( this, DATA_SERVICE.FILE_MANAGER.treeData );
							}
							else {
								var 
								REQ_URL = "http://localhost:8181/cxf/file/getFilesByParent",
								REQ_DATA = {
									fileRequest: {
										file: {
										    id: node.id
										}
									}
								},
								sCallbackFn = function( resData ) {
									var 
									files = null,
									treeData = [],
									newNode = null;
									if( resData[ "fileResponse" ][ "status" ] ) {
										files = resData[ "fileResponse" ][ "files" ];
										if( files ) {
											if( !Array.isArray( files ) ) {
												files = [ files ];
											}
											DATA_SERVICE.FILE_MANAGER.treeData = [];
											for( var i = 0; i < files.length; i++ ) {
												newNode = {};
												newNode[ "text" ] = files[ i ][ "title" ];
												newNode[ "id" ] = files[ i ][ "id" ];
												newNode[ "parent" ] = files[ i ][ "parent" ][ "id" ];
//												newNode[ "icon" ] = files[ i ][ "type" ] != "folder" ? "glyphicon glyphicon-file" : "";
//												newNode[ "children" ] = nodes[ i ][ "type" ] != "folder" ? false : true;
//												newNode[ "data" ] = { folder: nodes[ i ][ "type" ] != "folder" ? false : true };
												treeData.push( newNode );
											}
										}
									}
									
									
									
									
									
									
									
//									var 
//									nodes = resData.trees.treesList, 
//									treeData = [],
//									newNode = null;
//									for( var i = 0; i < nodes.length; i++ ) {
//										newNode = {};
//										newNode[ "text" ] = nodes[ i ][ "title" ];
//										newNode[ "id" ] = nodes[ i ][ "id" ];
//										newNode[ "parent" ] = nodes[ i ][ "parentId" ][ "id" ];
//										newNode[ "icon" ] = nodes[ i ][ "type" ] != "folder" ? "glyphicon glyphicon-file" : "";
//										newNode[ "children" ] = nodes[ i ][ "type" ] != "folder" ? false : true;
//										newNode[ "data" ] = { folder: nodes[ i ][ "type" ] != "folder" ? false : true };
//										treeData.push( newNode );
//									}
									cb.call( this, treeData );
								},
								eCallbackFn = function( resData ) {
									
								};
								BACKEND_SERVICE_FACTORY.doPostRequest( 
										REQ_URL, 
										REQ_DATA, 
										sCallbackFn, 
										eCallbackFn 
									);
							}
						},
						"check_callback": true
					},
					"plugins" : [ "wholerow" ]
				};

//			JS-TREE-INITITIALIZATION
			DATA_SERVICE.FILE_MANAGER.TREE = $('#jstree').jstree(treeConfig);
			DATA_SERVICE.FILE_MANAGER.TREE.bind("changed.jstree", this.onSelectFileTreeNode);
			
//			CONTEXT-MENU INITIALIZATION
			CXT_MENU_SERVICE.initContextMenu();
		};
	};
	
	fileManagerModule.service(
			CLG_CONFIG.MODULES.FILE_MANAGER.SERVICES.FILE_SERVICE,
			[ 
			  "$rootScope", 
			  CLG_CONFIG.MODULES.CORE.SERVICES.DATA_SERVICE, 
			  CLG_CONFIG.MODULES.CORE.FACTORIES.BACKEND_SERVICE_FACTORY,
			  CLG_CONFIG.MODULES.CORE.SERVICES.CONTEXT_MENU_SERVICE, 
			  fileManagerService 
			]
		);
	
	return fileManagerService;
});