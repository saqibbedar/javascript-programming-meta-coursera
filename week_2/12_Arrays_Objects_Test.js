// Object with an function
let car = {}
car.color = "red"
car.price = '10000$'
car.turnKey = function (){
    console.log('Engine Running')
}
car.lightsOn = function () {
    console.log('lights are on')
}
console.log(car);
car.turnKey()
car.lightsOn()