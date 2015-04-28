function homeRouter($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl:'js/home/templates/_index.html',
			controller:'homeController'
		})
		.when('/about',{
			templateUrl:'js/home/templates/_about.html',
			controller:'homeController'
		})
		.otherwise({
			redirectTo:'/'
		});
}