( function() {
	
	"use strict";
	
	var
	mainMenuControllerFn = function( $scope ) {
		
		$scope.DATA_FACTORY.ADMINISTRATION = {};
		$scope.DATA_FACTORY.ADMINISTRATION.showAdminOptions = false;
		
		
		$scope.mainMenus = [
		    {
		    	id: "admin",
		    	name: "Administrator",
		    	icon: "glyphicon glyphicon-king",
		    	action: "openAdminOptions"
		    }, 
		    {
		    	id: "library",
		    	name: "Library",
		    	icon: "glyphicon glyphicon-list-alt",
		    	action: "openLibraryOptions"
		    }, 
		    {
		    	id: "accounts",
		    	name: "Accounts",
		    	icon: "glyphicon glyphicon-usd",
		    	action: "openAccountsOptions"
		    },
		    {
		    	id: "friends",
		    	name: "Friends",
		    	icon: "glyphicon glyphicon-heart",
		    	action: "openFriendsOptions"
		    },
		    {
		    	id: "market",
		    	name: "Market",
		    	icon: "glyphicon glyphicon-shopping-cart",
		    	action: "openMarketOptions"
		    },
		    {
		    	id: "travel",
		    	name: "Travel",
		    	icon: "glyphicon glyphicon-plane",
		    	action: "openTravelOptions"
		    }
		];
		
		$scope.executeAction = function( e, menu ) {
			
			var menuId = menu.id;
			switch( menuId ) {
			case "admin": 
				$scope.DATA_FACTORY.ADMINISTRATION.showAdminOptions = true;
				$scope.clgView = "";
				break;
			default: 
				
			}
			
			
			
//			$scope.DATA_FACTORY.BREADCRUMB.displayList.push( {
//				id: "admin",
//				name: "Administrator",
//				isActive: "false",
//				action: "showAdminOption"
//			} );
//			$scope.SERVICE_FACTORY.HELPERS.generateUniqueId();
//				
//				
				
		};
		
	};
	
	CAD.MODULE_OBJs.MAIN_MENU_MODULE_OBJ.controller(
		CAD.CONTROLLERS.MAIN_MENU_CONTROLLER,
		[
		 CAD.ANGULAR_VAR.SCOPE,
		 mainMenuControllerFn
		]
		);
	
} )();