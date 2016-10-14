
app.factory('EmployeeListFactory', EmployeeListFactory);
function EmployeeListFactory(){
    var empFactory = {};
    empFactory.updateEmployee = updateEmployee;
    empFactory.deleteEmployee = deleteEmployee;
    empFactory.employeeList = [
        {
            employeeId:45611,
            firstName:"john",
            middleName:"",
            lastName:"dawn",
            age:"36",
            dateofbirth:new Date("12/12/1980"),
            uniqueId:1
        },
        {
            employeeId:45612,
            firstName:"lin",
            middleName:"",
            lastName:"jack",
            age:"38",
            dateofbirth:new Date("12/12/1978"),
            uniqueId:2
        },
        {
            employeeId:45613,
            firstName:"johny",
            middleName:"",
            lastName:"bristo",
            age:"35",
            dateofbirth:new Date("12/12/1981"),
            uniqueId:3
        },
        {
            employeeId:45614,
            firstName:"john",
            lastName:"lille",
            middleName:"",
            age:"31",
            dateofbirth:new Date("12/12/1985"),
            uniqueId:4
        },
        {
            employeeId:45615,
            firstName:"mills",
            middleName:"",
            lastName:"man",
            age:"46",
            dateofbirth:new Date("12/12/1970"),
            uniqueId:5
        }
    ];

    function deleteEmployee(obj){
        angular.forEach(empFactory.employeeList, function(val,i){
            if(val.employeeId == obj.employeeId){
                empFactory.employeeList.splice(i, 1);
            }
        })
    }

    function updateEmployee(obj, flag){
        if(flag){
            angular.forEach(empFactory.employeeList, function(val,i){
                if( obj.uniqueId == val.uniqueId ){
                    empFactory.employeeList[i] = obj;
                }
            });
        }else{
            empFactory.employeeList.push(obj);
        }
    }

  return empFactory;

}
