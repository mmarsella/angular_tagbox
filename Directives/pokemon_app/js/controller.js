app.controller("pokeController", function($scope,$location,$http){

//Make 6 indiv calls to grab pokemon detail-list by id
  $scope.pokeArray = [];
  $scope.pokeShow = false;  // handles showing dir
  
  // hits pokeAPI for indiv pokemon info
  var pokeCall = function(){
    var index = parseInt(Math.random() * (700 - 1) + 1);
    index.toString();

    $http.get('http://pokeapi.co/api/v2/pokemon/'+index+'/')
    .then(function(res){
      var pokemon = {};
      pokemon.info = res.data;
      console.log('DATA:', res.data);
      console.log("POKE INFO", pokemon.info);
      pokemon.img = res.data.sprites.front_default;
      $scope.pokeArray.push(pokemon);
    });
  };
    
  // Called on button click in index.html
  $scope.catchEm = function()
  {
    $scope.pokeArray = [];
    for (var i = 0; i < 5; i++){
      pokeCall();
    }
      // show directive once all calls have been made
      $scope.pokeShow = true;
  };

});  //end of controller



// passing an array to the html directive
// the directive's template URL has an ng-repeat
// repeats through each item in array and renders a div
// w/ each item's info. 



// ALL DOM MONIPULATION BELONGS IN DIRECTIVES!!!  NOT CONTROLLER!
app.directive('mmPokeDetails', function(){
  return {
    scope:{
      pokeArray:"="
    },
    templateUrl: 'partials/pokemon.html'
  };

});



