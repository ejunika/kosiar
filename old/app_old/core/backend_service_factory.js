/**
 * @author EID201
 */
define( [ "jquery", "clgConfig", "angular", "coreModule" ], 
		function( $, CLG_CONFIG, angular, coreModule ) {
			var backendServiceFactory = function( $http ) {
				
				var 
				factory = {};
				
				/**
				 * @function
				 * @author EID201
				 * */
				factory.getJson = function( fileUrl, sCallback ) {
					factory.doGetRequest( fileUrl, sCallback );
				};
				
				/**
				 * @function
				 * @author EID201
				 * */
				factory.getRequestHeaders = function() {
					var 
					loginStr = sessionStorage[ "login" ], 
					headers = {
//						"Content-Type": "application/x-www-form-urlencoded",
						"Content-Type": "application/json"
					},
					login = {}, 
					users = {};
					if( loginStr ) {
						login = JSON.parse( loginStr );
						users = login.users;
						headers[ "authtoken" ] = users.authToken;
						headers[ "spacekey" ] = users.spaceKey;
						headers[ "userid" ] = users.id;
					}
					return headers;
				};
				
				/**
				 * @function
				 * @author EID201
				 * */
				factory.doRequest = function( config, sCallbackFn, eCallbackFn ) {
					var defSettings = {
	                    method: "GET",
	                    traditional: true,
	                    crossDomain: true,
	                    async: true,
	                    headers: this.getRequestHeaders() || {}
					
//						TODO transformRequest function is needed if the "Content-Type": "application/x-www-form-urlencoded"
					
//	                    transformRequest: function( obj ) {
//	                        var str = [];
//	                        for( var p in obj ) {
//	                            str.push( encodeURIComponent( p ) + "="
//	                                    + encodeURIComponent( obj[ p ] ) );
//	                        }
//	                        return str.join( "&" );
//	                    }
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
				 * @function
				 * @author EID201
				 * */
				factory.doPostRequest = function( reqUrl, reqData, sCallbackFn, eCallbackFn ) {
					var config = {
						url: reqUrl,
						data: reqData,
						method: "POST",
					};
					factory.doRequest( config, 
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
				 * @function
				 * @author EID201
				 * */
				factory.doPostRequest4Json = function( reqUrl, reqData, sCallbackFn, eCallbackFn ) {
					var config = {
						url: reqUrl,
						data: reqData,
						method: "POST",
					};
					factory.doRequest( config, 
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
				 * @function
				 * @author EID201
				 * */
				factory.doGetRequest = function( reqUrl, sCallbackFn, eCallbackFn ) {
					var config = {
							url: reqUrl,
							method: "GET",
						};
						factory.doRequest( config, 
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
				
				return factory;
	};
	
	coreModule.factory( CLG_CONFIG.MODULES.CORE.FACTORIES.BACKEND_SERVICE_FACTORY, 
		[
		 	"$http", 
		 	backendServiceFactory
		]
	);
	
	return backendServiceFactory;
});