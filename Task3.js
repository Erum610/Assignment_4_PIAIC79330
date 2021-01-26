var input = prompt("Enter password!\n" + 
"1. It should contain alphabets and numbers \n" +
"2. It should not start with a number\n" +
"3. It must be atleast 8 characters long\n");
var upperCaseLetters=/[A-Z]/g;
var lowerCaseLetters=/[a-z]/g;
var numb=/[0,9]/g;
if(!isNaN(input.charAt(0)))
{
    alert("Password should start from alphabets");
    window.location.reload();
}
else{
    if(input.length>=8 && input.match(upperCaseLetters) && input.match(lowerCaseLetters)  ){
        alert("OK");
 }
 else{
     alert("Enter a valid password");
 }
   ;

}





