////////////////////////////////////////////////////////////////////////////////////////////////////
///                                 FILE MANAGER CONTROLLER
///
////////////////////////////////////////////////////////////////////////////////////////////////////
( function() { "use strict";
    
    /**
     * [requireCallback description]
     * @param  {[type]} fileManagerModule [description]
     * @param  {[type]} appConfig         [description]
     * @return {[type]}                   [description]
     */
    var
    requireCallback = function( $, fileManagerModule, appConfig ) {
        var
        /**
         * [fileManagerCtrl description]
         * @param  {[type]} $scope [description]
         * @return {[type]}        [description]
         */
        fileManagerCtrl = function( $scope, backendService, fileManagerDataService ) {

            /**
             * [init description]
             * @return {[type]} [description]
             */
            $scope.init = function() {
                var gotUserInfo = function( userInfo ) {
                    var treeData, rootNodes = [], node;
                    if( userInfo.users ) {
                        treeData = userInfo.users.trees;
                        if( treeData != undefined ) {
                            if( !Array.isArray( treeData ) ) {
                                treeData = [ treeData ];
                            }
                            for( var i = 0; i < treeData.length; i++ ) {
                                node = {};
                                node[ "id" ] = treeData[ i ][ "id" ];
                                node[ "parent" ] = "#";
                                node[ "text" ] = treeData[ i ][ "title" ];
                                node[ "children" ] = true;
                                rootNodes.push( node );
                            }
                        }
                    }
                    fileManagerDataService.jsTreeObj = 
                        $( "#jstree" ).jstree( $scope.getTreeConfig( rootNodes ) );
                    $( ".clg-file-browser" ).resizable( $scope.getFileBrowserResizeConfig() );
                };

                $scope.getUserInfo( gotUserInfo );
            };

            $scope.getUserInfo = function( cb ) {
                var
                reqUrl = "http://192.168.1.10:8181/cxf/auth/getUserInfoByToken",
                reqData = {
                    token: backendService.loginInfo.userAuth.authToken
                },
                sCallback = function( sData, sStatus, x, y ) {
                    if( typeof ( cb ) === "function" ) {
                        cb( sData );
                    }
                },
                eCallback = function( eData, eStatus, x, y ) {};
                backendService.doPostRequest( reqUrl, reqData, sCallback, eCallback );
            };  

            /**
             * [getFileBrowserResizeConfig description]
             * @return {[type]} [description]
             */
            $scope.getFileBrowserResizeConfig = function() {
                var 
                onResizePane = function( e, ui ) {
                    $( ".clg-file-viewer" ).css( "width", "calc( 100% - " + 
                        ( ui.element.width() + 3 ) + "px )" );
                };
                return {
                    handles : "e",
                    maxWidth : 500,
                    minWidth : 100,
                    resize : onResizePane
                };
            };

            /**
             * [getChildTreeData description]
             * @param  {[type]} node_id [description]
             * @return {[type]}         [description]
             */
            $scope.requestChildTreeData = function( nodeId, cb ) {
                var
                reqUrl = "http://192.168.1.10:8181/cxf/view/getlistview",
                reqData = {
                    nodeid: nodeId,
                    orderType: "",
                    token: backendService.loginInfo.userAuth.authToken,
                    spacekey:backendService.loginInfo.userAuth.spaceKey
                },
                sCallback = function( sData, sStatus, x, y ) {
                    var treeData, treeNodes = [], node;
                    if( sData ) {
                        treeData = sData.trees.treesList;
                        if( treeData != undefined ) {
                            if( !Array.isArray( treeData ) ) {
                                treeData = [ treeData ];
                                return false;
                            }
                            for( var i = 0; i < treeData.length; i++ ) {
                                node = {};
                                node[ "id" ] = treeData[ i ][ "id" ];
                                node[ "parent" ] = treeData[ i ][ "parentId" ][ "id" ];
                                node[ "text" ] = treeData[ i ][ "title" ];
                                node[ "children" ] = true;
                                treeNodes.push( node );
                            }
                            if( typeof( cb ) === "function" ) {
                                cb( treeNodes );
                            }
                        }
                    }
                },
                eCallback = function( eData, eStatus, x, y ) {};
                backendService.doPostRequest( reqUrl, reqData, sCallback );
            };

            /**
             * [getTreeConfig description]
             * @return {[type]} [description]
             */
            $scope.getTreeConfig = function( rootNodes ) {
                var jsTreeData = [
                    {
                        text: "My Documents",
                        id: "1111",
                        parent: "#",
                        children: true
                    },
                    {
                        text: "Public",
                        id: "2222",
                        parent: "#",
                        children: true
                    },
                    {
                        text: "Favourite",
                        id: "3333",
                        parent: "#",
                        children: true
                    }
                ],

                /**
                 * [treeDataHandler description]
                 * @param  {[type]}   node [description]
                 * @param  {Function} cb   [description]
                 * @return {[type]}        [description]
                 */
                treeDataHandler = function( node, cb ) {
                    var nodeId = node.id, that = this;

                    if( nodeId === "#" ) {
                        cb.call( this, rootNodes );
                    }
                    else {
                        $scope.requestChildTreeData( nodeId, function( d ) {
                            cb.call( that, d );
                        } );
                    }
                    

                    // $scope.requestChildTreeData( nodeId, function( d ) {
                    //     cb.call( that, d );
                    // } );
                };

                return {
                    core: {
                        themes: {
                            name: "proton",
                            responsive: true
                        },
                        data: treeDataHandler,
                        check_callback: true
                    },
                    plugins : [ "wholerow" ]
                };
            };

        };
        
        fileManagerModule.controller( appConfig.modules.core.fileManager.ctrl, 
            [
                appConfig.ngVars.scope,
                appConfig.modules.core.services.backendService,
                appConfig.modules.core.fileManager.services.fileManagerDataService,

                fileManagerCtrl 
            ]
        );
    };

    define( [ "jQuery", "fileManagerModule", "appConfig", "jQueryUI", "jsTree" ], requireCallback );

} )();