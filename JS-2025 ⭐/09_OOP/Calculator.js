// const a = Symbol("a");
// const b = Symbol("b");

class Calculator{
    constructor(a, b){
        this.a = a || 0;
        this.b = b || 0;
    }
    set(a, b){
        this.a = a;
        this.b = b;
    }
    get(a, b){
        return ([this.a , this.b]);
    }
    add(){
        return (this.a + this.b);
    }
    subtract(){
        return (this.a - this.b);
    }
    multiply(){
        return (this.a * this.b);
    }
    divide(){
        if(this.b <= 0){
            console.log("Can't divide by zero");
            return;
        }
        return (this.a / this.b);
    }
    square(num){
        return num*num;
    }
    cube(num){
        return num*num*num;
    }
    toPositive(num){
        return num*-1;
    }
    toNegative(num){
        return num*-1;
    }
}
 
const calc = new Calculator(1,1);

console.log(calc.square(10), calc.cube(10));
console.log(calc.toPositive(-10)); // negative to positive
console.log(calc.toNegative(10)); // positive to negative