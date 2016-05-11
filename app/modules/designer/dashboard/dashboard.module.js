( function() { "use strict";
	
	/**
	 * [requireCallback description]
	 * @param  {[type]} ng        [description]
	 * @param  {[type]} appConfig [description]
	 * @return {[type]}           [description]
	 */
	var requireCallback = function( ng, appConfig ) {
		var dashboardModule = ng.module( appConfig.modules.designer.dashboard.name, [] );
		return dashboardModule;
	};

	define( [ "angular", "appConfig" ], requireCallback );
	
} )();