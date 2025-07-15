// -------------------1--------------------
var a=0;
for (let i=1; i<=100; i++) {
    a = a+i;
} console.log('Tổng 100 số tự nhiên là: ', a);
// -------------------2--------------------
for (let i=1; i<=100; i++) {
    if (i%3 === 0 && i%5 === 0){
        console.log('Số Tự nhiên chia hết cho 3 và 5 là: ', i);
    }
}
// -------------------3--------------------
var N = prompt('Nhập số giai thừa: ');
var S=1;
for (let i=1; i<=N; i++) {
    S = S*i;
} console.log('Giai Thừa của ',N,' là: ', S);
// -------------------4--------------------
for (let i=2; i<=9; i++) {
    for (let u=1; u<=10; u++) {
        console.log(i,'*',u,'=',i*u)
    }
}
// -------------------5--------------------
var n = prompt('Nhập Số Nguyên: ');
var x = '';
for (let i = 0; i < 8; i++) {
    var a = n%2;
    x = a.toString() + x;
    n = Math.floor(n/2);
} console.log(x);
// -------------------6--------------------
var n = prompt('Nhập n: ');
var S = 0;
for (let i = 1; i <= n; i++) {
    S = i + Math.sqrt(S);
} console.log(S);
// -------------------7--------------------
var n = prompt('Nhập n: ');
var S = 0;
for (let i = n; i > 0; i--) {
    S = i + Math.sqrt(S);
} console.log(S);
