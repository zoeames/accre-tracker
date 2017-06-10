app.controller("AuthCtrl", function($location, $scope, AuthFactory){
 	$scope.loginUserGoogle = () => {
 		AuthFactory.authenticateGoogle($scope.auth).then(() => {
 			$location.url("/list");
 		}).catch((error) => {
 			console.log(error);
 		});
  };
});