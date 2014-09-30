angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // Root
      .state('entry', {
        url : '/entry',
        templateUrl : 'entry.html',
        controller : 'EntryPageController'
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
      .state('tab.first', {
        url: '/first',
        views: {
          'tab-first': {
            templateUrl: 'tab-first.html',
            controller: 'TabsFirstPageController'
          }
        }
      })
      .state('tab.first-child', {
        url: '/first/child',
        views: {
          'tab-first': {
            templateUrl: 'tab-first-child.html'
          }
        }
      })
      .state('tab.first-grandchild', {
        url: '/first/grandchild',
        views: {
          'tab-first': {
            templateUrl: 'tab-first-grandchild.html'
          }
        }
      })
      .state('tab.second', {
        url: '/second',
        views: {
          'tab-second': {
            controller:function($scope, message){
              $scope.testing = 'hi there';
              $scope.message = message;
            },
            resolve: {
              message: function (messageService) {
                return messageService.getMessage();
              }
            },
            templateUrl: 'tab-second.html'
          }
        }
      })
      .state('tab.second-child', {
        url: '/second/child',
        views: {
          'tab-second': {
            templateUrl: 'tab-second-child.html',
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
      .state('tab.second-grandchild', {
        url: '/second/grandchild',
        views: {
          'tab-second': {
            templateUrl: 'tab-second-grandchild.html',
            controller: 'TabsSecondGrandchildPageController',
            resolve: {
              posts: function (ajaxService) {
                return ajaxService.getFrontPage();
              }
            }
          }
        }
      });

    $urlRouterProvider.otherwise('/entry');
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

  .controller('EntryPageController', [ '$scope', '$state', function($scope) {
    $scope.navTitle = 'Entry Page';
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

  .controller('TabsFirstPageController', [ '$scope', '$state', function($scope) {
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
