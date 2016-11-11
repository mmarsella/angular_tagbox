var app = angular.module('todoApp', []);

app.directive('todoList', function(){
	return{
		templateUrl: 'partials/list.html',
		scope: true,
		controller: function($scope){
			$scope.list = {};
			$scope.list.todos = ["wash up"];
			var i = 0;
			$scope.add = function(todo){
				console.log('adding');
				i++;
				todo = todo + i;
				$scope.list.todos.push(todo);
				todo = null;
			};

			// This won't be recognized in todo
			$scope.easyvar = 'hello';

			$scope.submit = function(){
				console.log('submitted!');
				$scope.add('a new item');
			}

			// declaring as this vs $scope makes it accesible
			// to be required into child dirs.  BUT WHY????
			this.simple = function(){
				console.log('simple!');
			}

			this.name = function(){
				console.log('name');
			}

			this.delete = function(){
				$scope.list.todos.pop();
			  }
			}
		}
});

// EACH TODO
app.directive('todo', function(){
	return{
		templateUrl: 'partials/todo.html',
		require: "^todoList",
		link: function(scope, element, attrs, todoListCtrl){
			console.log('scope',scope)
			console.log('ctrl',todoListCtrl)

			element.bind('click', function(){
				todoListCtrl.delete();
				scope.$apply();
				console.log('scope.data', scope)
			})
		},
		scope: {
			data: "=data"
		}
	}
});