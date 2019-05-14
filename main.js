const {Rectangle, Color, selection} = require("scenegraph");   
const socialColors = require('./colors');
let dialog;
let savedSwatches = [];
let savedSwatchesNames = [];
let assets = require("assets");
let styles = require('./styles');
let appliedColors = false;
let colorElement = "";
for(let c = 0; c < socialColors.length; c++) {
  let socialName = socialColors[c].name;
  let socialHex = socialColors[c].color;
  
  
  
  colorElement += `
    <div class="color-item">
      <p> ${socialName} </p>
      <label class="box" data-color="${socialHex}">
        <input class="color-swatch" type="checkbox" value="${socialHex}" data-name="${socialName}">
        <img src="https://kennykrosky.com/wp-content/uploads/2019/02/check@2x.png">
      </label>
      <input class="text-hex" type="text" value="${socialHex}">
    </div>
  `
}



let createDialog = () => {
  
  dialog = document.createElement("dialog");
  dialog.innerHTML = `
    ${styles}

    <div class="">
      <h1>Social Media Colors</h1>
      <div class="social-form">
        <form>
          <input uxp-quiet="true" type="text" placeholder="Search Color">
        </form> 
      </div>
    </div>

    <div class="flex-parent">
      <div class="available-colors">
        <div class="color-nest">
          ${colorElement}
        </div>
      </div>
    </div>

    <div class="button-parent">
      <div class="select-colors">Apply Colors</div>
    </div>
  `;
  
  document.appendChild(dialog);
  let trigger = document.querySelector('.select-colors');
  trigger.addEventListener('click', closeDialog);

  async function closeDialog () {
    getColors();
    dialog.close("addedColors");
  }
  
  let box = document.querySelectorAll('.box');
  let swatch = document.querySelectorAll('.color-swatch');
  

  // set each color 
  [].forEach.call(box, element =>  element.style.background = element.getAttribute('data-color'))


  // store users selected colors 
  let storeColorChoice = (event) => {
    event.preventDefault();
    let selectedCheckBox = event.currentTarget;
    let swatchColor = selectedCheckBox.value;
    let swatchColorName = selectedCheckBox.getAttribute('data-name')

    if(selectedCheckBox.checked) {
      selectedCheckBox.nextElementSibling.style.display = "block"
      savedSwatches.push(swatchColor);
      savedSwatchesNames.push(swatchColorName)
    }

    else {
      selectedCheckBox.nextElementSibling.style.display = "none"
      let sniper = savedSwatches.indexOf(swatchColor);
      let sniperJr = savedSwatchesNames.indexOf(swatchColorName);

      if(sniper > -1 ) {
        savedSwatches.splice(sniper, 1);
      }
      if(sniperJr > -1 ) {
        savedSwatchesNames.splice(sniperJr, 1);
      }

    }
  }

  // checkbox on change event 
  for(let i = 0; i < swatch.length; i++) {
    swatch[i].addEventListener('change', storeColorChoice)
  }

  
  
  return initDialog()
}




let getColors =  () => {
  let randomNames = [];
  for(let i = 0; i < savedSwatches.length; i++ ){
    randomNames[i] = new Color(savedSwatches[i]);
    let stops = [{ color: randomNames[i]}]
    let allColors = assets.colors.add(
      { name: savedSwatchesNames[i] ,color: randomNames[i] }
    )
  }
  savedSwatches = [];
  randomNames = [];
  savedSwatchesNames = [];
}




let initDialog = () => {
  if(!dialog) createDialog();
  return dialog.showModal().then(function () {
    console.log('closed out')
    dialog.remove();
  })
}






module.exports = {
    commands: {
      socialColors: createDialog
    }
};