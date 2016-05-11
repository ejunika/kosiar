( function() { "use strict";

    var requireCallback = function( designerModule, appConfig ) {
        var

        designerDataService = function() {
            this.openDashboardIds = [];
            this.selectedDashboardIds = [];
            this.dashboardMap = {};
            this.activeDashboardId = "";
        };

        return designerModule.service( 
            appConfig.modules.designer.services.designerDataService, 
            designerDataService 
          );
    };

    define( [ "designerModule", "appConfig" ], requireCallback );

} )();