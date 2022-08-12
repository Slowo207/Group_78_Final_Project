class SceneryGenerator
{
    constructor(x_coord, y_coord, scene_width, scene_height)
    {
        this.x = x_coord;
        this.y = y_coord;
        this.s_width = scene_width;
        this.s_height = scene_height;
    }

    displayScenery()
    {
        //game background design

        push();

        //sky
        fill("#b7e8ff");
        rect(this.x, this.y, this.s_width, this.s_height);

        //sea
        fill("#6eb5ff")
        stroke("#6eb5ff");
        rect(0, 2*this.y, this.s_width, 3*this.s_height/4);

        pop();
    }
}