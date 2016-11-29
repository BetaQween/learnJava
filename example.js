/**
 * Created by Liza on 10/6/2016.
 */
"use strict";
angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('RatingDemoCtrl', function ($scope) {
    $scope.rate = 0;
    $scope.max = 5;
    $scope.isReadonly= false;
    $scope.countUsers = 4;
    $scope.arrUsers = [2,4,5,3];
    $scope.rates= $scope.arrUsers.reduce(function(sum,current){
        return sum + current;
    },0);
    $scope.rez=$scope.rates/$scope.countUsers;

    $scope.hoveringOver = function(value) {
        if (!$scope.isReadonly) {
            $scope.countUsers++;
            console.log($scope.countUsers + " " + value)
            $scope.arrUsers.push(value);
            console.log($scope.arrUsers);
            $scope.rates = $scope.arrUsers.reduce(function (sum, current) {
                return sum + current;
            }, 0);
            $scope.rez = $scope.rates / $scope.countUsers;
            console.log($scope.rates + " " + $scope.rez)
            $scope.isReadonly = true;
        };
    }


});