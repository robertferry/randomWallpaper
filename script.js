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
  if (Event.key === 'Enter'){
  document.body.style.backgroundColor = 'red';
  }
}
//⬆️⬆️⬆️⬆️CREATE WALLPAPER FROM SEARCH =-=-=-=-=-=-




  })
