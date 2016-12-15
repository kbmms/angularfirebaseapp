'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = firebase.database().ref().child("messages");
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.messages = $firebaseArray(ref);


  $scope.addDespesas = function(){
  	console.log('adding contact');
  	$scope.messages.$add({
  		nome: $scope.nome,
  		email: $scope.email,
  		telefone: $scope.telefone
  	}).then(function(ref){
  		// var id = ref.key();
  		// console.log('adicionou' +id);

  		$scope.nome = '';
  		$scope.email = '';
  		$scope.telefone = '';
  	});
  }

  $scope.removePessoas = function(message){
  	$scope.messages.$remove(message);
  }
}]);