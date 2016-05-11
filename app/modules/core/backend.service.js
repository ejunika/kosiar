( function() { "use strict";

    /**
     * [requireCallback description]
     * @param  {[type]} coreModule [description]
     * @param  {[type]} appConfig  [description]
     * @return {[type]}            [description]
     */
    var requireCallback = function( coreModule, appConfig ) {
        var
        
        /**
         * [backendService description]
         * @param  {[type]} $rootScope [description]
         * @param  {[type]} $http      [description]
         * @return {[type]}            [description]
         */
        backendService = function( $rootScope, $http ) {

            this.loginInfo = {};
            
            /**
             * [getJson description]
             * @param  {[type]} fileUrl   [description]
             * @param  {[type]} sCallback [description]
             * @return {[type]}           [description]
             */
            this.getJson = function( fileUrl, sCallback ) {
                this.doGetRequest( fileUrl, sCallback );
            };
            
            /**
             * [getRequestHeaders description]
             * @return {[type]} [description]
             */
            this.getRequestHeaders = function() {
                var headers = {}, userAuth;

                headers[ "Content-Type" ] = "application/x-www-form-urlencoded";
                // headers[ "Content-Type" ] = "application/json";
                
                try {
                    userAuth = this.loginInfo.userAuth;
                    if( userAuth ) {
                        headers[ "authtoken" ] = userAuth.authToken;
                        headers[ "spacekey" ] = userAuth.spaceKey;
                        headers[ "userid" ] = userAuth.id;
                        return headers;
                    }
                }
                catch( error ) {
                    console.error( error );
                    return headers;
                }

                return headers;
            };
            
            /**
             * [doRequest description]
             * @param  {[type]} config      [description]
             * @param  {[type]} sCallbackFn [description]
             * @param  {[type]} eCallbackFn [description]
             * @return {[type]}             [description]
             */
            this.doRequest = function( config, sCallbackFn, eCallbackFn ) {
                var defSettings = {
                    method: "GET",
                    traditional: true,
                    crossDomain: true,
                    async: true,
                    headers: this.getRequestHeaders() || {},
//NOTE
//transformRequest function is needed if the "Content-Type": "application/x-www-form-urlencoded"
                
                    transformRequest: function( obj ) {
                        var str = [];
                        for( var p in obj ) {
                            str.push( encodeURIComponent( p ) + 
                                "=" + 
                                encodeURIComponent( obj[ p ] ) );
                        }
                        return str.join( "&" );
                     }
                }, 
                settings = angular.extend( {}, defSettings, config );
                    
                $http( settings )
                .success( function( resData, resStatus, resHeaders, cnf ) {
                    if( sCallbackFn && typeof (sCallbackFn) === "function" ) {
                        sCallbackFn( resData, resStatus, resHeaders, cnf );
                    }
                } )
                .error( function( resData, resStatus, resHeaders, cnf ) {
                    console.info( "$http request ERROR!!!" );
                    if( eCallbackFn && typeof (eCallbackFn) === "function" ) {
                        eCallbackFn( resData, resStatus, resHeaders, cnf );
                    }
                } );
                
            };
            
            /**
             * [doPostRequest description]
             * @param  {[type]} reqUrl      [description]
             * @param  {[type]} reqData     [description]
             * @param  {[type]} sCallbackFn [description]
             * @param  {[type]} eCallbackFn [description]
             * @return {[type]}             [description]
             */
            this.doPostRequest = function( reqUrl, reqData, sCallbackFn, eCallbackFn ) {
                var config = {
                    url: reqUrl,
                    data: reqData,
                    method: "POST",
                };
                this.doRequest( config, 
                    function( sData, sStatus, x, y ) {
                        if( sCallbackFn && typeof( sCallbackFn ) === "function" ) {
                            sCallbackFn( sData, sStatus, x, y );
                        }
                    }, 
                    function( sData, sStatus, x, y ) {
                        if( eCallbackFn && typeof( eCallbackFn ) === "function" ) {
                            eCallbackFn( sData, sStatus, x, y );
                        }
                    } 
                );
            };
            
            /**
             * [doPostRequest4Json description]
             * @param  {[type]} reqUrl      [description]
             * @param  {[type]} reqData     [description]
             * @param  {[type]} sCallbackFn [description]
             * @param  {[type]} eCallbackFn [description]
             * @return {[type]}             [description]
             */
            this.doPostRequest4Json = function( reqUrl, reqData, sCallbackFn, eCallbackFn ) {
                var config = {
                    url: reqUrl,
                    data: reqData,
                    method: "POST",
                };
                this.doRequest( config, 
                    function( sData, sStatus, x, y ) {
                        if( sCallbackFn && typeof( sCallbackFn ) === "function" ) {
                            sCallbackFn( sData, sStatus, x, y );
                        }
                    }, 
                    function( sData, sStatus, x, y ) {
                        if( eCallbackFn && typeof( eCallbackFn ) === "function" ) {
                            eCallbackFn( sData, sStatus, x, y );
                        }
                    } 
                );
            };

            /**
             * [doGetRequest description]
             * @param  {[type]} reqUrl      [description]
             * @param  {[type]} sCallbackFn [description]
             * @param  {[type]} eCallbackFn [description]
             * @return {[type]}             [description]
             */
            this.doGetRequest = function( reqUrl, sCallbackFn, eCallbackFn ) {
                var config = {
                        url: reqUrl,
                        method: "GET",
                    };
                    this.doRequest( config, 
                        function( sData, sStatus, x, y ) {
                            if( sCallbackFn && typeof( sCallbackFn ) === "function" ) {
                                sCallbackFn( sData, sStatus, x, y );
                            }
                        }, 
                        function( sData, sStatus, x, y ) {
                            if( eCallbackFn && typeof( eCallbackFn ) === "function" ) {
                                eCallbackFn( sData, sStatus, x, y );
                            }
                        } 
                    );
            };
        };

        return coreModule.service( appConfig.modules.core.services.backendService, 
            [ 
                "$rootScope", 
                "$http", 
                backendService 
            ] 
          );
    };
    
    define( [ "coreModule", "appConfig" ], requireCallback );
} )();