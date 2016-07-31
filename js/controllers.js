appC = angular.module('AppCtrls', [])

appC.controller('MainCtrl', ['$scope', function($scope) {
  $scope.me = "Krista Calderon";
}]); // end MainCtrl

appC.controller('SwitchCtrl', ['$scope', function($scope) {
  $scope.switch = "SwitchIt";
}]); // end SwitchCtrl

appC.controller('HospCtrl', ['$scope', function($scope) {
  $scope.hos = "Hospital Readmissions Report";
}]) // end HospCtrl