angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // Root
      .state('root1', {
        url : '/root1',
        templateUrl : 'root1.html',
        controller : 'Root1Controller'
      })
      .state('root2', {
        url : '/root2',
        templateUrl : 'root2.html'
      })
      .state('root3', {
        url : '/root3',
        templateUrl : 'root3.html'
      })
      .state('root4', {
        url : '/root4',
        templateUrl : 'root4.html'
      })


      // Menus
      .state('menu', {
        url : '/menu',
        templateUrl : 'menu-container.html',
        abstract : true,
        controller : 'MenuController'
      })
      .state('menu.home', {
        url: '/home',
        views: {
          'menu-view': {
            templateUrl: 'menu-home.html',
            controller : 'MenuHomeController'
          }
        }
      })
      .state('menu.info', {
        url: '/info',
        views: {
          'menu-view': {
            templateUrl: 'menu-info.html',
            controller : 'MenuInfoController'
          }
        }
      })


      // Tabs
      .state('tab', {
        url: '/tab',
        abstract:true,
        templateUrl: 'tabs-container.html',
        controller: 'TabsPageController'
      })
      .state('tab.tab1page1', {
        url: '/tab1page1',
        views: {
          'tab1': {
            templateUrl: 'tab1page1.html'
          }
        }
      })
      .state('tab.tab1page2', {
        url: '/tab1page2',
        views: {
          'tab1': {
            templateUrl: 'tab1page2.html'
          }
        }
      })
      .state('tab.tab1page3', {
        url: '/tab1page3',
        views: {
          'tab1': {
            templateUrl: 'tab1page3.html'
          }
        }
      })
      .state('tab.tab2page1', {
        url: '/tab2page1',
        views: {
          'tab2': {
            controller:function($scope, message){
              $scope.testing = 'hi there';
              $scope.message = message;
            },
            resolve: {
              message: function (messageService) {
                return messageService.getMessage();
              }
            },
            templateUrl: 'tab2page1.html'
          }
        }
      })
      .state('tab.tab2page2', {
        url: '/tab2page2',
        views: {
          'tab2': {
            templateUrl: 'tab2page2.html',
            controller:function($scope, ipsum){
              $scope.ipsum = ipsum.data.text;
              console.log(ipsum)
            },
            resolve: {
              ipsum: function (ajaxService) {
                return ajaxService.getHipsterIpsum();
              }
            },
          }
        }
      })
      .state('tab.tab2page3', {
        url: '/tab2page3',
        views: {
          'tab2': {
            templateUrl: 'tab2page3.html',
            controller: 'TabsSecondGrandchildPageController',
            resolve: {
              posts: function (ajaxService) {
                return ajaxService.getFrontPage();
              }
            }
          }
        }
      });

    $urlRouterProvider.otherwise('/root1');
  }])

  .controller('MenuController', [ '$scope', '$ionicActionSheet', function($scope, $ionicActionSheet) {

    $scope.rightHeaderButtonClick = function() {
      $ionicActionSheet.show({
         destructiveText: 'Delete',
         titleText: 'Modify your album',
         cancelText: 'Cancel'
     });
    };

  }])

  .controller('Root1Controller', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Root1 Page';
  }])

  .controller('MenuHomeController', [ '$scope', '$state', function($scope) {
    $scope.navTitle = 'Menu Home Page';
  }])

  .controller('MenuInfoController', [ '$scope', '$state', function($scope) {
    $scope.navTitle = 'Menu Info Page';
  }])

  .controller('TabsPageController', [ '$scope', '$state', function($scope) {
    $scope.navTitle = 'Tab Page';
  }])

  .controller('TabsFirstPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';
  }])

  .controller('TabsSecondGrandchildPageController', [ '$scope', 'posts', function($scope, posts) {
    console.log(posts)
    $scope.posts = posts.data;
  }])

  .factory("messageService", function($q){
    return {
      getMessage: function(){
        return $q.when("Hello From the messageService");
      }
    };
  })
  .factory("ajaxService", function($q, $http){
    return {
      getFrontPage: function(){
        return $http.get('http://hn-api.ionic.io/frontpage/1');
      },
      getHipsterIpsum: function(){
        return $http.get('http://hipsterjesus.com/api/?paras=99');
      }
    };
  })

;
