/**
 * Created by sadan on 1/31/2017.
 */

var app=angular.module("Weather1",[]);
app.controller("Weathercontroller",function ($scope,$http) {
    $scope.weather1 = function () {
        var topic1 = document.getElementById('topic').value;

        var source1 = document.getElementById('source').value;

        console.log(topic1);
        console.log(source1);

        $http.get('https://newsapi.org/v2/everything?q='+topic1+'&sources='+source1+'&apiKey=9ec605e53294411dacf352f8df7da053').success(function (data) {
            console.log(5+6);
            $scope.headline=data.articles[0].title;
            $scope.time=data.articles[0].publishedAt;
            $scope.image=data.articles[0].urlToImage;
            $scope.content=data.articles[0].url;

            $scope.headline1=data.articles[1].title;
            $scope.time1=data.articles[1].publishedAt;
            $scope.image1=data.articles[1].urlToImage;
            $scope.content1=data.articles[1].url;

            $scope.headline2=data.articles[2].title;
            $scope.time2=data.articles[2].publishedAt;
            $scope.image2=data.articles[2].urlToImage;
            $scope.content2=data.articles[2].url;

            $scope.headline3=data.articles[3].title;
            $scope.time3=data.articles[3].publishedAt;
            $scope.image3=data.articles[3].urlToImage;
            $scope.content3=data.articles[3].url;

            $scope.headline4=data.articles[4].title;
            $scope.time4=data.articles[4].publishedAt;
            $scope.image4=data.articles[4].urlToImage;
            $scope.content4=data.articles[4].url;

            $scope.headline5=data.articles[5].title;
            $scope.time5=data.articles[5].publishedAt;
            $scope.image5=data.articles[5].urlToImage;
            $scope.content5=data.articles[5].url;



console.log(4)


        })


    }
})
