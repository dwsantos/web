/**var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1080;
        this.canvas.height = 720;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }

button(){
    myGameArea.start();
}
**/
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
        setTimeout(function(){
            character.classList.remove("animate");
        }, 500);
}
var checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
        }, 10);;
