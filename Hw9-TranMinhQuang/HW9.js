// ----------------------1---------------------
const student1 = { name: "John", age: 20 }
student1.major =  "Science";

console.log(student1);

// ----------------------2---------------------
const person2 = { name: "Alice", age: 25, job: "Designer" }
delete person2.job;

console.log(person2);
// ----------------------3---------------------
const car3 = { brand: "Toyota", model: "Camry", year: 2020 }
console.log(Object.keys(car3).length)

// ----------------------4---------------------
const product4 = { name: "Laptop", price: 1000 }
const array4 = [];
for (let key in product4) {
    array4.push(key+ ":  " + product4[key]);
}
console.log(array4);

// ----------------------5---------------------
const products5 = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
for (let i = 0; i< products5.length; i++) {
    if (products5.name === "Camera") {console.log(products5)}
}

// ----------------------6---------------------
const products6 = [ { name: "Phone", price: 50 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ]
for (let i = 0; i< products6.length; i++) {
    if (products6.price > 100) {console.log(products6)}
}

// ----------------------7---------------------
const person7 = { name: "Bob", age: 25, job: "Developer" }
person7.age = 30;
console.log(person7);

// ----------------------8---------------------
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const joinobj = Object.assign(obj1,obj2);


console.log(joinobj);
// ----------------------9---------------------
const animal9 = { type: "Dog", name: "Buddy", age: 3 }
for (let key in animal9) {
    console.log(key + ":  " + animal9[key]);
}


// ---------------------10---------------------
const car10 = { brand: "BMW", model: "X5" }

console.log('color' in car10);