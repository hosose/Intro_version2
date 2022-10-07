//캔버스 세팅
let canvas;
let ctx;
canvas = document.createElement("canvas")
ctx = canvas.getContext("2d")
canvas.width = 400;
canvas.height = 700;
document.body.appendChild(canvas)

let background_spaceImage,space_shipImage,bulletImage,ufoImage,gameoverImage;

//우주선 좌표
let space_shipX = canvas.width/2-25;
let space_shipY = canvas.height-25;

let bulletList = [] // 총알들을 저장하는 리스트
function Bullet(){
    this.x=0
    this.y=0
    this.init=function(){
        this.x=space_shipX+13
        this.y=space_shipY-10

        bulletList.push(this)
    };
    this.update = function(){
        this.y-=7;
    };
}

function generateRandomValue(min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min //0~1까지 랜덤한 값
    return randomNum
}

let enemyList = []

function Enemy(){
    this.x=0;
    this.y=0;
    this.init = function(){
        this.y= 0
        this.x=generateRandomValue(0,canvas,width-64)

    }
}


function loadImage(){
    background_spaceImage = new Image();
    background_spaceImage.src="images/background_space.PNG";

    space_shipImage = new Image();
    space_shipImage.src = "images/space_ship.png"

    bulletImage = new Image();
    bulletImage.src = "images/bullet.png"

    ufoImage = new Image();
    ufoImage.src = "images/ufo.png"

    gameoverImage = new Image();
    gameoverImage.src = "images/gameover.PNG"   
}

let keysDown = {};
function setupKeyboardListener(){
    document.addEventListener("keydown",function(event){
        //key 다운에 총알 발사하면 무제한 발사가 되어서 재미없으니 up에 넣자

        keysDown[event.keyCode] = true;
        console.log("키다운객체에 들어간 값은?", keysDown);
    });
    document.addEventListener("keyup",function(event){
        delete keysDown[event.keyCode];

        if(event.keyCode == 32){
            createBullet() //총알 생성

        }
        console.log("버튼 클릭 후", keysDown);
    });
}

function createBullet(){
    console.log("총알 생성!");
    let b = new Bullet();
    b.init();
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy()
        e.init()
    },1000)  //(호출하고 싶은 함수, 시간)
}

function update(){
    if(39 in keysDown){
        space_shipX +=5;
        
    } //right
    if(37 in keysDown){
        space_shipX -=5;
    } //left

    if(space_shipX <=0){
        space_shipX = 0
    }
    if(space_shipX >= canvas.width-60){
        space_shipX = canvas.width-60;
    }
    //우주선의 좌표값이 무한대로 업데이트가 되는게 아닌! 경기장 안에서만 있게 하려면?


    //총알의 y좌표 업데이트 해주는 함수 생성
    for(let i=0; i<bulletList.length;i++){
        bulletList[i].update()
    }
}
function render(){
    ctx.drawImage(background_spaceImage,0,0, canvas.width, canvas.height);
    ctx.drawImage(space_shipImage,space_shipX,space_shipY);

    for(let i=0; i<bulletList.length;i++){
        ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y)
    }
    for(let i=0; i<enemyList.length;i++){
        ctx.drawImage(ufoImage, enemyList[i].x, enemyList[i].y);
    }
}

function main(){
    update(); //좌표값을 업데이트하고
    render(); //그려주고
    requestAnimationFrame(main)
}

loadImage();
setupKeyboardListener();
createEnemy();
main();


//방향키를 누르면
// 우주선의 xy 좌표가 바뀌고
// 다시 render 그려주기

//총알 만들기
//1. 스페이스바를 누르면 총알 발사
//2. 총알이 발사 = 총알의 y값이 줄어든다 , x값은? 스페이스를 누른 순간의 우주선의 x좌표
//3. 발사된 총알들은 총알 배열에 저장을 한다.
//4. 총알들은 x,y 좌표값이 있어야 한다
//5. 총알 배열을 가지고 render 그려준다

//적군 만들기
// 1. 적군은 위치가 랜덤하다
// 2. 적군은 밑으로 내려온다.
// 3. 1초마다 적군이 나온다.
// 4. 밑에 닿으면 gameover
// 5. 적군과 총알이 만나면 적이 죽는다. 점수 1점 획득