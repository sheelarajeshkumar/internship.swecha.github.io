var app = angular.module("rgApp", []);

app.controller('userForm',function($scope,$http) {
    $scope.isDisable=true;
    $scope.userDetails={}; 
    if ($scope.userDetails.isaccepted){
        $scope.isDisable=false;
    }
});