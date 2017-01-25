app.controller("demoController", function($scope, $http){
	console.log("contorller works!");

	$scope.ready = false;

	$scope.config = {
		tagColor: "blue",
		boxColor: "red"
	}

	$scope.checkboxData = [];

	$scope.$watch('checkboxData',function(){
		console.log('checkboxData', $scope.checkboxData);
	})

 

  $http.get('./npKeywords.json').then(function(response) {
    $scope.data =response.data[0].animalRights;

    console.log('the list: ', $scope.data);
    $scope.ready = true;
  });


});