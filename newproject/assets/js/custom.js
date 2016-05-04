"use strict";

// jQuery start here 

$(document).ready(function () {

    $('#listBtn1').click(function () {
        $(this).hide();
        $('#listBtn2').show();
        $('.sidebar').hide();
        $('.main-container').css('margin-left', '0px');
    });

    $('#listBtn2').click(function () {
        $(this).hide();
        $('#listBtn1').show();
        $('.sidebar').show();
        $('.main-container').css('margin-left', '270px');
    });

    $(window).resize(function () {
        $('#windowsize').val($(window).width());
    });

    if ($("body").height() > $(window).height()) {

        var mainContainer = $('.inner-container').height();
        $('.sidebar').height(mainContainer);
        console.log('01');
        //alert(mainContainer);
    } else {
        var winHight = $(window).height();
        $('.sidebar').height(winHight);
        console.log('02');

    }
    $('.menu li').click(function () {
        $('#pageHeading').text($(this).text());

    });

});

// Angularjs start here!

var app = angular.module('myApp', ['ngRoute']);


// Configure routing for the application
app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'templates/dasboard.html'
        })

    .when('/Resource Allocation', {
        templateUrl: 'templates/resource-allocation.html'
    })

    .when('/SMART', {
            templateUrl: 'templates/SMART.html'
        })
        .when('/Cogitate Team Section', {
            templateUrl: 'templates/cogitate-team-section.html'
        })
        .when('/Project Owner', {
            templateUrl: 'templates/project-owner.html'
        })
        .when('/Code Review', {
            templateUrl: 'templates/code-review.html'
        })
        .when('/Leave Section', {
            templateUrl: 'templates/leave-section.html'
        });
});



app.controller('LatestStatistics', function ($scope, $http) {
    $http.get("LatestStatistics.json").then(function (response) {
        $scope.names = response.data.records;
    });




});