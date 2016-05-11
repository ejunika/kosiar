( function() { "use strict";

    var requireCallback = function( dashboardModule, appConfig ) {
        var

        dashboardDataService = function() {
            var

            DATA = {
                listOfAddedWidgetIds: [],
                selectedWidgetIds: [],
                activeWidgetId: ""
                widgetMap: {}
            },

            SERVICES = {
                getListOfAddedWidget: function() {

                },
                getSelectedWidgetId: function() {

                },
                getSelectedWidgetObject: function() {

                },
                getWidgetObjectById: function( wId ) {

                }
            };

            this.DATA = DATA;
        };

        return dashboardModule.service( 
            appConfig.modules.designer.dashboard.services.dashboardDataService, 
            dashboardDataService 
          );
    };

    define( [ "dashboardModule", "appConfig" ], requireCallback );

} )();