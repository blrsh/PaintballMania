function Ball(id) {
    //positioning
    this.x = -20;
    this.y = -20;
    this.xspeed = 0;
    this.yspeed = 0;
    this.speed = 10;
    this.wid = 10;
    this.id = id;

    //color
    var c = [0, 0, 0]
    if (id == 1) {
        c = [255, 0, 51]
    } else if (id == 2) {
        c = [22, 141, 255]
    }

    this.show = function () {
        fill(c[0], c[1], c[2]);
        ellipse(this.x, this.y, this.wid, this.wid);
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

}