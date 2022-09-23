for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keydown", function(Event){
    makeSound(Event.key);
    buttonAnimation(Event.key);
});

function makeSound(key) {
  switch(key){
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
    case "j":
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        break;
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
    default: console.log();
  }

}

function buttonAnimation(currentKey) {
    document.querySelector("."+currentKey).classList.toggle("pressed");
    
    setTimeout(function(){
        document.querySelector("."+currentKey).classList.toggle("pressed");
    },100);
}
