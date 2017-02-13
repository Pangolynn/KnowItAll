let PC = true;
let character = "No Character Loaded";

function toggleUsers(e) {
   if(e.currentTarget.id === 'selected'){
      // do nothing
   }
   else if(e.currentTarget.textContent === "PC") {
      displayPC();
   } else {
      displayDM();
   }
}

// Change character name in heading
// changing it this way prevents XSS attack, if character contains html
// text should be in a text node not parsed by the browser for HTML
// Using innerHTML is bad practice.
if(character != "No Character Loaded") {
   var characterElement = document.getElementById("characterName");
   while(characterElement.childNodes.length >= 1) {
    characterElement.removeChild(characterElement.firstChild);
  }
  characterElement.appendChild(characterElement.ownerDocument.createTextNode(character));
}

const userButtons = document.querySelectorAll('.userButton');

userButtons.forEach(button => button.addEventListener('click', toggleUsers));



// show buttons for pc
function displayPC(){
   userButtons[0].id = '';
   userButtons[1].id = 'selected';
}

// show buttons for DM
function displayDM() {
   userButtons[1].id = '';
   userButtons[0].id = 'selected';
}

// e.currentTarget = button#selected.userButton
