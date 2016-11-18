angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'app/pages/home/home.css',
    templateUrl:'app/pages/home/home.html',
    controller:'homeCtrl'
  })
  
})

