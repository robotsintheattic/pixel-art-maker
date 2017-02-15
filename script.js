var container = document.getElementById('container');

function grid(numGrid){

for(var i = 0; i < numGrid; i++) {
  var article = document.createElement('article');
  // console.log(div);
  container.append(article);
  var colorGrid = article.classList="colorGrid";
  console.log(colorGrid);
  }
}
grid(1508);
var colorArr = ['white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'magenta', 'black'];
function palette(){  //removed colors
var palette = document.getElementById('palette');
for(let i = 0; i < colorArr.length; i++) {
  var div = document.createElement('div');
  // console.log(div);
  div.style.backgroundColor = colorArr[i];
  palette.append(div);
  var brush = div.classList.add("brush");
  }
}
// palette(['white', 'pink', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'black']);
palette();
// var white = document.getElementsByClassName('white');
// var pink = document.getElementsByClassName('pink');
// var red = document.getElementsByClassName('red');
// var orange = document.getElementsByClassName('orange');
// var yellow = document.getElementsByClassName('yellow');
// var green = document.getElementsByClassName('green');
// var blue = document.getElementsByClassName('blue');
// var indigo = document.getElementsByClassName('indigo');
// var violet = document.getElementsByClassName('violet');
// var black = document.getElementsByClassName('black');

var brush = document.getElementsByClassName('brush');

// var div = document.getElementsByTagName('div');

var selectColor = document.getElementById('palette');



var brushColor = '';

selectColor.addEventListener('click', function(event){
  console.log('event target', event.target);
  brushColor = event.target.style.backgroundColor;
  event.target.style.border = "3px solid white";
  console.log(brushColor);
});

var square = document.getElementsByClassName('colorGrid');
//console.log(square);
container.addEventListener('click', function(){
  console.log('event target', event.target);
  event.target.style.backgroundColor = brushColor;
});
//
//
// function setColor(){
//   colorGrid.style.backgroundColor =
// }
