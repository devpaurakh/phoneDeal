// for the validtation signup form whose function name is vlid()
function valid(){
var name = document.getElementById('name').value;
var lname = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var repassword = document.getElementById('repassword').value;
// for first name
if(name == ""){
    document.getElementById('span-a').innerHTML=" Field Is Requires **";
    return false;
}
if(!isNaN(name)){
    document.getElementById('span-a').innerHTML=" Use alphabates **";
    return false;
}
// dor secondname
if(lname === ""){
    document.getElementById('span-b').innerHTML=" last name is repuired **";
    return false;
}
if(!isNaN(lname)){
    document.getElementById('span-b').innerHTML=" Use alphabates **";
    return false;
}
// for email
if(email == ""){
    document.getElementById('span-c').innerHTML="Field Is Requires **";
    return false;
}

// for possword
if(password == ""){
    document.getElementById('span-d').innerHTML="Field Is Requires **";
    return false;
}
// for repassword
if(repassword == ""){
    document.getElementById('span-e').innerHTML="Field Is Requires **";
    return false;
}
if(repassword!=password){
    document.getElementById('span-e').innerHTML=" Match the password **";
    return false;
}
if(repassword==password){
    document.getElementById('span-e').innerHTML="password Matched**";
    return false;
}


}