( function() {
	
	"use strict";
	
	var
	headerDirectiveFn = function() {
		
		var 
		returnFn = function( scope, element, attributes, controller ) {
			element.find( ".test" ).tagEditor( {
				initialTags: "".split( ", " ),
				maxTags: 1,
				maxLength: 50,
				delimiter: ",;",
				placeholder: "",
				forceLowercase: true,
				removeDuplicates: true,
				clickDelete: false,
				animatedDelete: 175,
				sortable: true,
				autocomplete: null,
				onChange: function( field, editor, tags ) {
					$("body").click();
				},
				beforeTagSave: function( field, editor, tags, tag, val ) {
					
				},
				beforeTagDelete: function( field, editor, tags, val ) {
					
				}
			} );
			
		},
		
		compileFn = function( element, attributes ) {
			return returnFn;
		};
		
		return {
			restrict: "AE",
		    templateUrl: CAD.DIRECTIVES.HEADER_DIRECTIVE.URL,
		    controller: CAD.CONTROLLERS.HEADER_CONTROLLER,
		    compile: compileFn
		};
		
	};
	
	CAD.MODULE_OBJs.HEADER_MODULE_OBJ.directive(
		CAD.DIRECTIVES.HEADER_DIRECTIVE.NAME,
		headerDirectiveFn
		);
	
} )();