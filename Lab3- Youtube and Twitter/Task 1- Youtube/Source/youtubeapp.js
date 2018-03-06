/**
 * Created by sadan on 2/13/2018.
 */

var app=angular.module("Youtube",[]);
app.controller("Youtubecontroller",function ($scope,$http) {
$scope.vList=new Array();
    $scope.news = function () {
        var keyword1 = document.getElementById('keyword').value;


        console.log(keyword1);

        $http.get('https://www.googleapis.com/youtube/v3/search/?q='+keyword1+'&maxResults=25&part=snippet&key=AIzaSyCBJCnrdul_dH_8aY4iIhepDx-buSj8PIg&videoDuration=any').success(function (data) {
            console.log(5+6);

             $scope.vid=data.items[0].snippet.title;
            $scope.vid1=data.items[1].snippet.title;
            $scope.vid2=data.items[2].snippet.title;
            $scope.vid3=data.items[3].snippet.title;
            $scope.vid4=data.items[4].snippet.title;
            $scope.time=data.items[0].snippet.publishedAt;
            $scope.time1=data.items[1].snippet.publishedAt;
            $scope.time2=data.items[2].snippet.publishedAt;
            $scope.time3=data.items[3].snippet.publishedAt;
            $scope.time4=data.items[4].snippet.publishedAt;

            console.log(2);
            for (var i=0; i<5; i++) {
                var vide = data.items[i].id.videoId;

                console.log(vide);
                $scope.vList[i]={
                    "vid":data.items[i].snippet.title,
                    "time":data.items[i].snippet.publishedAt,
                    "videourl":'https://www.youtube.com/embed/'+vide,
                };
            }
        })
    }
});
