document.addEventListener('DOMContentLoaded', () => {
  const textBox = document.querySelector('#input');
  const butt1 = document.querySelector('.butt');
///⬇️⬇️⬇️⬇️⬇️RANDOM COLOR FROM ARRAY=-=-=-=-=-=-=-
    function changeBackgroundColorRandom() {
      document.body.style.backgroundColor = arr[randomNum];
    }
    
    butt1.addEventListener('click', randomWallpaper)
    let arr = ['red', 'blue', 'green', 'pink','purple', 'orange', 'yellow']
    let randomNum = Math.floor(Math.random()*arr.length)
//-=-=-=-=-=-=-=-=-=-=-=⬆️⬆️⬆️⬆️RANDOM COLOR FROM ARRAY=-=-=-=-=-=-
//⬇️⬇️⬇️⬇️CHANGE COLOR FROM TEXT BOX-=-=-=-=-=-=-
function colorText() {
  document.body.style.backgroundColor = textBox.value;}
//⬆️⬆️⬆️⬆️CHANGE COLOR FROM TEXT BOX =-=-=-=-=-=-=-
//⬇️⬇️⬇️⬇️CREATE WALLPAPER FROM SEARCH=-=-=-=-=
function randomWallpaper() {
  document.body.style.backgroundImage =
  "url('https://source.unsplash.com/1600x900/?" + textBox.value + "')";
  
}
//⬆️⬆️⬆️⬆️CREATE WALLPAPER FROM SEARCH =-=-=-=-=-=-
///⬇️⬇️⬇️ENTER BUTTON PRESSED WORKS NOW=-=-=-=-=
textBox.addEventListener('keypress', (event)=>{
  // event.keyCode or event.which  property will have the code of the pressed key
  let keyCode = event ? event.keyCode : event.which;
  // 13 points the enter key
  if(keyCode === 13) { 
    randomWallpaper();
  } 
});
//⬆️⬆️⬆️⬆️ENTER BUTTON EVENT IN TEXTBOX=-=-=-=-

  })