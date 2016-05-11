( function( jQ, win ) {
    "use strict";
    win.NJSDK = win.NJSDK || {};
    var 
    Method = {
        GET: "GET",
        POST: "POST",
        DELETE: "DELETE",
        PUT: "PUT"
    },
    setStmts = function( stmts ) {
        this.stmts = stmts;
        return true;
    },
    getStmts = function() {
        return this.stmts;
    },
    setDbObj = function( dbObj ) {
        this.dbObj = dbObj;
        return true;
    },
    getDbObj = function() {
        return this.dbObj;
    },
    getDbDomId = function() {
        if( this.dbObj && typeof( this.dbObj ) === "object" ) {
            return this.dbObj.dbId;
        }
    },
    getDbBackendId = function() {
        if( this.dbObj && typeof( this.dbObj ) === "object" ) {
            return this.dbObj.dbId;
        }
    },
    getDbComponentList = function() {
         if( this.dbObj && typeof( this.dbObj ) === "object" ) {
            return this.dbObj.components;
        }
    },
    hideComponent = function( cId ) {
        if( cId ) {
            $( "#" + cId ).hide();
        }
    },
    showComponent = function( cId ) {
        if( cId ) {
            $( "#" + cId ).hide();
        }
    },
    doAjax = function( config ) {
        jQ.ajax( {
            url: config.url,
            type: config.type,
            success: function( data, textStatus, jqXHR ) {
                if( config.sCallback && typeof( config.sCallback ) === "function" ) {
                    config.sCallback( data, textStatus, jqXHR, config.info );
                }
            },
            error: function( jqXHR, textStatus, errorThrown ) {
                if( config.eCallback && typeof( config.eCallback ) === "function" ) {
                    config.eCallback( jqXHR, textStatus, errorThrown, config.info );
                }
            }
        } );
    },
    getJson = function( url, sCallback, eCallback ) {
       doAjax( {
            url: url,
            type: Method.GET,
            dataType: "json",
            sCallback: sCallback,
            eCallback: eCallback
        } );
    },
    doGet = function( url, headers, sCallback, eCallback, info ) {
        doAjax( {
            url: url,
            type: Method.GET,
            sCallback: sCallback,
            eCallback: eCallback,
            info: info
        } );
    },
    doPost = function( url, headers, reqData, sCallback, eCallback, info ) {

    },
    doPut = function() {

    },
    doDelete = function() {

    },
    execute = function() {
        if( this.stmts ) {
            try {
                eval( this.stmts );
            }
            catch( error ) {
                console.error( error );
            }
            finally {

            }
        }
    }
    ;
    function NJSDK( dbObj ) {
        this.dbObj = dbObj;
    }
    NJSDK.prototype = {
        postRequest: doPost,
        getRequest: doGet,
        putRequest: doPut,
        deleteRequest: doDelete,
        getJson: getJson,
        setStmts: setStmts,
        getStmts: getStmts,
        execute: execute,
        setDbObj: setDbObj,
        getDbObj: getDbObj,
        getDbDomId: getDbDomId,
        getDbBackendId: getDbBackendId,
        getDbComponentList: getDbComponentList,
        hideComponent: hideComponent,
        showComponent: showComponent
    };
    win.NJSDK = new NJSDK();
} )( $, window );
//# sourceURL=NJSDK.js