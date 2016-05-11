/**
 * 
 */
define([ "jquery", "clgConfig", "coreModule" ], function($, CLG_CONFIG, coreModule) {
	var dataService = function() {
		this.DATA = {};
	};
	coreModule.service(CLG_CONFIG.MODULES.CORE.SERVICES.DATA_SERVICE,
			[ dataService ]);
	return dataService;
});