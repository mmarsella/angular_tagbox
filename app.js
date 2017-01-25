var app = angular.module('tagboxDemo', []);

app.directive('smTagbox', function(){
	return{
		controller: function($scope){
			console.log('directive scope: ', $scope);

			if(!$scope.keywords){
			  $scope.keywords = [];
			}
			$scope.removeTag = removeTag;

			// toggle selection for a given topic by name
			$scope.toggleSelection = function toggleSelection(keyword) {
			  var idx = $scope.keywords.indexOf(keyword);
			  // is currently selected
			  if (idx > -1) {
			    $scope.keywords.splice(idx, 1);
			  }
			  // is newly selected
			  else {
			    $scope.keywords.push(keyword);
			  }

			  console.log('keywords', $scope.keywords);
			};

			function removeTag(tag){
				var index = $scope.keywords.indexOf(tag);
				$scope.keywords.splice(index, 1);
				console.log('keywords', $scope.keywords);
			}


		},
		templateUrl: './partials/tagbox.html',
		link: function(scope, element, attrs){
			console.log('link scope', scope);
		},
		scope:{
			config: "=",
			data: "="
		}

	}




})