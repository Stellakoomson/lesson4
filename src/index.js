 //let num1 = 10;
 //let num2 = 15;
 //let result = num1 +num2;
 //console.log(result);



 //function cookrice(water, rice, salt){
   // alert(`i cooked ${rice} cups of water "

// }
    



function checkAge(){
let age = prompt("what is your age");
if (age && age <6){
    alert(`you are ${age} years old and you are too young.`)}

else if (age && age >= 6 && age <= 17){
    alert(`you are ${age} years old and you have limited options`)
}

else if (age && age>= 18){
    alert(`you are ${age} years old and you can access all options `)
}

else{
    alert('please enter your age');
}


}
checkAge();