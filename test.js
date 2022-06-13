var a = 5;
const f() => {
    if(a) {
        console.log(a);
        var a = 10;
    }
}
f();