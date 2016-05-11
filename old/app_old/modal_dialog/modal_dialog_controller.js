/**
 * @author M A AKHTAR
 */
define(
		[ "jquery", "clgConfig", "modalDialogModule" ],
		function($, CLG_CONFIG, modalDialogModule) {
			var modalDialogController = function($scope, FILE_SERVICE) {
				/**
				 * 
				 */
				
				$scope.modalData = {
					modalTitle : "",
					modalBodyTemplateUrl : "",
					modalControlBtns : []
				};
				
				$scope.newFileName = "";

				$scope.MODAL_DIALOG_TYPES = {
					GENERAL : "GENERAL",
					CREATE_FOLDER : "CREATE_FOLDER"
				};

				$scope.MODAL_DIALOG_ACTIONS = {
					CLOSE_MODAL : "CLOSE_MODAL",
					CREATE_FOLDER : "CREATE_FOLDER"
				};

				/**
				 * 
				 */
				$scope.showModalDialog = function(purpose) {
					switch (purpose) {
					case $scope.MODAL_DIALOG_TYPES.GENERAL:
						$scope.modalData = {
							modalTitle : "Modal Title",
							modalBodyTemplateUrl : ".app/modal_dialog/test_modal_include.html",
							modalFooterTemplateUrl : ""
						};
						$(".modal").modal("show");
						break;

					case $scope.MODAL_DIALOG_TYPES.CREATE_FOLDER:
						$scope.modalData = {
							modalTitle : "Create folder/file",
							modalBodyTemplateUrl : "./app/modal_dialog/file_manager/create_folder_modal_include.html",
							modalControlBtns : [ {
								label : "Create",
								action : $scope.MODAL_DIALOG_ACTIONS.CREATE_FOLDER,
								type : ""
							}, {
								label : "Close",
								action : "CLOSE_MODAL",
								type : ""
							}, ]
						};
						$(".modal").modal("show");
						break;

					default:
						break;
					}
					$scope.$apply();
				};

				/**
				 * 
				 */
				$scope.onModalBtnClick = function(action) {
					switch (action) {
					case $scope.MODAL_DIALOG_ACTIONS.CLOSE_MODAL:
						$(".modal").modal("hide");
						break;
					case $scope.MODAL_DIALOG_ACTIONS.CREATE_FOLDER:
						FILE_SERVICE.createFile( $scope.newFileName );
						break;
					default:
						break;
					}
				};
			};
			modalDialogModule.controller(
					CLG_CONFIG.MODULES.MODAL_DIALOG.CONTROLLER, 
					[ 
					  	"$scope",
					  	CLG_CONFIG.MODULES.FILE_MANAGER.SERVICES.FILE_SERVICE,
					  	modalDialogController
					]
				);
			return modalDialogController;
		});