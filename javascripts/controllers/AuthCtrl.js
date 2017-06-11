app.controller("AuthCtrl", function($location, $scope, AuthFactory){
 	
 	if($location.path() === '/logout'){
		AuthFactory.logout();
		$location.url('/auth');
	}

 	$scope.loginUserGoogle = () => {
 		AuthFactory.authenticateGoogle($scope.auth).then(() => {
 			$location.url("/list");
 		}).catch((error) => {
 			console.log(error);
 		});
  };
});