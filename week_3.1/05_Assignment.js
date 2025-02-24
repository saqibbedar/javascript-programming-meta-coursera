// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (items of dairy) {
        console.log(items);
    }
}
logDairy();
// Task 2
const animal = {canJump: true};
 const bird = Object.create(animal);
 bird.canFly = true;bird.hasFeathers = true;
 
 function birdCan(){
    for (birds of Object.keys(bird)){
        console.log(birds + ": " + bird[birds]);
    }
}
    birdCan();

// Task 3
 function animalCan(){
    for (birds in bird){
    console.log(birds + ": " + bird[birds]);
    }
}
animalCan();  

