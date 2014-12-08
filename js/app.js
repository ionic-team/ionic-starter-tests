angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider, $compileProvider) {

  $compileProvider.debugInfoEnabled(false);
  //ionic.Platform.setPlatform('android');
  $ionicConfigProvider.views.transition('none');

   //$ionicConfigProvider.navBar.alignTitle('left');
  // $ionicConfigProvider.navBar.positionPrimaryButtons('right');
  // $ionicConfigProvider.navBar.positionSecondaryButtons('right');

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
          templateUrl : 'templates/root1.html' + rnd(),
          controller : 'Root1Ctrl'
        }
      }
    })
    .state('root2', {
      url : '/root2',
      views: {
        'root': {
          templateUrl : 'templates/root2.html' + rnd(),
          controller : 'Root2Ctrl'
        }
      }
    })
    .state('root3', {
      url : '/root3',
      views: {
        'root': {
          templateUrl : 'templates/root3.html' + rnd(),
          controller : 'Root3Ctrl'
        }
      }
    })
    .state('root4', {
      url : '/root4',
      views: {
        'root': {
          templateUrl : 'templates/root4.html' + rnd(),
          controller : 'Root4Ctrl'
        }
      }
    })
    .state('root5', {
      url : '/root5',
      views: {
        'root': {
          templateUrl : 'templates/root5.html' + rnd(),
          controller : 'Root5Ctrl'
        }
      }
    })
    .state('root6', {
      url : '/root6',
      views: {
        'root': {
          templateUrl : 'templates/root6.html' + rnd(),
          controller : 'Root6Ctrl'
        }
      }
    })
    .state('root7', {
      url : '/root7',
      views: {
        'root': {
          templateUrl : 'templates/root7.html' + rnd()
        }
      }
    })
    .state('root8', {
      url : '/root8',
      views: {
        'root': {
          templateUrl : 'templates/root8.html' + rnd(),
          controller: 'Root8Ctrl'
        }
      }
    })
    .state('slidebox1', {
      url : '/slidebox1',
      views: {
        'root': {
          templateUrl : 'templates/slidebox1.html' + rnd(),
          controller: 'Slidebox1Ctrl'
        }
      }
    })

    .state('random', {
      url : '/random',
      cache: false,
      views: {
        'root': {
          template : function() {
                    var r = Math.floor((Math.random() * 89999) + 10000);
                    return '<ion-view view-title="' + r + '">' +
                             '<ion-content>' +
                                '<h1>' + r + '</h1>' +
                                '<a class="item" ui-sref="root2" href="/root2">Root2</a>' +
                              '</ion-content>' +
                            '</ion-view>' }
        },
      },
    })


    // Menus
    .state('menu', {
      url : '/menu',
      views: {
        'root': {
          templateUrl : 'templates/menu-container.html' + rnd(),
        }
      },
      abstract : true
    })
    .state('menu.page1', {
      url: '/page1',
      views: {
        'menu-view': {
          templateUrl: 'templates/menu-page1.html' + rnd(),
          controller : 'MenuPage1Ctrl'
        }
      }
    })
    .state('menu.page2', {
      url: '/page2',
      views: {
        'menu-view': {
          templateUrl: 'templates/menu-page2.html' + rnd(),
          controller : 'MenuPage2Ctrl'
        }
      }
    })
    .state('menu.page3', {
      url: '/page3',
      views: {
        'menu-view': {
          templateUrl: 'templates/menu-page3.html' + rnd()
        }
      }
    })


    // Menu2
    .state('menu2', {
      url : '/menu2',
      views: {
        'root': {
          templateUrl : 'templates/menu2-container.html' + rnd(),
        }
      },
      abstract : true
    })
    .state('menu2.page1', {
      url: '/page1',
      views: {
        'menu2-view': {
          templateUrl: 'templates/menu2-page1.html' + rnd(),
          controller : 'Menu2Page1Ctrl'
        }
      }
    })
    .state('menu2.page2', {
      url: '/page2',
      views: {
        'menu2-view': {
          templateUrl: 'templates/menu2-page2.html' + rnd()
        }
      }
    })
    .state('menu2.page3', {
      url: '/page3',
      views: {
        'menu2-view': {
          templateUrl: 'templates/menu2-page3.html' + rnd()
        }
      }
    })


    // Tabs
    .state('roottab', {
      url: '/roottab',
      abstract:true,
      views: {
        'root': {
          templateUrl : 'templates/roottabs-container.html' + rnd()
        }
      }
    })
    .state('roottab.tab1page1', {
      url: '/roottab1page1',
      views: {
        'roottab1': {
          templateUrl: 'templates/roottab1page1.html' + rnd()
        }
      }
    })
    .state('roottab.tab1page2', {
      url: '/roottab1page2',
      views: {
        'roottab1': {
          templateUrl: 'templates/roottab1page2.html' + rnd()
        }
      }
    })
    .state('roottab.tab1page3', {
      url: '/roottab1page3',
      views: {
        'roottab1': {
          templateUrl: 'templates/roottab1page3.html' + rnd()
        }
      }
    })
    .state('roottab.tab2page1', {
      url: '/roottab2page1',
      views: {
        'roottab2': {
          templateUrl: 'templates/roottab2page1.html' + rnd()
        }
      }
    })
    .state('roottab.tab2page2', {
      url: '/roottab2page2',
      views: {
        'roottab2': {
          templateUrl: 'templates/roottab2page2.html' + rnd()
        }
      }
    })
    .state('roottab.tab2page3', {
      url: '/roottab2page3',
      views: {
        'roottab2': {
          templateUrl: 'templates/roottab2page3.html' + rnd()
        }
      }
    })
    .state('roottab.tab3page1', {
      url: '/roottab3page1',
      views: {
        'roottab3': {
          templateUrl: 'templates/roottab3page1.html' + rnd()
        }
      }
    })
    .state('roottab.tab3page2', {
      url: '/roottab3page2',
      views: {
        'roottab3': {
          templateUrl: 'templates/roottab3page2.html' + rnd()
        }
      }
    })
    .state('roottab.tab3page3', {
      cache: false,
      url: '/troottab3page3',
      views: {
        'roottab3': {
          templateUrl: 'templates/roottab3page3.html' + rnd()
        }
      }
    })


    // Tabs nested in ion-view
    .state('tab', {
      url: '/tab',
      abstract:true,
      views: {
        'root': {
          templateUrl : 'templates/tabs-container.html' + rnd(),
          controller: 'TabsPageCtrl'
        }
      }
    })
    .state('tab.tab1page1', {
      url: '/tab1page1',
      views: {
        'tab1': {
          templateUrl: 'templates/tab1page1.html' + rnd(),
          controller: function($scope, $ionicTabsDelegate){
            $scope.selectTab = function(index) {
              $ionicTabsDelegate.select(index);
            }
          }
        }
      }
    })
    .state('tab.tab1page2', {
      url: '/tab1page2',
      views: {
        'tab1': {
          templateUrl: 'templates/tab1page2.html' + rnd()
        }
      }
    })
    .state('tab.tab1page3', {
      url: '/tab1page3',
      views: {
        'tab1': {
          templateUrl: 'templates/tab1page3.html' + rnd()
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
          templateUrl: 'templates/tab2page1.html' + rnd()
        }
      }
    })
    .state('tab.tab2page2', {
      url: '/tab2page2',
      views: {
        'tab2': {
          templateUrl: 'templates/tab2page2.html' + rnd(),
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
          templateUrl: 'templates/tab2page3.html' + rnd(),
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
          templateUrl: 'templates/tab3page1.html' + rnd()
        }
      }
    })
    .state('tab.tab3page2', {
      url: '/tab3page2',
      views: {
        'tab3': {
          templateUrl: 'templates/tab3page2.html' + rnd()
        }
      }
    })
    .state('tab.tab3page3', {
      cache: false,
      url: '/tab3page3',
      views: {
        'tab3': {
          templateUrl: 'templates/tab3page3.html' + rnd()
        }
      }
    });

  $urlRouterProvider.otherwise('/root1');

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

