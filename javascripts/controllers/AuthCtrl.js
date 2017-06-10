app.controller("AuthCtrl", function($scope, AuthFactory){
 	$scope.loginUserGoogle = () => {
 		AuthFactory.authenticateGoogle($scope.auth).then(() => {
 		}).catch((error) => {
 			console.log(error);
 		});
  };
});