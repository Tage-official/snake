let ground = [
    ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
    ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
    ];
let max = 15;
let min = 1;
let foodXPos = Math.floor(Math.random() * (max - min) + min);
let foodYPos = Math.floor(Math.random() * (max - min) + min);
let x = 8;
let y = 8;
let dir = 'left';
let snake = [{
      x: 8,
      y: 8,
      value: '@'
    },{
      x:9,
      y:8,
      value: '@'
    },{
      x:10,
      y:8,
      value: '@'
    }]


    var keypress = require('keypress');
    // make `process.stdin` begin emitting "keypress" events
    keypress(process.stdin);
     
    // listen for the "keypress" event
    process.stdin.on('keypress', function (ch, key) {
      if (key.name == 'escape') {
        console.log('Exiting...')
        process.exit();
      }
      if (key.name == 'w' && dir != 'down'){
        dir = 'up';
      }
      if (key.name == 's' && dir != 'up'){
        dir = 'down'
      }
      if (key.name == 'a' && dir != 'right'){
        dir = 'left'
      }
      if (key.name == 'd' && dir != 'left'){
        dir = 'right'
      }
    });
    process.stdin.setRawMode(true);
    process.stdin.resume();

  function displayFood(){
      if ( foodXPos >= 15 && foodXPos <= 0 && foodYPos >= 15 && foodYPos <= 0 ){
        foodXPos = Math.floor(Math.random() * (max - min) + min);
        foodYPos = Math.floor(Math.random() * (max - min) + min);
        displayFood()
      }
      else {
        ground[foodYPos][foodXPos] = '1';
      }
  }

  function movement() { 
    if ( snake[0].x!=0 && snake[0].x!=15 && snake[0].y!=0 && snake[0].y!=15){
      if ( dir === 'left' ){
        snake[0].x = snake[0].x-1 
    }
      if ( dir === 'right' ){
        snake[0].x = snake[0].x+1
    }
      if ( dir === 'up' ){
        snake[0].y = snake[0].y-1
    }
      if ( dir === 'down' ){
        snake[0].y = snake[0].y+1
     }
    }
    else{
      console.log('Gameover, exiting')
      process.exit()
    }
}
  function displayMatrix() {
    for( let i = snake.length-2; i>=0 ; i--) {
      if ( snake[0].x == snake[i].x && snake[0].y == snake[i].y){
        console.log('Gameover...')
        process.exit
      } 
      snake[i+1] = { ...snake[i] }
      ground[snake[i].y][snake[i].x] = snake[i].value;
      }
      movement()
      ground[snake[0].y][snake[0].x] = snake[0].value;
      ground.forEach((item) => {
        let groundstr = item.toString().split(',').join(' ');
        console.log(groundstr);
      ground = [
        ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
        ['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
        ];
      });
    };

    function eat() {
        if (snake[0].y === foodYPos && snake[0].x === foodXPos) {
      displayFood();
      snake.push({
        x: snake[0].x,
        y: snake[0].y,
        value: '@'
         });
      foodXPos = Math.floor(Math.random() * (max - min) + min);
      foodYPos = Math.floor(Math.random() * (max - min) + min);
      }
      let scores = snake.length - 3
      console.log('Your scores: '+scores)
    }

    function checkDeadInside() {
      for( let i = 1; i < snake.length;++i) {
        if ( snake[0].x == snake[i].x && snake[0].y == snake[i].y){
          console.log('Gameover...')
          process.exit()
        }
    }
  }
setInterval(checkDeadInside, 500)
setInterval(displayFood,500)
setInterval(eat,500)
setInterval(displayMatrix,500)

