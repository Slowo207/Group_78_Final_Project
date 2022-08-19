class Register{
  constructor(id, x, y, width, height, cost, asset, assetHeight, offset, scale, textOffsetX, textOffsetY){
    this.id = id
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.cost = cost
    this.asset = loadImage("games/game3/assets/"+asset)
    this.assetHeight = assetHeight
    this.offset = offset
    this.scale = scale
    this.textOffsetX = textOffsetX
    this.textOffsetY = textOffsetY

  }
  
  draw(){
    //noFill()
    //image(this.asset, this.x + this.scale/2 , this.y + this.scale/2, this.width- this.scale, this.assetHeight - this.scale)
    image(this.asset, this.x + this.scale/2 , this.y +this.offset, this.width - this.scale, this.assetHeight - this.scale)
    noFill()
    //color("black")
    textSize(28)
    fill("black")
    text(this.cost, this.x + this.textOffsetX + 15, this.y + this.textOffsetY)

    //rect(this.x, this.y, this.width, this.height)
  }
  
  clicked(){
    if((mouseX > this.x && mouseX < this.x+this.width) && (mouseY > this.y && mouseY < this.y + this.height)){
      return [this.id, this.cost]
    }
    else{
      return false
    }
  }
}