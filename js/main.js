var mytextarea = document.getElementById('text-input');
var userFontFamily = document.getElementById('font-family');
var userFontSize = document.getElementById("font-size");
var userColor = document.getElementById("color-input");

function makeItBold() {
    mytextarea.style.fontWeight = "Bold";
    // Assign the value "Bold" to mytextarea CSS font-weight attribute 
}

function makeItItalic() {
  mytextarea.style.fontStyle="Italic"
  // Assign the value "Bold" to mytextarea CSS font-weight attribute
}
function makeItUnderlined() {
    mytextarea.style.textDecoration = "Underline";
  // Assign the value "Bold" to mytextarea CSS font-weight attribute
}

function changeFontFamily() {

    mytextarea.style.fontFamily = userFontFamily.value; 
}

function changeFontSize() {
  mytextarea.style.fontSize = userFontSize.value;
}
function leftAlign() {
    mytextarea.style.textAlign = "Left";
}
function centerAlign() {
  mytextarea.style.textAlign = "Center";
}
function rightAlign() {
  mytextarea.style.textAlign = "Right";
}

function changeColor() {
    mytextarea.style.color = userColor.value;
}

