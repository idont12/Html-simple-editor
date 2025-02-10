//#region Editable Customized

// Add stylesheet
const styleContent = `
.editorUI {
  direction: ltr;
  text-align: left;
}

.editorUI button{
  border: none;
  background: #d5d1d1;
  margin-bottom: 5px;
  border-radius: 2px;
  padding: 5px 10px;
  width: 100%;
  disaply:block;
  }

  .editorUI button:hover{
    background: #c3c3c3;
  }

.editorUI.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  z-index: 999;
}
    
  .editorUI.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1000;
  }

.editorUI.sectionEditor {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  z-index: 100;
}

.editorUI .template-select {
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
}

.editorUI.copy-button {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1000;
}
  .editorUI.copy-button:hover {
    background: #0056b3;
  }

.editorUI.notification {
  position: fixed;
  top: 70px;
  right: 20px;
  background: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  display: none;
  z-index: 1000;
  height: fit-content;
}

  .editorUI#ClassManager, .editorUI.smallPopup{
  position: absolute;
    background: white;
    border: 1px solid rgb(204, 204, 204);
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
    z-index: 1001;
    border-radius: 8px;
    direction:ltr;
    text-align:left;
    max-width: 300px;
  }
    .editorUI#ClassManager>div:nth-child(1){
    padding-bottom: 0.25em;
    border-bottom: solid 1px;
    }

        .editorUI#ClassManager>div:nth-child(2){
    overflow-y: auto;
    max-height: 200px;
    clear: both;
    }

    .editorUI#ClassManager>div:nth-child(1) ul{
    margin: 0;  
    }
        .editorUI#ClassManager>div:nth-child(1) ul li{
    clear: both;
    }

    .editorUI#ClassManager>div:nth-child(1) button{
    float: right;
    width:fit-content;
    }

    .editorUI#SelectedObjectOverlay{
    position: absolute;
    background-color: rgb(255 255 255 / 30%);
    outline: 4px dashed;
    outline-offset: -4px;
    pointer-events: none;
    z-index: 999;
    }
`;

