class Register{
  constructor(x, y, width, height, cost, asset, assetHeight, offset, scale){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.cost = cost
    this.asset = loadImage("assets/"+asset)
    this.assetHeight = assetHeight
    this.offset = offset
    this.scale = scale

  }
  
  draw(){
    //noFill()
    //image(this.asset, this.x + this.scale/2 , this.y + this.scale/2, this.width- this.scale, this.assetHeight - this.scale)
    image(this.asset, this.x + this.scale/2, this.y +this.offset, this.width - this.scale, this.assetHeight - this.scale)
    noFill()
    color("blue")
    //rect(this.x, this.y, this.width, this.height)
  }
  
  clicked(){
    if((mouseX > this.x && mouseX < this.x+this.width) && (mouseY > this.y && mouseY < this.y + this.height)){
      return this.cost
    }
    else{
      return 0
    }
  }
}