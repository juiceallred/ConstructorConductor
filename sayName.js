//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
  this.name = name;
  this.age = age;
  this.sayName = function (sayMyName) {
    alert(this.name);
  }
}

//Now create three instances of Person with data you make up

  //code here
var person1 = new Person('Justin', 29);
var person2 = new Person('Sam', 27);
var person3 = new Person('Shannon', 26);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
