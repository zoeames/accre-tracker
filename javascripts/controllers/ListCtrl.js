app.controller("ListCtrl", function($scope, AuthFactory, JobFactory){
	$scope.jobs = [];
	
	let getList = () => {
		JobFactory.getList(AuthFactory.getUser().uid).then((jobz) => {
			$scope.jobs = jobz;
		}).catch((error) => {
			console.log("getList Error", error);
		});
	};

	getList();

});