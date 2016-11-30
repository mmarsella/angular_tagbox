var app = angular.module('circleApp', []);

app.directive('gsBigRedCircle', function() {
  return {
    controller: function($scope) {
      $scope.view = {};
      $scope.view.sayHi = function() {
        alert("Hi! Thanks for clicking on me!");
      };
    },
    template: '<div class="circle">Click me!</div>',
    link: function(scope, element, attrs, controller, transcludeFn) {

      // https://docs.angularjs.org/api/ng/service/$compile#-link-

      /*
      scope - is an Angular scope object.
      element - is the jqLite-wrapped element that this directive matches.
      attrs - is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
      controller - is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
      transcludeFn - is a transclude linking function pre-bound to the correct transclusion scope.
      */


      console.log('scope', scope);
      console.log('element', element);
      console.log('attrs', attrs);
      console.log('controller', controller);

      element.on('click', function() {
        scope.view.sayHi();
      });

    }
  };
});