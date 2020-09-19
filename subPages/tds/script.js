let player = {
    sprite : new Image(100,100), 
    x : 0,
    y : 0
}
player.sprite.src= "img/player.png"

let ctx = field.getContext("2d")
field.width = window.innerWidth;
field.height = window.innerHeight;
function draw() {  
    let bg = new Image()
    bg.src = "img/background.jpg"
    bg.onload = () => {
        ctx.drawImage(bg, 0, 0)
    }
    player.sprite = new Image(100,100);
    player.sprite.src = "img/player.png";
    
    player.sprite.onload = () => {
       
        ctx.drawImage(player.sprite,player.x,player.y)
    }
}
$(field).on("mousemove", function (e) {
    player.x = e.offsetX
    player.y = e.offsetY
    draw();
});
