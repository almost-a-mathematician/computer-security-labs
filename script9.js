function Task1(){
    let n;
    n = document.getElementById("n").value;
    let k;
    k = document.getElementById("k").value;
    let s;
    s = document.getElementById("s").value;
    let m;
    m = document.getElementById("m").value;
    let v;
    v = document.getElementById("v").value;
    let options = Math.pow(n,k);
    let t = options/s;
    let time = t*(v/m);
    let result = time + t;
    let res = result/60/60/24;
    document.getElementById("result1").innerText=res.toFixed(3);
    return res.toFixed(3);
}

function Task2(){
    let n2 = document.getElementById("n2").value;
    let t2 = document.getElementById('t2').value;
    let s2 = document.getElementById("s2").value;
    let c = t2 * s2 * 365 * 24 * 60 * 60;
    let res2 = Math.log(c)/Math.log(n2);
    document.getElementById("result2").innerText=res2.toFixed(0);
    return res2;
}

function Task3(){
    let k3 = document.getElementById("k3").value;
    let t3 = document.getElementById("t3").value;
    let s3 = document.getElementById("s3").value;
    let res3;
    res3= Math.pow(t3*365*24*3600*s3, 1/k3);
    document.getElementById("result3").innerText=res3.toFixed(0);
    return res3;
}