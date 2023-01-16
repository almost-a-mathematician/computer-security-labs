back = document.getElementById("bck");
back.addEventListener("click", changetabpr);
function changetabpr() {
  location.replace("../main/practice.html");
}
let fill = document.getElementById("fill");
let gen1 = document.getElementById("gen1");
let key1 = document.getElementById("key1")
let key2 = document.getElementById("key2")
let key3 = document.getElementById("key3")
let key1_2 = document.getElementById("key1_2")
let key2_2 = document.getElementById("key2_2")
let key3_2 = document.getElementById("key3_2")
let key4_2 = document.getElementById("key4_2")
let fill2 = document.getElementById("fill2");
let gen2 = document.getElementById("gen2");
let math = document.getElementById("math")
let change1 = document.getElementById("change1")
let change2 = document.getElementById("change2")
gen1.addEventListener("click", generate);


function powMod(n, p, m) {
  if (n < 1) { return 0; }
  if (m < 0) { m = 0; }
  p = Math.round(p);
  n = n % m;
  var r = 1;
  while (p >= 1) {
    if (p % 2) {
      r = (r * n) % m;
    }
    n = (n * n) % m;
    p = Math.floor(p / 2);
  }
  return r;
}

// 1
change1.onclick = function()
{
  if (gen1.textContent == "Encrypt") {
    gen1.textContent = "Decipher"
  }
  else
  {
    gen1.textContent = "Encrypt"
  }
}
key1.onchange = function()
{
  let p = key1.value
  let q = key2.value
  let m = (p-1)*(q-1)
  console.log(m)
  if(!isNaN(m)&&key2.value != "")
  math.innerText = `m = ${m}`
}

key2.onchange = function()
{
  let p = key1.value
  let q = key2.value
  let m = (p-1)*(q-1)
  console.log(m)
  if(!isNaN(m)&&key1.value!="")
  math.innerText = `m = ${m}`
}
function generate() {
  // генерация ключей
  p = key1.value
  q = key2.value
  let n = p * q
  m = (p - 1) * (q - 1)
  let e = parseInt(key3.value)
  if(m < parseInt(fill.value))
  {
    console.log("меньше m")
    return
  }
  if(!isPrime(p) || !isPrime(q) || isPrime(m))
  {
    console.log("p или q не являются простыми")
    return
  }
  let d = 0
  while(d*e % m != 1)
  {
    d+=1
  }
  d+=1
  while(d*e % m != 1)
  {
    d+=1
  }
  console.log(d)
  let opKey = [e, n] // открытый ключ
  let clKey = [d, n] // закрытый ключ
  console.log(opKey, clKey)

  //шифровка
  if(gen1.textContent == "Encrypt")
  {
    gen1.textContent =  "Decipher"
    let input = parseInt(fill.value)
    if(input > p*q)
    {
      console.log("текст слишком большой")
      return
    }
   let output = powMod(input,opKey[0],opKey[1])
   console.log(output)
   fill.value = output
  }
  //дешифровка
  else
  {
    gen1.textContent = "Encrypt"
    let input = parseInt(fill.value)
    let output = powMod(input,clKey[0],clKey[1])
    console.log(output)
    fill.value = output
  }
}

// 2
gen2.addEventListener("click", generate2)

change2.onclick = function()
{
  if (gen2.textContent == "Encrypt") {
    gen2.textContent = "Decipher"
  }
  else
  {
    gen2.textContent = "Encrypt"
  }
}

function generate2()
{
  let p = key1_2.value
  let g = key2_2.value
  let x = key3_2.value
  let k = key4_2.value
  let shifr = fill2.value
  if(gen2.textContent == "Encrypt")
  {
    gen2.textContent ="Decipher"
  if(isPrime(p) && x < p-1 && 1<x && k < p-1 && 1 < k){
    while(g**(p-1)%p!=1){
      g++
    }
    let y = powMod(g,x,p)
    console.log(`открытый ключ: ${p},${g},${y}`)
    console.log(`закрытый ключ: ${x}`)
    let a = powMod(g,k,p)
    let b = (y**k)*shifr%p
    console.log(a, " ", b)
    fill2.value = `${a}, ${b}`

  }
}
else
{
  gen2.textContent ="Encrypt"
  let arr = fill2.value.split(", ")
  let a = arr[0]
  let b = arr[1]
  let razshifr = (b*((a**(p-1-x))))%p
  fill2.value = razshifr  
  console.log(razshifr)
}
}

function isPrime(n) {
  if (n < 2) {
    return false;
  } else if (n === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i +=1;
  }

  return true;
}