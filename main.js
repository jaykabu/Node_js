//console.log("hello world");

var users = {name:"jaykabutarwala",age:"23",email:"jaykabutarwala2@gmail.com"};
//console.log(users.name);

//anonymeous function

var person = function (a,b) {
    var c = b/a ;
    //console.log("addition of two number="+c);

};
person(10,20);


//arrow function

var name = "jaykabu";
var users =(a,b)=> {
    let c = a+b;
    // console.log("addition of two numbers= " +c);
};
users(20,30);

module.exports.abc = name;

//global objects

// console.log(__dirname);
// console.log(__filename);


var abc = (a,b)=> {
    var c= a+b;
console.log("addition of two numbers: "  + c)
};

abc(5,20);
console.log(abc);
