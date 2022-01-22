alert( " Welcome to ToDo Website ^_^ " );


var user = prompt("What is your Name ? ");
console.log(user);



var gen = prompt("What is your Gender ? ");
var gender = gen.toLowerCase();
if(gender == "male" || gender =="female")
    console.log(gender);
else
    alert("Invalid Input, you shoule choose male or female");

    

var age = prompt("What is your Age ? ");
    if( age > 0 )
        console.log(age);
    else if ( age <= 0 )
        alert(" the age is less than or equal to zero");



if (window.confirm("Do you really want to skip the welcoming message?"))
    window.open("index.html", "Thanks for Visiting!");
else
    alert(" Welcome Again! ");




if ( gender == "male" )
    alert ( "Welcome Mr" + " " + user );
else if (gender == "female")    
    alert ( "Welcome Ms" + " " + user );
    else
    alert ( "Welcome" + " " + user );