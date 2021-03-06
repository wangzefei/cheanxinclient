var authors = angular.module('main', []);

authors.controller('MainController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {

    $scope.$watch('$viewContentLoaded', function() {
        var winWid=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var winHei=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        var frameLeftWid=$('.frameLeft').width();
        var headerHei=$('.header').height();
        var breadHei=$('.bread').height();
        console.log("aaa");
        $('.frameRight').css({'width':(winWid-frameLeftWid)+'px'});
        $('.mainContent').css({'height':(winHei-headerHei)+'px'});
        $('.frameBox').css({'height':(winHei-headerHei-breadHei)+'px'});
    });

    $scope.manManagement = function () {//切换到人员管理页面
        console.log("manManagement");
        $state.go("main.manmanagement");
    };
    $scope.productManagement =function () {
        $state.go("main.productmanagement");
    };
    $scope.subProductManagement =function () {
        $state.go("main.subproductmanagement");
    };
    $scope.positionManagement =function () {
        $state.go("main.positionmanagement");
    };
    $scope.deptManagement = function () {
        $state.go("main.deptmanagement");
    };
    $scope.LoanPreliminary = function () {
        $state.go("main.loanpreliminary");
    };
    $scope.setPricing = function () {
        $state.go("main.carpricinglist");
    };
    $scope.loanRecheck = function () {
        $state.go("main.loanrecheck");
    };



}]);