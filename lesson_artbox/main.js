

let colors = ["#3085f5", "#3085f5b0", "#18d67d", "#18d67db0", "#27d4dad5", "#277bdad5", "#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00", "#ffffff00", "#eeff00", "#eeff00b0", "#8c00e9", "#088a03d5", "#e9ab00", "#e95500", "#e95500b0", "#7fff2a", "#ba00e9"];
let xTreeBgColors = ["#008000", "#408000", , "#008030"];
let xTreeColorIndex = 0;
let xTreeParts = document.querySelectorAll(".xtree-part");
let balls = createBalls(30);

startAll();


function createBalls(count) {
    let ballsCount = count;

    let balls = document.querySelectorAll(".ball");
    balls.forEach(item => item.remove());
    
    let xTreeContainer = document.querySelector(".xtree-container");
    for (let i = 0; i < ballsCount; i++) {
        let ball = document.createElement('div');
        ball.className = "ball"
        xTreeContainer.appendChild(ball);
    }
    balls = document.querySelectorAll(".ball");
    configureBalls(balls);
    return balls;
}
function configureBalls(balls) {
    for (let i = 0; i < balls.length; i++) {
        let size = 10 + Math.floor(10 * Math.random()) 
        let y = (0.1 + 0.75 * i / balls.length) * 100;  
        let dx = 0.7 * y * (Math.random() - 0.5);      
        let x = 50 + dx; 

        let ball = balls[i]; 
        let style = ball.style 
        style.top = y + "%"; 
        style.left = x + "%"; 
        style.height = size + "px"; 
        style.width = size + "px"; 
        style.marginTop = -0.5 * size + "px";  
        style.marginLeft = -0.5 * size + "px"; 
    }
};

function startAll() {
    startXtreePlay();
    
    balls.forEach(ball => {
        
        let ballTimeout = 100 * (1 + 4 * Math.random());
        startBallPlay(ball, ballTimeout)
    });
};

function startXtreePlay() {
    let timeout = 100; 
    changeXtreeColor(); 
    setTimeout(startXtreePlay, timeout);
};

function changeXtreeColor() {
    xTreeColorIndex++;
    xTreeParts.forEach(item => {
        let index = xTreeColorIndex % xTreeBgColors.length;
        let color = xTreeBgColors[index];
        item.style.borderBottomColor = color;
    });
}


function startBallPlay(ball, timeout) {
   
    updateBall(ball);
    setTimeout(startBallPlay, timeout, ball, timeout);
};


function updateBall(ball) {
    if (!ball) {
        return;
    }

    let colorIndex = Math.floor((colors.length - 1) * Math.random()); 
    let color = colors[colorIndex]; 
    let style = ball.style 
    style.backgroundColor = color; 
}