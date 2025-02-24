// define the Train class - Remember to names first Letter would in Capital as Train not train

// class Train { 
//     // first piece of code - define constructor
//     //  constructor will be used to build properties on the future object instance of the Train class.
//     constructor(color, lightsOn){
//         this.color = color; // property of Trains object instance
//         this.lightsOn = lightsOn;
//     }
// }

// var firstTrain = new Train('red', false)
// console.log(firstTrain);

// // Adding some more trains property
// var secoTrain = new Train ('yellow', false)
// console.log(secoTrain);

// // Adding third train
// var thirdTrain = new Train ('golde', true)
// console.log(thirdTrain);


// Adding more methods 

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    // Adding more methods - these methods will then be shared by all future instance objects of my Train class.
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// Now, there are four methods on your Train class: 
// toggleLights(), lightsStatus(),  getSelf() and getPrototype()

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.