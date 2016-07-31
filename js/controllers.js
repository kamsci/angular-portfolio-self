appC = angular.module('AppCtrls', [])

appC.controller('MainCtrl', ['$scope', function($scope) {
  $scope.me = "Krista Calderon";
}]); // end Ctrl

appC.controller('SwitchCtrl', ['$scope', function($scope) {
  $scope.switch = "SwitchIt";
}]); // end Ctrl