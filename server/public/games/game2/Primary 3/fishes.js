class fishes
{
    constructor(filepath, shape)
    {
        this.shape = shape;
        this.shape_img = loadImage(filepath);
        this.length = floor(random(10, 50));

        if(shape == "Square")
        {
            this.width = '-';
        }
        else
        {
            this.width = floor(random(1, this.length));
        }

        this.area = this.#generateArea();
        this.perimeter = this.#generatePeri();

    }

    #generateArea()
    {
        let area = 0;

        if(this.shape == "Square")
        {
            area = this.length * this.length;
        }
        else
        {
            area = this.length * this.width;
        }

        return area;
    }

    #generatePeri()
    {
        let perimeter  = 0;

        if(this.shape == "Square")
        {
            perimeter = this.length * 4;
        }
        else
        {
            perimeter = this.length * 2 +  this.width * 2;
        }
        
        return perimeter;
    }

}