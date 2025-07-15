// -------------------1--------------------
var x= prompt("Nhập chiều Dài:  ");
var y= prompt("Nhập chiều Rộng:  ");

console.log('Dien tich hinh chu nhat la: ',x*y);

// -------------------2--------------------
var second = prompt("Nhập Giây:  ")
var hour = Math.floor(second/3600);
var minute = Math.floor((second-hour*3600)/60);
second = second - hour*3600 - minute*60;

console.log(hour, 'Giờ', minute, 'Phút', second);
// -------------------3--------------------
var a= prompt("Nhập Số Nguyên: ");
var b= prompt("Nhập Luỹ Thừa:  ");
console.log('Luỹ thừa: ', Math.pow(a,b));
// -------------------4--------------------
var a= prompt("Nhập Số: ");
var b= prompt("Nhập Số: ");
var c= prompt("Nhập Số: ");
console.log('Trung Bình Cộng của 3 số là: ', (a+b+c)/3);
// -------------------5--------------------
var x1= prompt("Nhập x1: ");
var y1= prompt("Nhập y1: ");
var x2= prompt("Nhập x2: ");
var y2= prompt("Nhập y2: ");
var tb= Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
console.log('Khoảng cách giữa 2 điểm là: ', tb);
// -------------------6--------------------
var a= prompt("Nhập Số: ");
var b= prompt("Nhập Số: ");
var c= prompt("Nhập Số: ");
var test = true;
if (a <= b || a <= c ) {
    test = false;
}
console.log('6: ',test);
// -------------------7--------------------
var a= prompt("Nhập Số: ");
var b= prompt("Nhập Số: ");
var test = false;
if(a===b) {
    test = true;
}
console.log('7: ',test);
// -------------------8--------------------
var a= prompt("Nhập Số: ");
if (a>=0) {
    console.log('8: ',true);
} else {
    console.log('8: ',false);
};
// -------------------9--------------------
var a= prompt("Nhập Số: ");
var test = false;
if (a%400 === 0 && a%4===0) {
    test = true;
}
console.log('9: ',test);
// -------------------10-------------------
var h1= prompt("Nhập Giờ 1: ");
var m1= prompt("Nhập Phút 1: ");
var h2= prompt("Nhập Giờ 2: ");
var m2= prompt("Nhập Phút 2: ");
var test = false;
if (h1 > h2) {
    test = true;
} if (h1 = h2) {
    if (m1 > m2) {
        test = true;
    }
};
console.log ('10: ',test);