let obj ={
    name:"sara",
    age:7
}

console.log(obj);
console.log(obj.name);
console.log(obj.age);
let  jsonObj =JSON.stringify(obj)
console.log(jsonObj);
console.log(jsonObj.name);

let returnObj = JSON.parse(jsonObj)
console.log(returnObj);
console.log(returnObj.age);

