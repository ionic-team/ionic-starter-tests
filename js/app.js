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
        templateUrl: 'tab.html',
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
            templateUrl: 'tab-second.html'
          }
        }
      })
      .state('tab.second-child', {
        url: '/second/child',
        views: {
          'tab-second': {
            templateUrl: 'tab-second-child.html'
          }
        }
      })
      .state('tab.second-grandchild', {
        url: '/second/grandchild',
        views: {
          'tab-second': {
            templateUrl: 'tab-second-grandchild.html'
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

  .controller('EntryPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Entry Page';
  }])

  .controller('MenuHomeController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Menu Home Page';
  }])

  .controller('MenuInfoController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Menu Info Page';
  }])

  .controller('TabsPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';
  }])

  .controller('TabsFirstPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';
  }]);
