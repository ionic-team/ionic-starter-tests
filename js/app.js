angular.module('ionicApp', ['ionic'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('entry', {
        url : '/entry',
        templateUrl : 'entry.html',
        controller : 'EntryPageController'
      })
      .state('main', {
        url : '/main',
        templateUrl : 'mainContainer.html',
        abstract : true,
        controller : 'MainController'
      })
      .state('main.home', {
        url: '/home',
        views: {
          'main': {
            templateUrl: 'home.html',
            controller : 'HomePageController'
          }
        }
      })
      .state('main.info', {
        url: '/info',
        views: {
          'main': {
            templateUrl: 'info.html',
            controller : 'InfoPageController'
          }
        }
      })
      .state('tab', {
        url: '/tab',
        abstract:true,
        templateUrl: 'tab.html'
      })
      .state('tab.first', {
        url: '/first',
        views: {
          'tab-first': {
            templateUrl: 'tab-first.html'
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

    $urlRouterProvider.otherwise('/entry');
  }])

  .controller('MainController', [ '$scope', '$ionicActionSheet', function($scope, $ionicActionSheet) {

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

    $scope.signIn = function() {
      $state.go('main.home');
    }
  }])

  .controller('HomePageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Home Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.toggleMenu();
      }
    }];
  }])

  .controller('InfoPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Info Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.toggleMenu();
      }
    }];
  }])

  .controller('TabsPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.toggleMenu();
      }
    }];
  }])
  .controller('TabsFirstPageController', [ '$scope', '$state', function($scope, $state) {
    $scope.navTitle = 'Tab Page';

    $scope.leftButtons = [{
      type: 'button-icon icon ion-navicon',
      tap: function(e) {
        $scope.toggleMenu();
      }
    }];
  }])
