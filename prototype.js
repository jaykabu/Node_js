var student = function () {
    this.name= "jay";
    this.age = 23;
    this.email = "jay@gmail.com"
};

student.prototype = {
    address : "surat",
     hobby:"cricket",
    getName:function () {
    return this.name;
     return this.hobby;
    }

};
// var Stud = new student();
// console.log(Stud.getName());
//  console.log(Stud.address);
//  console.log(Stud.hobby);



 var abc = ()=>{
     this.name = "jay",
         this.age = 22,
         this.email = "jay@gmail.com"
 };
 abc.prototype = {
     address: "surat",
     getName:function () {
        return this.name;
         return this.hobby;
     }
 };

 var ABC = new abc();
 console.log(ABC.email);
