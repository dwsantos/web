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
