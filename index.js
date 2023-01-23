const employee = {
    key1: "Sam",
    key2: "12 Broadway"
  };

function updateEmployeeWithKeyAndValue(object, key, value) {
    const newObj = {...employee, [key]: value};
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...employee, [key]: value};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    const newObj = {...employee,};
    delete obj[key];
    return obj; 
}