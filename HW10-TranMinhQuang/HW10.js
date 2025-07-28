function bai1(x) {
    const a = 3;
    const b = 4;
    console.log(a*x + b);
}
// ----------------1----------------
function bai2(dai, rong) {
    console.log((dai+rong)*2);
}
// ----------------2----------------
function bai3(r) {
    let x = math.pow((math.pi*r),2);
    x = x.toFixed(2);
    console.log(x);
    return x;
}
// ----------------3----------------
function bai4(n) {
    for (let i = 2; i < n-1; i++) {
        if (n%i === 0) {return false
        } else {return true;}
    }
}
// ----------------4----------------
function bai5(...args) {
    let S = 0;
    for (let i = 0; i < args.length; i++) {
        S = S+args(i);
    }
    console.log(S);
    return S;
}
// ----------------5----------------
function bai6(dau, cuoi) {
    let S = 0;
    for (let i = dau; i < cuoi; i++) {
        S = S+i;
    }
    console.log(S);
    return S;
}
// ----------------6----------------
function bai7(chu) {
    let u = chu.length--;
    let t = true;
    for (let i = 0; i<chu.length; i++) {
        if (chu.charAt(i) != chu.charAt(u)) {
            t = false;
        }
        console.log(t);
        return t;
    }
}
// ----------------7----------------
function bai8(...args) {
      let t = true;
    for (let i = 0; i < args.length; i++) {
        if (args[i]%2 != 0) {t = false;}
    }
    console.log(t);
    return t;
}
// ----------------8----------------
function bai9 (...args) {
    let S = 0;
    for (let i = dau; i < cuoi; i++) {
        if (args[i] >= 0) {
            S = S + args[i];
        }
    }
    console.log(S);
    return S;
}
// ----------------9----------------
function bai9(a) {
    let x = 0;
    for (let i = 0; i < a.length; i++) {
        if (x < a[i]) {x = a[i];}
    }
}
// ---------------10----------------
function bai11(a) {
    for (let i = 0; i < a.length -1; i++) {
        if (a[i] > a[i+1]) {
            swap(a[i],a[i+1]);
        }
    }
}
function swap (a,b) {
    let t = a;
    a = b;
    b = t;
    return {a, b};
}
// ---------------11----------------
function bai12(a,k) {
    let b = [];
    for (let i = 0; i < a.length; i++) {
        for (let u = 0; u < b.length; u++) {
            if (b[u] != a[i]) b.push(a[i]);
        }
    }
    return u.length;
}
// ---------------12----------------
function bai13(a) {
    let x = 0;
    let x1= a[i];
    let y = 0;
    let b = [];
    for (let i = 0; i < a.length; i++) {
        for (let u = 0; u < b.length; u++) {
            if (b[u] != a[i]) b.push(a[i]);
        }
    }
    for (let i = 0; i < b.length; i++) {
        for (let u = 0; u < a.length; u++) {
            if (b[i] = a[u]) {x++}
        }
        if (x < y) {
            y = x;
            x1 = b[i];
        }
    }
    return x1;
}
// ---------------13----------------
function bai14(a) {
    const b = text.split(" ");
    return b;
}
// ---------------14----------------
function bai15(...args) {
    let s=0;
    for (let i = 0; i < args.length; i++) {
        if (args[i].isInterger()) s=s+args[i];
    }
    return s;
}