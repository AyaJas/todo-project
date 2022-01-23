//Solution For Task #5


alert( " Welcome to ToDo Website ^_^ " );


var userName = prompt("What is your Name ? ");
console.log(userName);



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
    alert ( "Welcome Mr" + " " + userName );
else if (gender == "female")    
    alert ( "Welcome Ms" + " " + userName );
    else
    alert ( "Welcome" + " " + userName );






//Solution For Task #6 



function emptyCondition(answer)
{
    while(answer == "" )
    {
            alert("The Input of Question is Invalid");
            var answer = prompt("Please Enter your Answer by (yes/No/y/n)");
    }
}



function checkConditions(answer)
{
    if (answer == "yes" || answer =="no" || answer =="y"|| answer =="n")
    {
        console.log(answer);
    }
    else
    {
        alert("The Answer of Question Should be ( yes/no/y/n )");
        var answer = prompt("Please Enter your Answer by (yes/no/y/n)");
        console.log(answer);
    }
}



var q1 = prompt("Are you a Graduate? ");
var question1 = q1.toLowerCase();
if( question1 == "" )
{
    emptyCondition(question1);
}
else
    checkConditions(question1);



var q2 = prompt("Is your GPA above (3.50)? ");
var question2 = q2.toLowerCase();
if( question2 == "" )
{
    emptyCondition(question2);
}
else
    checkConditions(question2);



var q3 = prompt("Are you finished your Task? ");
var question3 = q3.toLowerCase();
if( question3 == "" )
{
    emptyCondition(question3);
}
else
    checkConditions(question3);




var array = [];

array.push(question1);
array.push(question2);
array.push(question3);

console.log(array);

for (var i = 0 ; i <= array.length ; i++)
{
    console.log(array[i]);
}



var arrayForAll = [];

arrayForAll.push(userName);
arrayForAll.push(gender);
arrayForAll.push(age);
arrayForAll.push(question1);
arrayForAll.push(question2);
arrayForAll.push(question3);
console.log(arrayForAll);