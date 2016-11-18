angular.module('projectDemo.centerPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'center',
    url:'/center',
    css:'app/pages/center/center.css',
    templateUrl:'app/pages/center/center.html',
    controller:'centerCtrl'
  })
 
})
