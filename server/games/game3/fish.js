class Fish{
  constructor(cost, paid, customerAsset, fishAsset){
    this.width = 75
    this.height = 200
    this.x = 500
    this.y = 550
    this.cost = cost
    this.paid = paid
    this.change = paid - cost
    this.customerAsset = loadImage("assets/" + customerAsset)
    this.fishAsset = loadImage("assets/" + fishAsset)
  }
  
  draw(){
    //draws price
    push()
    translate(550,400)
    rotate(PI/2)
    image(priceTag, 0, 0, 50, 50)
    pop()

    textSize(20)
    fill("black")
    text(this.cost, this.x+15, this.y- 130)
    
    //draws change
    textSize(32)
    fill("black")
    text(this.paid, 120, 220)

    //draws fish
    image(this.fishAsset, 425, 425, 100, 250)

    //draws custoemr
    image(this.customerAsset, 450, 100, 200, 300)


  }
}