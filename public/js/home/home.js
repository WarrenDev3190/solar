angular.module('home',['ngRoute'])
		.directive('topNav',topNav)
		.config(['$routeProvider',homeRouter])
		.controller('homeController',['$scope',homeController]);