app.controller('HeaderController',HeaderController);

HeaderController.$injector = ['$scope'];
function HeaderController($scope){
    var vm = this;


    $scope.$on('$stateChangeSuccess', function(event, tostate){
        vm.url = tostate.url;
    })
}
