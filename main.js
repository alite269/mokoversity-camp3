var gameModule = (function(){
    var timeoutVar,counter=0;
    function start () {
    
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext('2d');

    var ballX = Math.floor(Math.random() * 300); // 0..300
    var ballY = Math.floor(Math.random() * 400);
    var ballR = Math.floor(Math.random() * 100);

    canvas.width = 480;
    canvas.height = 350;

    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
    ctx.fill();
        if(counter>=10)
        {
        }else
        {
           timeoutVar = setTimeout(start,500);
           counter ++;
          counsole.log("Counter: "+ocunter);
        }
    }
    return{
        start:start
    }
})();
gameModule.start();