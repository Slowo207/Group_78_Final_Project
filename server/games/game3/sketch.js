function setup() {
  createCanvas(800, 800);
  registerArray = []
  clientAssetArray = ["Boy.png", "Girl.png", "Grandma.png"]
  fishAssetArray = ["Fish_blue.png", "Fish_green.png", "Fish_orange.png", "Fish_purple.png", "Fish_yellow.png"]
  levelArray = [
    [0.1, 1, 0.1, false],
    [0.1, 1, 0.05, false],
    [1, 100, 10, true],
    [1, 100, 5, true],
    [1, 100, 1, true]
  ]

  resetGame()

  //loading assets
  registerAsset = loadImage('assets/Register.png')

  priceTag = loadImage('assets/PriceTag.png')

  registerArray.push(new Register(104+75*0, 404, 71, 195, 50, "Note50.png", 195, 0, 0))
  registerArray.push(new Register(103+75*1, 404, 71, 195, 20, "Note20.png", 195, 0, 0))
  registerArray.push(new Register(102+75*2, 404, 71, 195, 10, "Note10.png", 195, 0, 0))
  registerArray.push(new Register(100+75*3, 404, 71, 195, 5, "Note5.png", 195, 0, 0)), 
  
  registerArray.push(new Register(104+75*0, 600, 75, 100, 1, "GoldCoin.png", 75, 10, 10))
  registerArray.push(new Register(100+75*1, 600, 75, 100, 0.50, "SilverCoin.png", 75, 10, 10))
  registerArray.push(new Register(100+75*2, 600, 75, 100, 0.25, "BrassCoin.png", 75, 10, 10))
  registerArray.push(new Register(100+75*3, 600, 75, 100, 0.10, "BrassCoin.png", 75, 10, 10))
}

function resetGame(){
  fishArray = []
  changeArray = [[],[],[],[],[],[],[],[]]
  fish = 0
  cost = 0
  change = 0 
  gameState = 0
  score = 0
  level = 4

  //registerArray.push()
  fishPrice(levelArray[level])
}

function draw() {
  background(220);
  
  if(gameState == 0){
    startPage()
  }else if (gameState == 1){
    gamePage()
  }else if (gameState == 2){
    endPage()
  }
}

function fishPrice(priceArray){
  startPrice = priceArray[0]
  endPrice = priceArray[1]
  increment = priceArray[2]
  rD = priceArray[3]
  
  for(i=0; i < 10; i++){
    cost = getRndInteger(startPrice, endPrice, rD)
    fishArray.push(new Fish(cost, findPaid(cost,endPrice, increment), clientAssetArray[getRndInteger(0,3,true)], fishAssetArray[getRndInteger(0,5,true)]))
  }  
}

function startPage(){
  textSize(32)
  fill("black")
  text("Start", 370, 350)
  noFill()
  rect(300, 300, 200, 100)
}

function gamePage(){
  image(registerAsset, 100, 400, 300, 300)

  textSize(32)
  fill("black")
  text(score, 50, 50)
  //text("Fish", 400, 450)
  text("Paid", 100, 100)
  text("Change", 250, 100)
  text(change, 300, 150)
  text("Give Change", 150, 375)

  noFill()
  //register box
  rect(100, 400, 300, 300) 
  //Paid box
  rect(120, 120, 120, 200)
  //change box
  rect(260, 120, 120, 200)
  //fish box
  rect(400, 400, 300, 300)
  //cash box
  rect(100, 100, 300, 300)
  //give change box
  rect(150, 350, 200, 30)
  
  for(i=0; i < registerArray.length; i++){
    registerArray[i].draw()
  }  
  
  fishArray[fish].draw()

  text("50", 120+75*0, 510)
  text("20", 120+75*1, 510)
  text("10", 120+75*2, 510)
  text("5", 125+75*3, 510)
  
  text("1", 133+75*0, 650)
  text(".50", 120+75*1, 650)
  text(".25", 120+75*2, 650)
  text(".10", 120+75*3, 650)
}

function endPage(){
  textSize(32)
  fill("black")
  text("End", 370, 350)
  text(score, 370, 300)
  noFill()
  rect(300, 300, 200, 100)
}

function mouseClicked(){
  if(gameState == 0){
    if((mouseX > 300 && mouseX < 500) && (mouseY > 300 && mouseY < 400)){
      gameState = 1
    }
  }else if (gameState == 1){
    if(mouseX < 400 && mouseY > 400 ){
      for(i=0; i < registerArray.length; i++){
        change += registerArray[i].clicked()
      }
    }else if((mouseX < 350 && mouseX > 150)&&(mouseY < 380 && mouseY > 350)){
      if(change == fishArray[fish].change){
        score += 1
      }else{
        console.log(fishArray[fish].change, change)
      }
      change = 0
      fish += 1
      if(fish > fishArray.length -1){
        gameState = 2
      }
    }
  }else if (gameState == 2){
    console.log("endGame1")
    if((mouseX > 300 && mouseX < 500) && (mouseY > 300 && mouseY < 400)){
      console.log("end")
      gameState = 0
      resetGame()
    }
  }
}

function getRndInteger(min, max, rD) {
  n = (Math.random() * (max - min)  + min)*100;
  n = Math.floor(n)/100
  if(rD == true){
    return Math.floor(n)
  }else if(rD == false){
    return n
  }
}

function removeDecimal(n){
  return Math.floor(n)
}

function findPaid(num, endPrice, increment) {
  m = endPrice - num
  mRemainder = Math.floor(m/increment)
  mRandom = getRndInteger(1, mRemainder, true)
  return num + increment*mRandom
}