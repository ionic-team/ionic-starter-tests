angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    //$ionicConfigProvider.views.transition('android-transition');
    $ionicConfigProvider.platform.ios.menus.transition('ios-whatnot');

    $ionicConfigProvider.setPlatformConfig('win32', {
      views: {
        transition: 'win32-transition'
      },
      navBar: {
        alignTitle: 'right',
        alignButtons: 'left',
        backButtonIcon: 'ion-win32-arrow-back',
        transition: 'win32-nav-bar'
      },
      menus: {
        transition: 'win32-menu'
      }
    });

    $stateProvider

      // Root
      .state('root1', {
        url : '/root1',
        views: {
          'root': {
            templateUrl : 'root1.html',
            controller : 'Root1Ctrl'
          }
        }
      })
      .state('root2', {
        url : '/root2',
        views: {
          'root': {
            templateUrl : 'root2.html',
            controller : 'Root2Ctrl'
          }
        }
      })
      .state('root3', {
        url : '/root3',
        views: {
          'root': {
            templateUrl : 'root3.html',
            controller : 'Root3Ctrl'
          }
        }
      })
      .state('root4', {
        url : '/root4',
        views: {
          'root': {
            templateUrl : 'root4.html',
            controller : 'Root4Ctrl'
          }
        }
      })
      .state('root5', {
        url : '/root5',
        views: {
          'root': {
            templateUrl : 'root5.html',
            controller : 'Root5Ctrl'
          }
        }
      })


      // Menus
      .state('menu', {
        url : '/menu',
        views: {
          'root': {
            templateUrl : 'menu-container.html',
          }
        },
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
      .state('menu.page3', {
        url: '/page3',
        views: {
          'menu-view': {
            templateUrl: 'menu-page3.html'
          }
        }
      })


      // Tabs
      .state('roottab', {
        url: '/roottab',
        abstract:true,
        views: {
          'root': {
            templateUrl : 'roottabs-container.html'
          }
        }
      })
      .state('roottab.tab1page1', {
        url: '/roottab1page1',
        views: {
          'roottab1': {
            templateUrl: 'roottab1page1.html'
          }
        }
      })
      .state('roottab.tab1page2', {
        url: '/roottab1page2',
        views: {
          'roottab1': {
            templateUrl: 'roottab1page2.html'
          }
        }
      })
      .state('roottab.tab1page3', {
        url: '/roottab1page3',
        views: {
          'roottab1': {
            templateUrl: 'roottab1page3.html'
          }
        }
      })
      .state('roottab.tab2page1', {
        url: '/roottab2page1',
        views: {
          'roottab2': {
            templateUrl: 'roottab2page1.html'
          }
        }
      })
      .state('roottab.tab2page2', {
        url: '/roottab2page2',
        views: {
          'roottab2': {
            templateUrl: 'roottab2page2.html'
          }
        }
      })
      .state('roottab.tab2page3', {
        url: '/roottab2page3',
        views: {
          'roottab2': {
            templateUrl: 'roottab2page3.html'
          }
        }
      })
      .state('roottab.tab3page1', {
        url: '/roottab3page1',
        views: {
          'roottab3': {
            templateUrl: 'roottab3page1.html'
          }
        }
      })
      .state('roottab.tab3page2', {
        url: '/roottab3page2',
        views: {
          'roottab3': {
            templateUrl: 'roottab3page2.html'
          }
        }
      })
      .state('roottab.tab3page3', {
        url: '/troottab3page3',
        views: {
          'roottab3': {
            templateUrl: 'roottab3page3.html'
          }
        }
      })


      // Tabs nested in ion-view
      .state('tab', {
        url: '/tab',
        abstract:true,
        views: {
          'root': {
            templateUrl : 'tabs-container.html',
            controller: 'TabsPageCtrl'
          }
        }
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
    $scope.defaultPrimaryButtonClick = function() {
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
    $scope.defaultSecondaryButtonClick = function() {
      $ionicActionSheet.show({
         titleText: 'Nav Bar Default Secondary',
         cancelText: 'Cancel Nav Bar Default Secondary'
     });
    };
  })

  .controller('Root1Ctrl', function($scope, $state) {
    $scope.navTitle = 'Root 1';
  })

  .controller('Root2Ctrl', function($scope, $state, $ionicActionSheet) {
    $scope.navTitle = 'Root 2';
    $scope.root2BtnText = 'R2 Primary'
    $scope.root2PrimaryButton = function() {
      $ionicActionSheet.show({
         titleText: 'Root 2 Primary',
         cancelText: 'Cancel Root 2 Primary'
     });
    };
  })

  .controller('Root3Ctrl', function($scope, $state, $ionicActionSheet) {
    $scope.root3BtnText = 'R3 Secondary'
    $scope.root3SecondaryButton = function() {
      $ionicActionSheet.show({
         titleText: 'Root 3 Secondary',
         cancelText: 'Cancel Root 3 Secondary'
     });
    };
  })

  .controller('Root4Ctrl', function($scope, $state, $ionicActionSheet) {
    $scope.root4PrimaryBtnText = 'R4 Primary'
    $scope.root4PrimaryButton = function() {
      $ionicActionSheet.show({
         titleText: 'Root 4 Primary',
         cancelText: 'Cancel Root 4 Primary'
     });
    };

    $scope.root4SecondaryBtnText = 'R4 Secondary'
    $scope.root4SecondaryButton = function() {
      $ionicActionSheet.show({
         titleText: 'Root 4 Secondary',
         cancelText: 'Cancel Root 4 Secondary'
     });
    };
  })

  .controller('Root5Ctrl', function($scope, $state, $ionicActionSheet) {

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
