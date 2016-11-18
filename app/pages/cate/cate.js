angular.module('projectDemo.catePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'cate',
    url:'/cate',
    css:'app/pages/cate/cate.css',
    templateUrl:'app/pages/cate/cate.html',
    controller:'cateCtrl'
  })
  
})
