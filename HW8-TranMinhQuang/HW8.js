// ------------------1--------------------
const names1 = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.log(names1[0], ", ", names1[names1.length-1]);

// ------------------2--------------------
const names2 = ["John", "Jane", "Jim", "Jake"];
names2[1] = "Mary";
console.log(names2);

// ------------------3--------------------
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names3.length; i++) {
    console.log("Tên Người Thứ ",i+1,"là ", names3[i]);
}

// ------------------4--------------------
const names4 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
names4.push("Mindx");
console.log(names4);

// ------------------5--------------------
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers5.length; i++) {
    if (numbers5[i]%2 === 1) {
        console.log("Số lẻ là: ", numbers5[i]);
    }
}

// ------------------6--------------------
const names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < names6.length; i++) {
    if (names6[i] === "David") {
        console.log("David ở vị trí số ", i+1);
    }
}

// ------------------7--------------------
const numbers7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting7 = 2;
let c=0;
for (let i = 0; i < numbers7.length; i++) {
    if (numbers7[i] === 2) {
        c++;
    }
}
console.log("Số lần xuất hiện là: ", c);

// ------------------8--------------------
const numbers8 = [5, 2, 9, 3, 7, 11, 8];
let m=0;
for (let i = 0; i < numbers8.length; i++) {
    if (numbers8[i] > m) {
        m = numbers8[i];
    }
} 
console.log("Số lớn nhất là: ", m);

// ------------------9--------------------
const array9 = [1, 2, 3, 4, 5];
array9.reverse();
console.log(array9);

// ------------------10--------------------
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
for (let i = 0; i < duplicatesArray.length; i++) {
    for (let u = 1; u < duplicatesArray.length; u++)
        if (duplicatesArray[i] == duplicatesArray[u] && i != u) {
            duplicatesArray.splice(u,1);
        }
}
console.log(duplicatesArray)

// ------------------11--------------------
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Sum = 0;
for (let i = 0; i < numbers11.length; i++) {
    Sum = Sum + numbers11[i];
}
console.log(Sum);