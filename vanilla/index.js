// temp values for testing
var uid = '1234567';
var pass = '07072001';
var name = 'Andrei Pagalilauan';

function haha(){
    location.href = 'homepage.html';

}

function login(){

        // fetching data values from form
        let inputValue1 = document.getElementById("id").value; 
        document.getElementById("id").innerHTML = inputValue1;   
        let inputValue2 = document.getElementById("pass").value; 
        document.getElementById("pass").innerHTML = inputValue2;                  

    // verifying values
    if(inputValue1==uid && inputValue2==pass){
        console.log("SUCCESSFUL LOG IN!   " + name);
       haha();
    }
    else{
        alert('invalid credentials.')
    }
    
} 