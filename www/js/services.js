angular.module('starter.services', [])

.factory('Talks', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var talks = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    status: 'Available'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    status: 'Offline'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    status: 'Available'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    status: 'Offline'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png',
    status: 'Available'
  }];

  return {
    all: function() {
      return talks;
    },
    remove: function(talk) {
      talks.splice(talks.indexOf(talk), 1);
    },
    get: function(talkId) {
      for (var i = 0; i < talks.length; i++) {
        if (talks[i].id === parseInt(talkId)) {
          return talks[i];
        }
      }
      return null;
    }
  };
});
