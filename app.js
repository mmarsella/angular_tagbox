var app = angular.module('tagboxDemo', []);

app.directive('smTagbox', function(){
	return{
		templateUrl: './partials/tagbox.html',
		scope:{
			config: "=",
			data: "=",
			returnedArray: "=",
		},
		link: function(scope, element, attrs){




			console.log('scope', scope);
			console.log('attrs', attrs);
			console.log('element', element);
			console.log('element theTag', element.find('span'));




			debugger

			scope.removeTag = removeTag;
			scope.toggleSelection = toggleSelection;


			if(!scope.keywords){
			  scope.keywords = [];
			}
			scope.returnedArray = scope.keywords;

			function toggleSelection(keyword) {
			  var idx = scope.keywords.indexOf(keyword);
			  // is currently selected
			  if (idx > -1) {
			    scope.keywords.splice(idx, 1);
			  }
			  // is newly selected
			  else {
			    scope.keywords.push(keyword);
			  }

			  console.log('keywords', scope.keywords);
			};


			function removeTag(tag){
				var index = scope.keywords.indexOf(tag);
				scope.keywords.splice(index, 1);
				console.log('keywords', scope.keywords);
			}


		}

	}




})