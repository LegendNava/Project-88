canvas = new fabric.Canvas('myCanvas')
block_img_width = 30;
block_img_height = 30;
playerX = 10;
playerY = 10;
playerObjects = "";
blockImageObjects = "";

function player_update() {
    fabric.Image.fromURL("iron man.png", function(Img) {
        playerObjects = Img;
        playerObjects.scaleToWidth(150);
        playerObjects.scaleToHeight(140);
        playerObjects.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObjects);
    });
}

function new_IMAGE(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        blockImageObjects = Img;
        blockImageObjects.scaleToWidth(block_img_width);
        blockImageObjects.scaleToHeight(block_img_height);
        blockImageObjects.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObjects);
    });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == '80') {
        console.log("Shift + P is Pressed");
        block_img_height = block_img_height + 10;
        block_img_width = block_img_width + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        console.log("Shift + M is Pressed");
        block_img_height = block_img_height - 10;
        block_img_width = block_img_width - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keypressed == '37') {
        console.log("Left Arrow Key is Pressed")
        left();
    }
    if (keypressed == '38') {
        console.log("Up Arrow Key is Pressed")
        up();
    }
    if (keypressed == '39') {
        console.log("Right Arrow Key is Pressed")
        right();
    }
    if (keypressed == '40') {
        console.log("Down Arrow Key is Pressed")
        down();
    }
    if (keypressed == '70') {
        console.log("f Pressed");
        new_IMAGE('spiderman_face.png');
    }
    if (keypressed == '66') {
        console.log("b Pressed");
        new_IMAGE('ironman_body.png');
    }
    if (keypressed == '76') {
        console.log("l Pressed");
        new_IMAGE('hulk_legs.png');
    }
    if (keypressed == '82') {
        console.log("r Pressed");
        new_IMAGE('thor_right_hand.png');
    }
    if (keypressed == '72') {
        console.log("h Pressed");
        new_IMAGE('captain_america_left_hand.png');
    }
}

function up() {
    if (playerY >= 0) {
        playerY = playerY - block_img_height;
        console.log("Block Immage Height = " + block_img_height);
        console.log("When Up Arrow Key Is Pressed, x = " + playerX + " y = " + playerY);
        canvas.remove(playerObjects);
        player_update();
    }
}

function down() {
    if (playerY <= 500) {
        playerY = playerY + block_img_height;
        console.log("Block Immage Height = " + block_img_height);
        console.log("When Down Arrow Key Is Pressed, x = " + playerX + " y = " + playerY);
        canvas.remove(playerObjects);
        player_update();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - block_img_width;
        console.log("Block Image Width = " + block_img_width);
        console.log("When Left Arrow Key Is Pressed, x = " + playerX + " y = " + playerY);
        canvas.remove(playerObjects);
        player_update();
    }
}

function right() {
    if (playerX < 870) {
        playerX = playerX + block_img_width;
        console.log("Block Image Width = " + block_img_width);
        console.log("When Right Arrow Key Is Pressed, x = " + playerX + " y = " + playerY);
        canvas.remove(playerObjects);
        player_update();
    }
}