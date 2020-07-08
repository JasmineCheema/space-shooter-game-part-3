var e1,e2,e3,e7,e8,e9,p1,p3,b1,b2,b3,b4
var score=0
var egroup,bulletgroup
function preload()
{
    e7=loadImage("imageedit_3_9693068684.png")
    p3=loadImage("p3.png")
    b1=loadImage("Black_Screen.jpg")
    b4=loadImage("L2.png")
}
function setup()
{
    createCanvas(400,400)
    p1=createSprite(0,350,20,20)
    p1.addImage("p2",p3)
    b2=createSprite(200,-500,600,900)
    b2.addImage("b3",b1)
    p1.depth=b2.depth+1
    egroup=createGroup()
    bulletgroup=createGroup()
}
function draw()
{
    background("white")
    p1.x=mouseX
    b2.velocityY=5
    if(b2.y>100)
    {
       b2.y=b2.height/2
    }
    if(keyDown("space"))
    {
        bullets();
    }
    if (bulletgroup.isTouching(egroup)) 
    {
        egroup.destroyEach();
        score = score + 2;
    }    
     spawnEnemies();
     drawSprites();
}

function spawnEnemies()
{
    if(frameCount%70===0)
    {    var e1
         e1=createSprite(0,-100,10,10)
         e1.x=random(25,375)
         e1.scale=0.3
         e1.velocityY=2
         e1.lifetime=200
         e1.addImage("e13",e7)
         egroup.add(e1)
    }    
}

function bullets()
{
    var bullet
    bullet=createSprite(0,350,10,10)
    bullet.x=p1.x
    bullet.velocityY=-7
    bullet.lifetime=80
    bullet.addImage("b5",b4)
    bullet.scale=0.04
    bulletgroup.add(bullet)
}
