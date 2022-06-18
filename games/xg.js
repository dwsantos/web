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
function startGame() {
    var character = document.getElementById("character");
    var block = document.getElementById("block");
    var counter=0;
    function jump(){
        if(character.classList == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
            character.classList.remove("animate");
        },300);
    }
    var checkDead = setInterval(function() {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
        if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
            block.style.animation = "none";
              var answer = window.prompt("Game Over. score: "+Math.floor(counter/100) ". Would you like to continue?");
              if (answer.toLowerCase() == "yes"){
                    counter=0;
                    block.style.animation = "block 1s infinite linear";
              }
              else {
                return;
              }
          /**  alert("Game Over. score: "+Math.floor(counter/100));
            counter=0;
            block.style.animation = "block 1s infinite linear";**/
        }else{
            counter++;
            document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
        }
    }, 10);
}