.controller('Root1Ctrl', function($scope, $ionicModal, $ionicScrollDelegate, $timeout, $ionicHistory) {
  $scope.navTitle = 'Root 1';

  $ionicModal.fromTemplateUrl('templates/modal.html' + rnd(), {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.scrollToTop = function() {
    var instance = $ionicScrollDelegate.$getByHandle('root1-scroll-handle');
    instance.scrollTop(true);
  };

  $scope.scrollToBottom = function() {
    var instance = $ionicScrollDelegate.$getByHandle('root1-scroll-handle');
    instance.scrollBottom(true);
  };

  $scope.scopeUpdate = 0;
  scopeUpdater()

  function scopeUpdater() {
    $timeout(function(){
      $scope.scopeUpdate++;
      //console.log('$scope.scopeUpdate', $scope.scopeUpdate);
      scopeUpdater()
    }, 1000);
  }

  $scope.clearCache = function() {
    $ionicHistory.clearCache();
  };

})

.controller('Root2Ctrl', function($scope, $state, $ionicActionSheet, $ionicHistory) {
  $scope.navTitle = 'Root 2';
  $scope.root2BtnText = 'R2 Primary'
  $scope.root2PrimaryButton = function() {
    $ionicActionSheet.show({
       titleText: 'Root 2 Primary',
       cancelText: 'Cancel Root 2 Primary'
   });
  };

  $scope.clearCache = function() {
    $ionicHistory.clearCache();
  };
})

.controller('Root3Ctrl', function($scope, $state, $ionicActionSheet, $ionicHistory) {
  $scope.root3BtnText = 'R3 Secondary'
  $scope.root3SecondaryButton = function() {
    $ionicActionSheet.show({
       titleText: 'Root 3 Secondary',
       cancelText: 'Cancel Root 3 Secondary'
   });
  };

  $scope.myTitle = "3";
  $scope.hideBackButton = false;
  $scope.hideNavBar = false;

  $scope.changeTitle = function() {
    $scope.myTitle = Math.floor(Math.random() * 1000000);
  };

  $scope.toggleBackButton = function() {
    $scope.hideBackButton = !$scope.hideBackButton;
  };

  $scope.toggleNavBar = function() {
    $scope.hideNavBar = !$scope.hideNavBar;
  };

  $scope.clearCache = function() {
    $ionicHistory.clearCache();
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

.controller('Root5Ctrl', function($scope, $state, $ionicNavBarDelegate) {

  $scope.myTitle = 'Root 5: This is title came from $ionicNavBarDelegate.title() in $ionicView.beforeEnter';

})

.controller('Root6Ctrl', function($scope) {

})

.controller('Root8Ctrl', function($scope, $timeout) {

  function update() {
    $scope.titleUpdate++
    $timeout(function(){
      update()
    }, 1000);
  }

  $scope.titleUpdate = 0;
  update();

})

.controller('Slidebox1Ctrl', function($scope, $state, $ionicSlideBoxDelegate, $timeout) {

  $timeout(function(){
    $ionicSlideBoxDelegate.select(2)
  })

})

.controller('MenuPage1Ctrl', function($scope, $ionicSideMenuDelegate) {
  $scope.navTitle = 'Menu: Page 1';
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('MenuPage2Ctrl', function($scope) {
  $scope.navTitle = 'Menu: Page 2';
})

.controller('Menu2Page1Ctrl', function($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
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

.directive('searchBar', function() {
  return {
    restrict: 'E',
    replace: true,
    require: '?ngModel',
    scope: {
      model: '=?',
      focused: '=?',
      submit: '&',
      clear: '&'
    },
    template:
      '<form class="bar bar-header bar-energized item-input-inset" ng-submit="submit()">' +
        '<div class="item-input-wrapper energized-bg" ng-class="focused" ng-click="focus()">' +
          '<i class="icon ion-ios7-search placeholder-icon"></i>' +
          '<input type="search"' +
            'id="searchInput"' +
            'placeholder="Search"' +
            'ng-model="model"' +
            'ng-focus="focused = \'text-left\'"' +
            'ng-blur="focused = model.length?\'left\':\'centered\'">' +
          '</div>' +
          '<i class="icon ion-ios7-close dark" ng-show="model.length" ng-click="clear()"></i>' +
      '</form>',
    link: function(scope, elem, attrs, $document){
      scope.focus = function(){
        document.getElementById('searchInput').focus()
      }
    }
  };
});


function rnd() {
  return '?' +  Math.floor((Math.random() * 89999) + 10000);
}
