app.controller('LoginController', LoginController);
LoginController.$injector = ['$scope', '$state'];
function LoginController($scope, $state) {
    var vm = this;
    vm.login = login;
    vm.cancel = cancel;

    function login(form) {
        if(form.$valid){
            $state.go("employeeList");
        }
    }

    function cancel() {
        window.top.close();
    }
}