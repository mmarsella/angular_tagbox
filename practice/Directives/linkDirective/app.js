var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      console.log('scope.newColor', scope);
      console.log('attrs', attrs);

      element.on('mouseenter', function(event) {
        element.css('background-color', attrs.newcolor);
        element.css('color', 'white');
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldColor);
        element.css('color', 'black');
      })
    },
    // what would be available in our template (n/a)
    scope: {
      newColor: "=newColor"
    },
    // only enable directive as an attribute.
    restrict: 'A'
  };
});