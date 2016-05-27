app.controller('LoginCtrl', function($state, $scope, $ionicModal, $ionicPopup, ionicMaterialInk){
	$scope.goToComponents = function(){
		$state.go('app.components');
	};

	//For MODAL
	$ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

	$scope.openLoginModal = function(){
		$scope.modal.show();
	};

	// FOR POPUP

	$scope.showLogin = function() {
        var alertPopup = $ionicPopup.show({
            title: 'You are now my subscribed to Cat Facts',
            template: '<div class="list"><label class="item item-input"><input type="text" placeholder="Email Address"></label><label class="item item-input"><input type="text" placeholder="Password"></label>',
            scope: $scope,
		    buttons: [
		      {
		        text: '<b>Login</b>',
		        type: 'button-positive',
		        onTap: function(e) {
		           //call back: $scope.data ==>

		          
		        }
		      }
		    ]
        });

        
    };
});

