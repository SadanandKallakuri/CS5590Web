/**
 * Created by sadan on 2/1/2018.
 */
var app=angular.module("Course",[]);
app.controller("Coursecontroller",function ($scope,$http) {
    $scope.nn = function () {
        console.log(5 + 6);
        $scope.tempe = data.main.temp;

        $scope.pressure = data.main.pressure;
        $scope.humidity = data.main.humidity;
        $scope.minTemp = data.main.temp_min;
        $scope.maxTemp = data.main.temp_max;
        $scope.windSpeed = data.wind.speed;
        $scope.visibility = data.visibility;
        $scope.icon = data.weather.main;


    }
        })
