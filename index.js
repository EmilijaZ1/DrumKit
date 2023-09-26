


var noButtons = document.querySelectorAll(".drum").length;

function handleClick() {
    var buttonClicked = this.innerHTML;
    alert(buttonClicked);
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);

}

for (var i = 0; i < noButtons; i++ ) {
    document.querySelectorAll("button")[i].addEventListener("click",handleClick)
    
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
            console.log("test");
            break;
    }
}

function buttonAnimation(key) {

var activeButton = document.querySelector("." + key);
activeButton.classList.add("pressed");
setTimeout(function() {
    activeButton.classList.remove("pressed")
}, 100);

    switch (key) {
        case "w":
       
            break;
        case "a":
     
            break;
        default:
            console.log("test");
            break;
    }
}