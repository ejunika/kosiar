( function() {
	"use strict"
	define( [ "angular", "appConfig" ], function( ng, appConfig ) {
		return ng.module( appConfig.modules.core.mainMenu.name, [] );
	} );
} )();