// HTML Templates
const htmlTemplates = {
  'Welcome Page V1': `
<section class="screen backgroundImg centerFlex" alt="" style="background-image: url(https://github.com/tauonlinecourses/TestTampImages/blob/main/WithText/TestImgRectangleHori.png?raw=true); flex-direction: column;">

        <h1 class="flyBox centerX" style="bottom: 10%; text-align: center; background: #fffffff7; padding: 0.5em; font-size: 3em; line-height: 1.1; box-shadow: 0px 4px 3px 4px #00000045;">
            Text Text Text
            <div class="BoxBottomBorder" style="width: 70%; --BoxBorderWidth:3px; margin: auto;"></div>

        </h1>
        <!-- 
        <svg style="width: 3.5em; display: block; margin: 0px auto;" width="78" height="43" viewBox="0 0 78 43" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.5 4L37.5858 38.0858C38.3668 38.8668 39.6332 38.8668 40.4142 38.0858L74.5 4" stroke="white" stroke-width="7" stroke-linecap="round"/>
        </svg>   -->
    </section>
  `,
  'FloatTextBox': `
<section class="screen backgroundImg" style="background-image: url(https://github.com/tauonlinecourses/TestTampImages/blob/main/WithText/TestImgSqure.png?raw=true);"><div class="flyBox have-scroll-animation aniType-ScaleSmallToBig active-enter-animation" style="bottom: 10%; right: 10%; width: 50%; max-width: 35em; background-color: rgba(255, 255, 255, 0.9); z-index: 1;"><p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;<span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט <strong>טקסט טקסט טקסט טקסט טקסט </strong>טקסט טקסט טקסט&nbsp;</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט <strong>טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</strong></span><span style="font-size: 19.2px; word-spacing: 3.072px;"><strong>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</strong></span><span style="font-size: 19.2px; word-spacing: 3.072px;"><strong>טקסט טקסט טקסט</strong> טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט&nbsp;</span></p>
        </div>
    </section>
  `,
  'Grid two equal columns - Img then text': `
<section class="screen GridLayout equal2ChildWidthv2 gardientBackColor" style="">
            <div class="background-image" alt="" style="background-image: url(https://github.com/tauonlinecourses/TestTampImages/blob/main/WithText/TestImgRectangleVerti.png?raw=true); background-size: cover; background-position: center 15%; position: relative;">
                <div class="gradient-Horizontal mobile_GardientVertical mobile_bottom"></div>
            </div>
            <div class="centerFlex">
                <div class="have-scroll-animation aniType-ScaleSmallToBig active-enter-animation" style="left: 10%; max-width: 35em; background-color: rgba(255, 255, 255, 0.9); z-index: 1; margin: 25px; padding: 25px;">
                    <p>טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט טקסט</p>
                </div>

            </div>
    
        </section>
  `,
  'Grid two 2:1 rasio columns - Text then img': `
<section class="screen GridLayout fr2and1ChildWidth gardientBackColor resateGridOnPhone" style="--startColor: #104862;">

        <div class="centerFlex">
            <div class="have-scroll-animation aniType-ScaleSmallToBig active-enter-animation" style="left: 10%; max-width: 35em; background-color: rgba(255, 255, 255, 0.9); z-index: 1; margin: 25px; padding: 25px;">
                <p>&nbsp;טקסט טקסט טקסט טקסט&nbsp;<span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span><span style="font-size: 19.2px; word-spacing: 3.072px;">טקסט טקסט טקסט טקסט</span></p>
            </div>

        </div>
        <div class="background-image" alt="" style="background-image: url(https://github.com/tauonlinecourses/TestTampImages/blob/main/WithText/TestImgRectangleVerti.png?raw=true); background-size: cover; background-position: center 15%; position: relative; min-height: 60vh;">
            <div class="gradient-Horizontal right mobile_GardientVertical"></div>
        </div>

    </section>
  `,
  'Grid two 2:1 rasio columns - Img then text': `
<section class="screen GridLayout fr1and2ChildWidth gardientBackColor resateGridOnPhone" style="--startColor: #104862;">
        <div class="background-image" alt="" style="background-image: url(https://github.com/tauonlinecourses/TestTampImages/blob/main/WithText/TestImgRectangleVerti.png?raw=true);background-size: cover;background-position: center;position: relative;min-height: 60vh;">
            <div class="gradient-Horizontal mobile_GardientVertical mobile_bottom"></div>
        </div>
        <div class="centerFlex">
            <div class="have-scroll-animation aniType-ScaleSmallToBig active-enter-animation" style="left: 10%; max-width: 35em; background-color: rgba(255, 255, 255, 0.9); z-index: 1; margin: 25px; padding: 25px;    margin-bottom: 3em;">
                <p><span style="word-spacing: 3.072px;"><b>טקסט טקסט טקסט </b>טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט טקסט <b>טקסט&nbsp;</b></span><span style="font-weight: bold; word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;"><b>טקסט </b>טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט
                        טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט
                        טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט
                        טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט
                        טקסט&nbsp;</span><span style="word-spacing: 3.072px;">טוסט&nbsp;</span><span style="word-spacing: 3.072px;">טקסט&nbsp;</span></p>
            </div>
            <div class="imgDiscriptionOnImgSmall" style="bottom: 10px;left: 10px;TEXT-ALIGN: LEFT;color: white;direction: ltr;">&nbsp;Test Test&nbsp;Test
                Test Test Test Test Test Test Test Test Test</div>
        </div>

    </section>
  `
};

// Determent what trigger the 
const ManagerPopupFile = {
  "TriggeringClasses": ["backgroundImg", "background-image"],
  "TriggeringTag": "IMG",
  "SorcePath": "./img/"
}


  // Remove editor elements and scripts from the code all code
  const elementsToRemove = [
    '.sectionEditor',
    '.popup',
    '.popupOverlay',
    '.copy-button',
    '.notification',
    '.editorUI',
    'script',  // Remove all script tags
    'link[rel="stylesheet"]', // Remove style links
    'style'  // Remove style tags
  ];

//#endregion


//#region Editable Global Varilbels

const allClasses = getAllClasses();
const allPopup = document.createElement('div');
let contextMenu = document.createElement('div');
let currentEditTarget = null;
let selectedElement = null;

//#endregion


//#region Editable Initialize

document.addEventListener('DOMContentLoaded', initEditor);

// Initialize everything
function initEditor() {
  initContentEditable();
  generateFilePopup();
  initImageEditing();
  GenerateAddTemplate();

  initRightClick();
  initcontextMenu();

  hideSelectionBox();
  initCopyHtml()

  initEditorCss();
}

// Initialize content editable
function initContentEditable() {
  document.body.contentEditable = true;
}

// Initialize image editing
function initImageEditing() {
  document.body.addEventListener('click', (e) => {
    const target = e.target;
    console.log(target.classList);
    // Check if clicked element is an img tag or has backgroundImg class
    if (target.tagName === ManagerPopupFile.TriggeringTag || chackClassContain(target, ManagerPopupFile.TriggeringClasses)) {
      e.preventDefault();

      openFilePopup(target, target.tagName === ManagerPopupFile.TriggeringTag ? 'src' : 'background');
    }
  });
}

