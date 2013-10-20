/*jslint browser: true, couch: false, devel: true, node: true, closure: true */
var gameModule = (function (document){

    "use strict";

    var counter=0,
        ballX,
        ballR,
        scores,
        ballY;

    function gameOver()
    {
        console.log("Final: " + scores);
    }

     
    function startGame () {
    
    var canvas = document.getElementById('game'),
        ctx = canvas.getContext('2d');

    ballX = Math.floor(Math.random() * 400); // 0..300
    ballY = Math.floor(Math.random() * 600);
    ballR = Math.floor(Math.random() * 100);
    var B = Math.floor(Math.random() * 255),
        G = Math.floor(Math.random() * 255),
        R = Math.floor(Math.random() * 255);
    canvas.width = 640;
    canvas.height = 480;

    ctx.fillStyle = "RGB("+R+","+G+","+B+")";
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
    ctx.fill();
        if(counter>=10)
        {
            gameOver();
        }else
        {
           setTimeout(startGame, 500);
           counter = counter + 1;
          
        }
    }

        function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

            console.log("Clicked: " + x + " , " + y);
            if (tmp < ballR * ballR) {
                scores = scores + (100 - ballR);
                console.log("Hit ! Your scores: " + scores);
            }
        }
    function start () {
        scores = 0;
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }  
        return{
               start:start
    };
    
}(document));
gameModule.start();