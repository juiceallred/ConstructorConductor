/*
  Your 3 Users will be the following.
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

  //code here
var user1 = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
console.log('Tyler\'s information is ');
console.log(user1);
//Console.log all of Tylers information

  //code here
var user2 = new User('Lenny', 'lenny@theLenster.com', 'iLoveLentilSoup');
console.log('Lenny\'s information is ');
console.log(user2);
//Now console.log all of Lennys information

  //code here
var user3 = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
  
//Now create another instance of User using your own information and then add that to your users array.
var user4 = new User('Justin', 'justin@justin.net', 'iAmSleepy');
  //code here
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);


console.log('All my users names are ');
//Now loop through your users Array and console.log every users name.
for (var i = 0; i < users.length; i++) {
  console.log(users[i].name);
}
  //code here
