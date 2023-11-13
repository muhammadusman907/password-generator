// var abc = "abcdefghigklmnopqrstuvwxyz";
// var num = 123456789;
// var special = "!@#$%^&*"

// var password ;
// for (var i = 0 ; i < 4 ; i++ ){
//     console.log(abc[i])
// }

var copyItm = document.getElementById("copyItm")
var passMethod = "abcdefghijklmnopqrstuvwxyzHIJKLMNOPQRST";
var specialChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var character = "!@#$%^&*_+";
var num = "1234567890" ; 
var printPass = document.getElementById("Password-show");
var valueCheckInput = document.getElementById("value-check");

var randomPass = "";

function showPassword ( ){
    printPass.value = "";
    for (var i = 0 ; i < 4 ; i++){
        var randomNumber = Math.floor(Math.random() * 10) ;
        randomPass += passMethod[randomNumber]
    }
    for (var i = 0 ; i < 4 ; i++){
        var randomNumber = Math.floor(Math.random() * 10) ;
        randomPass += specialChar[randomNumber]
    }
    for (var i = 0 ; i < 4 ; i++){
        var randomNumber = Math.floor(Math.random() * 10) ;
        randomPass += num[randomNumber]
    }
    for (var i = 0 ; i < 4 ; i++){
        var randomNumber = Math.floor(Math.random() * 10) ;
        randomPass += character[randomNumber]
    }
    printPass.value = randomPass ; 
    randomPass = ""
}
showPassword()
console.log(randomPass) 

// function valueCheck(){

//   console.log(valueCheckInput.value);  
// for(var i = 0 ; i < character.length ; i++  ){

// for (var j = 0; j < valueCheckInput.length; j++) {
//     debugger
//       if(character[i] === valueCheckInput[j]){
//         alert("strong")
//       }
    
// }

//     // if(character[i] === valueCheckInput.value)
//     // {
//     //     alert("strong")
//     // }
// }

// }
function valueCheck() {
    console.log(valueCheckInput.value);

    // Check if the input contains at least one special character
    var containsSpecialChar = false;
    for (var i = 0; i < character.length; i++) {
        if (valueCheckInput.value.includes(character[i])) {
            containsSpecialChar = true;
            break;
        }
    }

    if (containsSpecialChar) {
        alert("strong");
    }
    else if (valueCheckInput.value.length < 8){
        alert("value atleast 8")

    }
    else{
        alert("not strong")
    }
}