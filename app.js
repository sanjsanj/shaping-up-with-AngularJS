(function(){
  // var gem = { name: 'Azurite', price: '2.95' };
  var app = angular.module('gemstore', []);
  app.controller('StoreController', function(){
    this.product = gem;
  });
})();
