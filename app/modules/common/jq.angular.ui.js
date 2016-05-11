( function() { "use strict"; 
    /**
     * [requireCallback description]
     * @param  {[type]} angular [description]
     * @param  {[type]} $       [description]
     * @param  {[type]} $ui     [description]
     * @return {[type]}         [description]
     */
    var requireCallback = function( angular, $ ) {
        var
        
        /**
         * [jqDraggable description]
         * @return {[type]} [description]
         */
        jqDraggable = function() {
            var
            linkFn = function( $scope, el, attrs ) {
                $( el ).draggable( $scope.dragConfig );
            };
            return {
                restrict: "A",
                scope: {
                    dragConfig: "="
                },
                link: linkFn
            }
        },
        
        /**
         * [jqDroppable description]
         * @return {[type]} [description]
         */
        jqDroppable = function() {
            var
            linkFn = function( $scope, el, attrs ) {
                $( el ).droppable( $scope.dropConfig );
            };
            return {
                restrict: "A",
                scope: {
                    model: "="
                },
                link: linkFn
            }
        },
        
        /**
         * [jqResizable description]
         * @return {[type]} [description]
         */
        jqResizable = function() {
            var
            linkFn = function( $scope, el, attrs ) {
                $( el ).resizable( $scope.resizeConfig );
            };
            return {
                restrict: "A",
                scope: {
                    resizeConfig: "="
                },
                link: linkFn
            }
        },
        
        /**
         * [jqSelectable description]
         * @return {[type]} [description]
         */
        jqSelectable = function() {
            var
            linkFn = function( $scope, el, attrs ) {
                $( el ).selectable( $scope.selectConfig );
            };
            return {
                restrict: "A",
                scope: {
                    model: "="
                },
                link: linkFn
            }
        },
        
        /**
         * [jqSortable description]
         * @return {[type]} [description]
         */
        jqSortable = function() {
            var
            linkFn = function( $scope, el, attrs ) {
                $( el ).sortable( $scope.sortConfig );
            };
            return {
                restrict: "A",
                scope: {
                    model: "="
                },
                link: linkFn
            }
        };

        angular.module( "jq.draggable", [] ).
        directive( "jqDraggable", jqDraggable );
        
        angular.module( "jq.droppable", [] ).
        directive( "jqDroppable", jqDroppable );
        
        angular.module( "jq.resizable", [] ).
        directive( "jqResizable", jqResizable );
        
        angular.module( "jq.selectable", [] ).
        directive( "jqSelectable", jqSelectable );
        
        angular.module( "jq.sortable", [] ).
        directive( "jqSortable", jqSortable );
        
        angular.module( "jq.angular.ui", [
            "jq.draggable",
            "jq.droppable",
            "jq.resizable",
            "jq.selectable",
            "jq.sortable"
        ] );
        
    };
    
    define( [ "angular", "jQuery" ], requireCallback );
    
} )();