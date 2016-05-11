( function() {
	
	"use strict";
	
	var
	clgServiceFactoryFn = function() {
		
		return {
			SERVICE_REQUESTS: {
				ANGULAR: {
					
				},
				JQ: {
					
					jqAjax: function( url, config, sCallback, eCallback ) {
						var
						dConfig = {
							type: "GET",
							url: url || "",
							success: sCallback,
							error: eCallback || this.defaultErrorHandler
						};
						dConfig = $.extend( dConfig, config );
						$.ajax( dConfig );
					},
					
					doGet: function() {
						
					},
					
					doPost: function( url, reqData, sCallback, eCallback ) {
						var
						config = {
							type: "POST",
							data: reqData,
							dataType: "json",
							accept: "application/json",
							contentType: "application/json"
						};
						this.jqAjax( url, config, sCallback, eCallback );
					},
					
					doSecureGet: function() {
						
					},
					
					doSecurePost: function() {
						
					},
					defaultErrorHandler: function( xhr, msg, status ) {
						console.log( "Ajax Error: " + msg );
					}
					
				},
				NATIVE: {
					
				}
			},
			HELPERS: {
				getRandomColor: function() {
					
				},
				generateUniqueId: function() {
					var
					currentMiliz = new Date().getTime(),
					randomNo = null,
					uIdPattern = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",
					uId = uIdPattern.replace(/[xy]/g, function( c ) {
						randomNo = ( currentMiliz + Math.random() * 16 ) % 16 | 0;
						currentMiliz = Math.floor( currentMiliz / 16 );
						return ( c == "x" ? randomNo : ( randomNo & 0x3 | 0x8) ).toString( 16 );
					} );
					return uId;
				}
			},
			UTILITIES: {
				
			}
		};
		
	};
	
	CAD.MODULE_OBJs.MAIN_MODULE_OBJ.factory(
		CAD.FACTORIES.SERVICE_FACTORY,
		clgServiceFactoryFn
		);
	
} )();