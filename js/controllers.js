appC = angular.module('AppCtrls', [])

appC.controller('MainCtrl', ['$scope', function($scope) {
  $scope.me = "Krista Calderon";
}]); // end MainCtrl

appC.controller('SwitchCtrl', ['$scope', function($scope) {
  $scope.switch = "SwitchIt";
}]); // end SwitchCtrl

appC.controller('HospCtrl', ['$scope', function($scope) {
  $scope.hos = "Hospitalization Report";
}]) // end HospCtrl

appC.controller('OutcomesCtrl', ['$scope', function($scope) {
  $scope.outcomes = "GA Outcomes Mgmt";
}]) // end OutcomesCtrl