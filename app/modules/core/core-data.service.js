( function() {
    "use strict";
    define( [ "coreModule", "appConfig" ], function( coreModule, appConfig ) {
        var
        coreDataService = function() {
            this.showAdminOptions = false;
        };

        return coreModule.service( 
            appConfig.modules.core.services.coreDataService, 
            coreDataService 
          );
    } );
} )();