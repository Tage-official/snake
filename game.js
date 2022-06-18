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
      if (key.name == 'w'){
        dir='up';
      }
      if (key.name == 's'){
        dir = 'down'
      }
      if (key.name == 'a'){
        dir = 'left'
      }
      if (key.name == 'd'){
        dir = 'right'
      }
    });
    process.stdin.setRawMode(true);
    process.stdin.resume();

  function displayFood(){
    foodXPos = Math.floor(Math.random() * (max - min) + min);
    foodYPos = Math.floor(Math.random() * (max - min) + min);
      if ( foodXPos >= 15 && foodXPos <= 0 && foodYPos >= 15 && foodYPos <= 0 ){
        displayFood();
      }
      else {
        ground[foodYPos][foodXPos] = '1';
      }
  }
  function movement() {
    if ( snake[0].x!=0 && snake[0].x!=15 && snake[0].y!=0 && snake[0].y!=15){
      if (dir === 'left'){
        snake[0].x = snake[0].x-1
      }
      if (dir === 'right'){
        snake[0].x = snake[0].x+1
    }
      if (dir === 'up'){
        snake[0].y = snake[0].y-1
    }
      if (dir === 'down'){
        snake[0].y = snake[0].y+1
     }
  }
}
  function displayMatrix() {
    for( let i = 0; i< snake.length;++i) {
      if ( dir === 'left' ){
        ground[snake[0].y][snake[0].x] = snake[0].value;
        ground[snake[0].y][snake[0].x+i] = snake[i].value;
        ground[snake[0].y][snake[0].x+1] = ' '
    }
      if ( dir === 'right' ){
        ground[snake[0].y][snake[0].x] = snake[0].value;
        ground[snake[0].y][snake[0].x-i] = snake[i].value;
        ground[snake[0].y][snake[0].x-1] = ' '
      }
      if ( dir === 'up' ){
        ground[snake[0].y][snake[0].x] = snake[0].value;
        ground[snake[0].y+i][snake[0].x] = snake[i].value;
        ground[snake[0].y+1][snake[0].x] = ' '
      }
      if ( dir === 'down' ){
        ground[snake[0].y][snake[0].x] = snake[0].value;
        ground[snake[0].y-i][snake[0].x] = snake[i].value;
        ground[snake[0].y-1][snake[0].x] = ' '
      }
    }
      ground.forEach((item) => {
        const groundstr = item.toString().split(',').join(' ');
        console.log(groundstr);
      });
    };

    function eat() {
        if (snake[0].y === foodYPos && snake[0].x === foodXPos) {
      displayFood();
      snake.push({
      x: snake[0].x,
      y: snake[0].y,
      value: '='
         });
       }
      }
    displayMatrix()
    displayFood()
    eat()
setInterval(movement,1000)
setInterval(displayMatrix,1000)