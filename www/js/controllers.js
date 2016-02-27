angular.module('starter.controllers', [])

.controller('PeersCtrl', function($scope, Talks) {
  $scope.talks = Talks.all();
})

.controller('PeerDetailCtrl', function($scope, $stateParams, Talks) {
  $scope.talk = Talks.get($stateParams.talkId);
})

.controller('TalksCtrl', function($scope, Talks) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.talks = Talks.all();
  $scope.remove = function(talk) {
    Talks.remove(talk);
  };
})

.controller('TalkDetailCtrl', function($scope, $stateParams, Talks) {
  $scope.talk = Talks.get($stateParams.talkId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
