( function() { "use strict"
	var requireCallback = function( ng, appConfig ) {
	
		var designerModule = ng.module( appConfig.modules.designer.name, 
				[
					appConfig.modules.designer.dashboard.name,
					appConfig.modules.designer.widget.name
				]
			);

		return designerModule;
	
	};

	define( 
		[ 
			"angular", 
			"appConfig",
			"dashboardCtrl", 
			"dashboardDir",
			"widgetCtrl",
			"widgetDir"
		], 
		requireCallback 
	);

} )();