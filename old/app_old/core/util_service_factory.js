/**
 * 
 */
define([ "jquery", "clgConfig", "angular", "coreModule" ], function($,
		CLG_CONFIG, angular, coreModule) {
	var utilServiceFactory = function($http, BACKEND_SERVICE_FACTORY) {
		var factory = {};
		factory.searchObjInArray = function(tArray, k, v) {
			var result = $.grep(tArray, function(obj) {
				return obj[k] == v;
			});
			return result;
		};
		return factory;
	};
	coreModule.factory(CLG_CONFIG.MODULES.CORE.FACTORIES.UTIL_SERVICE_FACTORY,
			[ "$http", utilServiceFactory ]);
	return utilServiceFactory;
});