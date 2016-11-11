var app = angular.module("photoApp", []);

app.directive('gsPhoto', function() {
  return {
    scope: {
      src: "="
    },
    templateUrl: "partials/photo.html",
    transclude: true
  };
});