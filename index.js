const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstResult = document.getElementById("first-result")
let secondResult = document.getElementById("second-result")
let button = document.getElementById("generate-password-button")
let toggle = document.querySelector('input[type="checkbox"]')
let input = document.getElementById("quantity").value
//button.addEventListener("click", generatePassword(input))




// function generatePassword() {

//     input = document.getElementById("quantity").value
    
//     let randomCharacter = ""
    
//     for (let i = 0; i < input; i++) {
        
//         if (toggle.checked === true) {
//             randomCharacter += Math.floor(Math.random()*10)
//         } else {
//             randomCharacter += characters[Math.floor(Math.random()* characters.length)]
//         }
//     }
    
//     firstResult.textContent = randomCharacter
    
// }

//button.addEventListener("click", () => { generatePassword(),false })

button.addEventListener('click', () =>  {

    input = document.getElementById("quantity").value
    toggle = document.querySelector('input[type="checkbox"]')
    
    let firstRandomPass = ""
    let secondRandomPass = ""
    if (input >=0 && input <=20) {

        for (let i = 0; i < input; i++) {
        
            if (toggle.checked == true) {
               
                firstRandomPass += Math.floor(Math.random()*10)
                secondRandomPass += Math.floor(Math.random()*10)
            } else {
                firstRandomPass += characters[Math.floor(Math.random()* characters.length)]
                secondRandomPass += characters[Math.floor(Math.random()* characters.length)]
            }
        }
        
    } 
    
    

    firstResult.textContent = firstRandomPass
    secondResult.textContent = secondRandomPass
  });



  function myFunction() {
  // Get the text field
  var copyText = document.getElementById("first-result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}


