const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*%_+~\\`|}{[]:;?><./-="
    // hexcode: "2196f3ffffffc3c3c3ffeb3bff7da7e5e5e59e9e9e"
}
const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
];
var rangeOtp =document.getElementById("length-result");
    var range =document.getElementById("length");

range.addEventListener("input", () => {
    rangeOtp.textContent = parseInt(range.value);
    // generatePassword();
    });
    generatePassword();
function generatePassword(){
    // alert("called");
    let passwordBox = document.getElementById("password");
    let length = document.getElementById("length").value;
    let symbol = document.getElementById("symbol").checked;
    let number = document.getElementById("number").checked;
    let upperCase = document.getElementById("upperCase").checked;
    let lowerCase = document.getElementById("lowerCase").checked;
    
    
    // let hexcode = document.getElementById("hexcode").checked;
    if(!length)
    {
        alert("Please Select length");
        return;
    }
    if(!symbol && !number && !upperCase && !lowerCase /* && !hexcode */){
        alert("Please check atleast one box!");
        return;
    }
    let password = "";
    while (length > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
    
}
function copyPassword() {    
    const password = document.getElementById("password").innerText;
    if (!password) { return; }
    navigator.clipboard.writeText(password);
    alert('Generated Password copied to clipboard');
    console.log('Copied to clipboard')
  }
  