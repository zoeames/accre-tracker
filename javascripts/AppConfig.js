let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){resolve();} else {reject();}
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthFactory) {
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
    var logged = AuthFactory.isAuthenticated();
    var appTo;

    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when('/list', {
			templateUrl: 'partials/list.html',
			controller: 'ListCtrl',
			resolve : {isAuth}
		})
		.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'NewCtrl',
			resolve : {isAuth}
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'EditCtrl',
			resolve : {isAuth}
		})
		.when('/logout', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl',
			resolve : {isAuth}
		})
		.otherwise('/auth');
});