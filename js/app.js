angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // Root
      .state('root1', {
        url : '/root1',
        templateUrl : 'root1.html',
        controller : 'Root1Ctrl'
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
        controller : 'MenuCtrl'
      })
      .state('menu.page1', {
        url: '/page1',
        views: {
          'menu-view': {
            templateUrl: 'menu-page1.html',
            controller : 'MenuPage1Ctrl'
          }
        }
      })
      .state('menu.page2', {
        url: '/page2',
        views: {
          'menu-view': {
            templateUrl: 'menu-page2.html',
            controller : 'MenuPage2Ctrl'
          }
        }
      })


      // Tabs
      .state('tab', {
        url: '/tab',
        abstract:true,
        templateUrl: 'tabs-container.html',
        controller: 'TabsPageCtrl'
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
            controller: 'Tab2Page3Ctrl',
            resolve: {
              posts: function (ajaxService) {
                return ajaxService.getFrontPage();
              }
            }
          }
        }
      })
      .state('tab.tab3page1', {
        url: '/tab3page1',
        views: {
          'tab3': {
            templateUrl: 'tab3page1.html'
          }
        }
      })
      .state('tab.tab3page2', {
        url: '/tab3page2',
        views: {
          'tab3': {
            templateUrl: 'tab3page2.html'
          }
        }
      })
      .state('tab.tab3page3', {
        url: '/tab3page3',
        views: {
          'tab3': {
            templateUrl: 'tab3page3.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/root1');
  }])

  .controller('MenuCtrl', function($scope, $ionicActionSheet) {


  })

  .controller('MainCtrl', function($scope, $ionicPopup, $ionicActionSheet) {
    $scope.leftHeaderButtonClick = function() {
      $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive'
          },
        ]
      });
    };
    $scope.rightHeaderButtonClick = function() {
      $ionicActionSheet.show({
         destructiveText: 'Delete',
         titleText: 'Modify your album',
         cancelText: 'Cancel'
     });
    };
  })

  .controller('Root1Ctrl', function($scope, $state) {
    $scope.navTitle = 'Root 1';
  })

  .controller('MenuPage1Ctrl', function($scope) {
    $scope.navTitle = 'Menu: Page 1';
  })

  .controller('MenuPage2Ctrl', function($scope) {
    $scope.navTitle = 'Menu: Page 2';
  })

  .controller('TabsPageCtrl', function($scope) {

  })

  .controller('Tab2Page3Ctrl', function($scope, posts) {
    console.log(posts)
    $scope.posts = posts.data;
  })

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
