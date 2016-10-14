app.controller('EmployeeDetailsController', EmployeeDetailsController);
EmployeeDetailsController.$injector = ['$scope','$state', 'EmployeeListFactory', '$stateParams', '$filter'];
function EmployeeDetailsController($scope, $state, EmployeeListFactory, $stateParams, $filter){
    var vm = this;
    vm.employee = {};
    vm.updateEmployee = updateEmployee;
    vm.cancel = cancel;
    vm.altInputFormats = ['M!/d!/yyyy'];
    vm.employeeList = EmployeeListFactory.employeeList;
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    vm.format = 'dd-MMMM-yyyy';
    if($stateParams.edit == 'true') {
        vm.mode = "Update Employee";
        vm.employee = $filter('filter')(vm.employeeList, {employeeId:$stateParams.id})[0];
    }else{
        vm.mode = "Add Employee";
    }

    function cancel() {
        $state.go("employeeList");
    }
    function _calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    function updateEmployee(form){
        if(form.$valid) {
            if ($stateParams.edit == 'true') {
                vm.employee.age = _calculateAge(vm.employee.dateofbirth);
                EmployeeListFactory.updateEmployee(vm.employee, true)
            } else {
                vm.employee.uniqueId = vm.employeeList.length + 1;
                vm.employee.age = _calculateAge(vm.employee.dateofbirth);
                console.log(vm.employeeList.age)
                EmployeeListFactory.updateEmployee(vm.employee, false);
            }

            $state.go("employeeList");
        }
    }
}
