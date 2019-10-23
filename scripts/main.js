let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bond.png') {
      myImage.setAttribute ('src','images/bond2.png');
    } else {
      myImage.setAttribute ('src','images/bond.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'We are bonded,' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello we are bonded, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