function initRightClick(){
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    if (!event.target || event.target === document.body) return;
  
    const SelectedCover = SelecteObject(event);
  
    selectedElement = event.target;
    contextMenu.innerHTML = '';
  
  
    let addClassBtn = document.createElement('button');
    addClassBtn.innerText = 'Add Class';
    addClassBtn.onclick = () => showClassMenu();
    contextMenu.appendChild(addClassBtn);
  
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete Element';
    deleteBtn.onclick = () => {
      selectedElement.remove();
      selectedElement = null;
      contextMenu.style.display = 'none';
    };
    contextMenu.appendChild(deleteBtn);
  
    contextMenu.style.left = `${event.pageX}px`;
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.display = 'block';
  });
}

function initcontextMenu(){
  contextMenu.classList.add("editorUI", "smallPopup");
  contextMenu.style.display = "none";
  contextMenu.style.zIndex = '1000';
  document.body.appendChild(contextMenu);
}


function hideSelectionBox(){
  document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
    if (document.getElementById("SelectedObjectOverlay")) {
      document.getElementById("SelectedObjectOverlay").remove();
    }
  });
}

// Add the copy button and notification
function initCopyHtml(){
  const copyButton = document.createElement('button');
  copyButton.className = 'copy-button editorUI';
  copyButton.textContent = 'Copy HTML';
  copyButton.onclick = copyCleanHTML;
  document.body.appendChild(copyButton);

  const copyNotification = document.createElement('div');
copyNotification.className = 'sectionEditor notification editorUI';
copyNotification.textContent = 'HTML copied to clipboard!';
document.body.appendChild(copyNotification);
}

function initEditorCss(){
  const style = document.createElement('style');
style.textContent = styleContent;
document.head.appendChild(style);
}
//#endregion


//#region Editable Generate Layout

// Create and add the file popup with overlay
function generateFilePopup() {
  allPopup.classList.add("editorUI");
  allPopup.style.display = "none";

  const overlay = document.createElement('div');
  overlay.classList.add('popupOverlay', "editorUI");

  // Close popup when clicking overlay
  overlay.addEventListener('click', closeFilePopup);
  allPopup.appendChild(overlay);

  const Popup = document.createElement('div');
  Popup.className = 'popup editorUI';
  Popup.innerHTML = `
    <h3 contenteditable="false">Select File</h3>
    <input type="file" id="fileInput">
    <div style="margin-top: 10px;">
      <button contenteditable="false" onclick="handleFileSelection()">Select</button>
      <button contenteditable="false" onclick="closeFilePopup()">Cancel</button>
    </div>
  `;
  allPopup.appendChild(Popup);
  document.body.appendChild(allPopup);
}

// Create section editor with template dropdown
function GenerateAddTemplate(){
  const sectionEditor = document.createElement('div');
  sectionEditor.className = 'editorUI sectionEditor';
  sectionEditor.innerHTML = `
    <h3 contenteditable="false">Add HTML Template</h3>
    <select class="template-select">
      ${Object.keys(htmlTemplates).map(key =>
    `<option value="${key}">${key.charAt(0).toUpperCase() + key.slice(1)}</option>`
  ).join('')}
    </select>
    <button contenteditable="false" onclick="addNewTemplate()">Add Template</button>
  `;
  document.body.appendChild(sectionEditor);
}

//#endregion


//#region Editable functions
function chackClassContain(target, classList) {
  console.log("chackClassContain");
  for(i=0;i<classList.length;i++){
    const thisClass = classList[i];
    const chackExist = target.classList.contains(thisClass);
    if (chackExist) {
      return true;
    }
  }
  return false;
}

//#region file Popup Code

// File popup handlers
function openFilePopup(target, type) {
  selectedElement = { element: target, type: type };
  allPopup.style.display = "block";
}

function closeFilePopup() {
  allPopup.style.display = "none";
  selectedElement = null;
  document.getElementById('fileInput').value = '';
}

function handleFileSelection() {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (file && selectedElement) {
    const relativePath = `${ManagerPopupFile.SorcePath}${file.name}`; // Adjust the path as needed

    if (selectedElement.type === 'src') {
      selectedElement.element.src = relativePath;
    } else if (selectedElement.type === 'background') {
      selectedElement.element.style.backgroundImage = `url('${relativePath}')`;
    }

    closeFilePopup();
  }
}

//#endregion

// Template handling
function addNewTemplate() {
  const select = document.querySelector('.template-select');
  const templateKey = select.value;
  const template = htmlTemplates[templateKey];

  if (template) {
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = template;
    const newElement = tempContainer.firstElementChild;

    // Insert before the section editor
    // if(selectedElement){
    //   selectedElement.parentNode.insertBefore(newElement, selectedElement.nextSibling);
    // }
    // else{
    //   document.body.appendChild(newElement);
    // }
    document.body.appendChild(newElement);

    newElement.scrollIntoView();
  }
}


