/**
 * 
 */
define(
		[ "jquery", "clgConfig", "headerModule" ],
		function($, CLG_CONFIG, headerModule) {
			"use strict";
			var headerDirective = function() {
				var returnFn = function(scope, element, attributes, controller) {
//					element.find(".test").tagEditor(
//							{
//								initialTags : "".split(", "),
//								maxTags : 1,
//								maxLength : 50,
//								delimiter : ",;",
//								placeholder : "",
//								forceLowercase : true,
//								removeDuplicates : true,
//								clickDelete : false,
//								animatedDelete : 175,
//								sortable : true,
//								autocomplete : null,
//								onChange : function(field, editor, tags) {
//									$("body").click();
//								},
//								beforeTagSave : function(field, editor, tags,
//										tag, val) {
//
//								},
//								beforeTagDelete : function(field, editor, tags,
//										val) {
//
//								}
//							});

				},

				compileFn = function(element, attributes) {
					return returnFn;
				};

				return {
					restrict : "A",
					templateUrl : CLG_CONFIG.MODULES.HEADER.DIRECTIVES.HEADER_DIRECTIVE.TEMPLATE_URL,
					controller : CLG_CONFIG.MODULES.HEADER.CONTROLLER,
					compile : compileFn
				};
			};
			headerModule.directive(
					CLG_CONFIG.MODULES.HEADER.DIRECTIVES.HEADER_DIRECTIVE.NAME,
					headerDirective);
			return headerDirective;
		});