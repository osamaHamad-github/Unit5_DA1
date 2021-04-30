//add text to document
function addText (add){
  let msg
  if (add === true){
    msg = 'hello world';
  } else if (add === false){
    msg = null;
  }
  document.getElementById("text-area-1").innerHTML = msg;
}

//change color of text
function changeColour (){
  let colourArray = ['blue', 'red', 'yellow', 'green', 'purple']
  let rndCol = colourArray[Math.floor(Math.random() * colourArray.length)]
  document.getElementById("text-area-2").style.color = rndCol;
}
//hello world image