// Function to copy clean HTML
function copyCleanHTML() {
  // Create a clone of the body
  const tempContainer = document.createElement('div');
  tempContainer.innerHTML = document.body.innerHTML;

  elementsToRemove.forEach(selector => {
    const elements = tempContainer.querySelectorAll(selector);
    elements.forEach(el => el.remove());
  });

  // Remove contenteditable attribute from all elements
  const editableElements = tempContainer.querySelectorAll('[contenteditable]');
  editableElements.forEach(el => {
    el.removeAttribute('contenteditable');
  });

  // Get only the content inside the body, excluding scripts and editor elements
  const contentElements = Array.from(tempContainer.children).filter(el => {
    // Exclude our editor elements and any scripts
    return !el.matches('.sectionEditor, .popup, .popupOverlay, .copy-button, .notification, script');
  });

  // Create the final HTML string
  const cleanHTML = contentElements.map(el => el.outerHTML).join('\n');

  // Copy to clipboard
  navigator.clipboard.writeText(cleanHTML).then(() => {
    // Show notification
    copyNotification.style.display = 'block';
    setTimeout(() => {
      copyNotification.style.display = 'none';
    }, 2000);
  });
}



function showClassMenu() {
  let classMenu = document.createElement('div');
  classMenu.style.left = `${parseInt(contextMenu.style.left) + 100}px`;
  classMenu.style.top = `${contextMenu.style.top}`;
  classMenu.id = "ClassManager";
  classMenu.contentEditable = false;
  classMenu.classList.add("editorUI");
  document.body.appendChild(classMenu);


  let currentClassesDisplay = document.createElement('div');
  let title = document.createElement('span');
  title.innerText = 'Current Classes:';
  currentClassesDisplay.appendChild(title);

  let currentClassList = document.createElement("ul");
  currentClassesDisplay.appendChild(currentClassList);
  classMenu.appendChild(currentClassesDisplay);

  let allOptions = document.createElement('div');
  classMenu.appendChild(allOptions);

  let currentClasses = Array.from(selectedElement.classList);


  currentClasses.forEach(cls => {
    let classItem = document.createElement('li');
    classItem.innerText = cls;
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'X';
    removeBtn.onclick = () => {
      selectedElement.classList.remove(cls);
      classMenu.remove();
      showClassMenu();
    };
    classItem.appendChild(removeBtn);
    currentClassList.appendChild(classItem);
  });

  let availableClasses = allClasses.filter(cls => !currentClasses.includes(cls)).sort();
  availableClasses.forEach(cls => {
    let classBtn = document.createElement('button');
    classBtn.innerText = cls;
    classBtn.onclick = () => {
      selectedElement.classList.add(cls);
      classMenu.remove();
      showClassMenu();
    };
    allOptions.appendChild(classBtn);
  });

  document.addEventListener('mousedown', (e) => {
    if (classMenu && !classMenu.contains(e.target)) {
      classMenu.remove();
    }
  });
}

function getAllClasses() {
  let classes = new Set();
  [...document.styleSheets].forEach(sheet => {
    try {
      [...sheet.cssRules].forEach(rule => {
        if (rule.selectorText) {
          rule.selectorText.split(',').forEach(sel => {
            sel = sel.trim();
            if (sel.startsWith('.')) {
              sel = sel.replace(/^\./, '');
              if (!sel.includes(' ') && !sel.includes('#') && !sel.includes(':')) {
                sel.split('.').forEach(cls => {
                  if (cls) classes.add(cls);
                });
              }
            }
          });
        }
      });
    } catch (e) { }
  });
  return [...classes];
}

function SelecteObject(event) {
  // Remove any existing highlight
  const existingOverlay = document.getElementById("SelectedObjectOverlay");
  if (existingOverlay) {
    existingOverlay.remove();
  }

  // Get the element under the click
  const target = event.target;
  const rect = target.getBoundingClientRect();

  // Create overlay div
  const overlay = document.createElement("div");
  overlay.id = "SelectedObjectOverlay";
  overlay.classList.add("editorUI");
  overlay.style.top = `${rect.top + window.scrollY}px`;
  overlay.style.left = `${rect.left + window.scrollX}px`;
  overlay.style.width = `${rect.width}px`;
  overlay.style.height = `${rect.height}px`;
  overlay.style.zIndex = "999";

  document.body.appendChild(overlay);
  return existingOverlay;
}

//#endregion