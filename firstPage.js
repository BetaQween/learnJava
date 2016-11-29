/**
 * Created by Liza on 9/12/2016.
 */
'use strict';

angular.module('myApp.firstPage', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/firstPage', {
            templateUrl: 'view/firstPage/firstPage.html',
            controller: 'FirstPageCtrl'
        });
    }])

    .controller('FirstPageCtrl', function($scope, $http, $rootScope) {

        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(31.3000, 34.4500),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var url = 'http://localhost:3000/mechanics';
        var url1 = 'http://localhost:3000/mounting';
        var url2 = 'http://localhost:3000/carWash';
        var url3 = 'http://localhost:3000/towTruck';
        $http.get(url).
            success(function(data){
                for (var i = 0; i < data.length; i++){
                    createMarker(data[i]);
                }
            });
        $http.get(url1).
            success(function(data){
                for (var i = 0; i < data.length; i++){
                    createMarker(data[i]);
                }
            })
        $http.get(url2).
            success(function(data){
                for (var i = 0; i < data.length; i++){
                    createMarker(data[i]);
                }
            })
        $http.get(url3).
            success(function(data){
                for (var i = 0; i < data.length; i++){
                    createMarker(data[i]);
                }
            })

        var createMarker = function (info){
            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.chosenPlace.Latitude, info.chosenPlace.Longitude)
            });
            var infowindow = new google.maps.InfoWindow({
                content: '<h3>'+ info.companyName +'</h3>'+'</br>'+
                '<div>'+ info.cars +'</div>'+'</br>'+
                '<button id="'+info.id+'">'+ 'View' +'</button>'
            });

            google.maps.event.addListener(infowindow,'domready',function(){
                $('#'+info.id).click(function() {
                    alert(this.id)
                });
            });

            marker.addListener('click', function() {
              infowindow.open($scope.map, marker);
            });
            

                $scope.markers.push(marker);
            };

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        };


    })


