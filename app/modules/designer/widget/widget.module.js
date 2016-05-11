( function() { "use strict";
	
	/**
	 * [requireCallback description]
	 * @param  {[type]} ng        [description]
	 * @param  {[type]} appConfig [description]
	 * @return {[type]}           [description]
	 */
	var requireCallback = function( ng, appConfig ) {
		var widgetModule = ng.module( appConfig.modules.designer.widget.name, [] );
		return widgetModule;
	};

	define( [ "angular", "appConfig" ], requireCallback );
	
} )();