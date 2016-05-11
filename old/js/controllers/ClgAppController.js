( function() {
	
	"use strict";
	
	var
	mainControllerFn = function( $scope, DATA_FACTORY, SERVICE_FACTORY ) {
		
		$scope.DATA_FACTORY = DATA_FACTORY;
		$scope.SERVICE_FACTORY = SERVICE_FACTORY;
		$scope.DATA_FACTORY.FILE_MANAGER = {};
		
		$scope.openView = function( vName ) {
			switch( vName ) {
			case "FILE_MANAGER":
				$scope.clgView = "FILE_MANAGER";
				break;
			case "DESIGNER":
				$scope.clgView = "DESIGNER";
				break;
			default:
				
			}
		};
		
		$scope.postInclude = function( page ) {
			switch( page ) {
			case "FILE_MANAGER": 
				$scope.initFileManager();
				break;
			default:
				
			}
			return;
			var reqData = {
				    "fileRequest": {
				        "file": {
				            "id": 1
				        }
				    }
				};
			
			var treeData = [ 
					{
						"id": "MyDocuments",
						"text": "My Documents",
						"parent": "#"
					},
					{
						"id": "PublicDocuments",
						"text": "Public Documents",
						"parent": "#"
					},
					{
						"id": "Hollywood",
						"text": "Hollywood",
						"parent": "MyDocuments"
					},
					{
						"id": "Bollywood",
						"text": "Bollywood",
						"parent": "MyDocuments"
					},
					{
						"id": "Softwares",
						"text": "Softwares",
						"parent": "MyDocuments"
					},
					{
						"id": "Resumes",
						"text": "Resumes",
						"parent": "PublicDocuments"
					},
					{
						"id": "StudyMaterials",
						"text": "Study Materials",
						"parent": "PublicDocuments"
					},
					{
						"id": "Others",
						"text": "Others",
						"parent": "PublicDocuments"
					}
			];
				

//			$scope.SERVICE_FACTORY.SERVICE_REQUESTS.JQ.doPost( 
//					CAD.URLs.FILE.GET_FILES_BY_PARENT_ID, JSON.stringify( reqData ), 
//					function( resData ) {
//						console.log( resData.fileResponse.files );
//						var files = resData.fileResponse.files;
//						for( var i = 0; i < files.length; i++ ) {
//							var file = {};
//							file[ "id" ] = files[ i ][ "id" ];
//							file[ "parent" ] = files[ i ][ "parent" ][ "id" ];
//							file[ "text" ] = files[ i ][ "title" ];
//							treeData.push( file );
//						}
//						var treeConfig = {
//								"core": {
//						            "themes": {
//						                "name": "proton",
//						                "responsive": true
//						            },
//						            "data": treeData
//						        },
//						        "plugins": ["wholerow"]
//							};
//							var jsTree = $('#jstree').jstree( treeConfig );
//							jsTree.bind( "changed.jstree", function( e, data ) {
//								alert( data.node.text );
//							} );
//					}
//			);
			
		};
		
		$scope.initFileManager = function() {
			
			$scope.DATA_FACTORY.FILE_MANAGER.ICONS = 
				{
					PATH: {
						FILE_ICON_PATH: "./images/my_document.png",
						FOLDER_ICON_PATH: "./images/Generic.png",
					},
					CLASS: {
						
					}
				};
			
			$scope.treeData = 
				[
					{
						"id": "MyDocuments",
						"text": "My Documents",
						"parent": "#"
					},
					{
						"id": "PublicDocuments",
						"text": "Public Documents",
						"parent": "#"
					},
					{
						"id": "Hollywood",
						"text": "Hollywood",
						"parent": "MyDocuments"
					},
					{
						"id": "Bollywood",
						"text": "Bollywood",
						"parent": "MyDocuments"
					},
					{
						"id": "ekeh",
						"text": "Ek Khiladi Ek Hasina",
						"parent": "Bollywood"
					},
					{
						"id": "love",
						"text": "1942 A Love Story",
						"parent": "Bollywood"
					},
					{
						"id": "lsd",
						"text": "Love Sex N Dhokha",
						"parent": "Bollywood"
					},
					{
						"id": "Softwares",
						"text": "Softwares",
						"parent": "MyDocuments"
					},
					{
						"id": "Resumes",
						"text": "Resumes",
						"parent": "PublicDocuments"
					},
					{
						"id": "StudyMaterials",
						"text": "Study Materials",
						"parent": "PublicDocuments"
					},
					{
						"id": "Others",
						"text": "Others",
						"parent": "PublicDocuments"
					}
				];
			
			var config = {
					handles: "e",
					maxWidth: 500,
					minWidth: 100,
					resize: function( e, ui ) {
						$( ".clg-file-viewer" ).css( "width", "calc( 100% - " + ( ui.element.width() + 3 )  + "px )" );
					}
				};
			
			$( ".clg-file-browser" ).resizable( config );
				
			var treeConfig = {
					"core": {
			            "themes": {
			                "name": "proton",
			                "responsive": true
			            },
			            "data": $scope.treeData
			        },
			        "plugins": ["wholerow"]
				};
			
			$scope.DATA_FACTORY.FILE_MANAGER.TREE = $('#jstree').jstree( treeConfig );
			
			$scope.onSelectFileTreeNode = function( e, data ) {
				var node = data.node, 
					children = node.children, 
					files = [];
				
				for( var i = 0; i < children.length; i++ ) {
					var file = {}, temp = {};
					temp = $scope.DATA_FACTORY.FILE_MANAGER.TREE.jstree( "get_node", children[ i ] );
					file[ "text" ] = temp[ "text" ];
					file[ "id" ] = temp[ "id" ];
					temp.children.length > 0 ? file[ "folder" ] = true: false;
					files.push( file );
				}
				
				$scope.files = files;
				$scope.$apply();
				
			};
			
//			JS-TREE-EVENTS
			$scope.DATA_FACTORY.FILE_MANAGER.TREE.bind( "changed.jstree", $scope.onSelectFileTreeNode );
			
		};
		
		$scope.getChildren = function( e, file ) {
			var files = [], parentId = file.id;
			for( var i = 0; i < $scope.treeData.length; i++ ) {
				if( $scope.treeData[ i ].parent == parentId ) {
					files.push( $scope.treeData[ i ] );
				}
			}
			$scope.files = files;
		};
		
		$scope.getFileOptions = function( e, file ) {
//			e.stopPropagation();
			$scope.opnList = 
				[
				 	{
				 		opnId: "OPEN",
				 		opnName: "Open"
				 	},
				 	{
				 		opnId: "MOVE_TO",
				 		opnName: "Move to"
				 	},
				 	{
				 		opnId: "SHARE_WITH",
				 		opnName: "Share with"
				 	}
				];
		};
				
	};
	
	CAD.MODULE_OBJs.MAIN_MODULE_OBJ.controller(
		CAD.CONTROLLERS.MAIN_CONTROLLER,
		[
		 CAD.ANGULAR_VAR.SCOPE,
		 CAD.FACTORIES.DATA_FACTORY,
		 CAD.FACTORIES.SERVICE_FACTORY,
		 mainControllerFn
		]
		);
	
} )();