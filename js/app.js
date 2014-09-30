angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // Root
      .state('root', {
        url : '/root',
        templateUrl : 'root.html',
        controller : 'RootController'
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
            templateUrl: 'tab2page1.html'
          }
        }
      })
      .state('tab.tab2page2', {
        url: '/tab2page2',
        views: {
          'tab2': {
            templateUrl: 'tab2page2.html'
          }
        }
      })
      .state('tab.tab2page3', {
        url: '/tab2page3',
        views: {
          'tab2': {
            templateUrl: 'tab2page3.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/root');
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

  .controller('RootController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Root Page';
  }])

  .controller('MenuHomeController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Menu Home Page';
  }])

  .controller('MenuInfoController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Menu Info Page';
  }])

  .controller('TabsPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';
  }]);
