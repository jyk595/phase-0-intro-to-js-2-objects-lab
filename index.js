// Write your solution in this file!

const employee = {
    name : "Joe",
    streetAddress : "12 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key] : value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key) {
    const newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     const newObj = Object.assign(employee, {[key] : value}); 

//     return newObj
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const anotherNewObj = delete employee.key;

//     return anotherNewObj;
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     employee = delete employee.key
    
//     return employee
// }



