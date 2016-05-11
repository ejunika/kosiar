/**
 * 
 */
define(
		[ 
		  "jquery", 
		  "clgConfig", 
		  "coreModule" 
		], 
		function( $, CLG_CONFIG, coreModule ) {
			
			var contextMenuService = function( $rootScope ) {
				
				this.serviceInfo = {
					name: "ContextMenuService"
				};
				
				this.getCxtMenuForFileById = function( fileId ) {
					
				};
				
				this.beforeShowingContextMenu = function( e, ctx ) {
					var cxtMenuFor = $( e.target ).closest( "div" ).attr( "id" );
					
					switch( cxtMenuFor ) {
						case "jstree":
							var nodeId = $( e.target ).parent().attr( "id" );
							var node = $( e.target ).jstree( "get_node", nodeId );
							$rootScope.contextMenuList = [
	      					    {
	      					    	id: "OPEN",
	      					    	displayName: "Open"
	      					    },
	      					    {
	      					    	id: "MOVE",
	      					    	displayName: "Move"
	      					    }
	      					];
							break;
						default:
							break;
					}
					
					$rootScope.$apply();
				};
				
				this.handleContextMenuSelection = function( ctx, e ) {
					var optionId = e.target.id;
					switch( optionId ) {
						case "abc":
							alert( "Abc" );
							break;
						case "def":
							alert( "Def" );
							break;
						case "ghi":
							alert( "Ghi" );
							break;
						case "jkl":
							alert( "Jkl" );
							break;
						default:
							break;
					}
				};
				
				this.initContextMenu = function() {
					$( "#context" ).contextmenu({
						before: this.beforeShowingContextMenu,
						onItem: this.handleContextMenuSelection
					});
					
					$( "#jstree" ).contextmenu({
						before: this.beforeShowingContextMenu,
						onItem: this.handleContextMenuSelection
					});
				};
				
			};
			
			coreModule.service(
					CLG_CONFIG.MODULES.CORE.SERVICES.CONTEXT_MENU_SERVICE,
					[ 
					  "$rootScope",
					  contextMenuService 
					]
				);
			return contextMenuService;
		}
	);