class Rectangle{
    constructor(width, height){
        this.height = height;
        this.width = width;
    }
    set(width, height){
        this.height = height;
        this.width = width;
    }
    get(){
        return [this.height, this.width] // returning array
    }
    area(){
        return this.height * this.width
    }
}

const rect = new Rectangle(1, 1);

rect.set(10, 20);

console.log(rect.area());
console.log(rect.get());

console.log(typeof Rectangle); // function