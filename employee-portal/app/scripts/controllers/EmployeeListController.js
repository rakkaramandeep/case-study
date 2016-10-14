app.controller('EmployeeListController', EmployeeListController);
EmployeeListController.$injector = ['$scope', '$state', 'EmployeeListFactory', '$filter'];
function EmployeeListController($scope, $state, EmployeeListFactory, $filter) {
    var vm = this;
    vm.updateEmployee = updateEmployee;
    vm.filterEmployeeList = filterEmployeeList;
    vm.addEmployee = addEmployee;
    vm.employeeList =  EmployeeListFactory.employeeList;
    vm.deleteRow = deleteRow;

    function filterEmployeeList() {
        if(vm.filterText){
            vm.employeeList = $filter('filter')(EmployeeListFactory.employeeList, {employeeId:vm.filterText});
        }else {
            vm.employeeList =  EmployeeListFactory.employeeList;
        }
    }

    function deleteRow(employee){
        angular.forEach(vm.employeeList, function(val,i){
            if(val.employeeId == employee.employeeId){
                vm.employeeList.splice(i, 1);

            }
        })
        EmployeeListFactory.deleteEmployee(employee);


    }

    function addEmployee() {
        $state.go('employeeDetails', {id:"", edit:false});
    }

    function updateEmployee(employee) {
        $state.go('employeeDetails', {id:employee.employeeId, edit:true});
    }

}
