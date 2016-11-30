var app = angular.module('diceRoll', []);

app.directive('diceRoller', function(){
	return{
		controller: function($scope){
			console.log('directive controller!');
			$scope.x = 2;

			$scope.number = 6;

			$scope.myVar = 'hi';

			console.log('$scope.x', $scope.x);
			$scope.name = "IN CONTROLLER";

			$scope.roll = function(){
			  return Math.floor(Math.random() * (7) + 1);
				console.log("ROLLING", $scope.number)
			} 
		},
		templateUrl: './diceRoller.html',
		link: function(scope, element, attrs){

			// This is a solution using bound vars with
			// a directive's controller.

			//For alternate solution w/o using apply() to re-bind
			// refer to gSchool dice_app --> (which uses element.text() instead of data binding to scope)

			console.log('scope', scope);

			scope.linkScope = "IN LINKSCOPE";
			console.log('Links X:', scope.x);

			/*
			Ref:  https://www.sitepoint.com/understanding-angulars-apply-digest/

			if you have a directive that sets up a DOM event listener and 
			changes some models inside the handler function,
		    you need to call $apply() to ensure the changes take effect.
		    */

			element.on('click', function(){
				console.log("CLICK");
				scope.number = scope.roll();
				scope.$apply();					
			})
		},
		scope:{
			myVar: '=myVar'
		}

	}




})