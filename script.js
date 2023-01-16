//скример
window.addEventListener('load', () => {
    let video = document.querySelector('#scrimer');
    let play = document.querySelector('.play');
    let flag = false;

    const playOn = () => {
        video.play();
        flag = !flag
    }

    const playOff = () => {
        video.pause();
        flag = !flag;
    }

    play.addEventListener('click', () => {
        !flag ? playOn() : playOff();
    });
});

/*---------------------------------------------------------------------лр1-------------------------------------------------------------------- */
// № 1

$("#button-generate0").click(function(){
    var $input = $("#input-password-generate");
    let inputValue = $input.val();
    console.log(inputValue)
    let pass = generateBlyat(inputValue);
    console.log(pass)
      $input.val(pass)
   return false;
  });
  
function generateBlyat(number){
    let A = "0123456789!”#$%&'()*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      switch(Number(number)){
          case 1:
                  let length1 = 1;
                  let res1 =``;
                  for (let i = 0; i < length1; i++) {
                    res1 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res1;
          case 2:
                  let length2 = 2;
                  let res2 = '';
                  for (let i = 0; i < length2; i++) {
                    res2 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res2;
              
          case 3:
                  let length3 = 3;
                  let res3 = '';
                  for (let i = 0; i < length3; i++) {
                    res3 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res3;
              
          case 4:
                  let length4 = 4;
                  let res4 = '';
                  for (let i = 0; i < length4; i++) {
                    res4 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res4;
              
          case 5:              
                  let length5 = 5;
                  let res5 = '';
                  for (let i = 0; i < length5; i++) {
                    res5 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res5;
              
          case 6:
                  let length6 = 6;
                  let res6 = '';
                  for (let i = 0; i < length6; i++) {
                    res6 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res6;
              
          case 7:
                  let length7 = 7;
                  let res7 = '';
                  for (let i = 0; i < length7; i++) {
                    res7 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res7;
              
          case 8:
                  let length8 = 8;
                  let res8 = '';
                  for (let i = 0; i < length8; i++) {
                    res8 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res8;
              
          case 9:
                  let length9 = 9;
                  let res9 = '';
                  for (let i = 0; i < length9; i++) {
                    res9 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res9;
              
          case 10:
                  let length10 = 10;
                  let res10 = '';
                  for (let i = 0; i < length10; i++) {
                    res10 += A[Math.floor(Math.random() * A.length)]
                  }
                  return res10;
                }
}

// № 2

$("#button-generate").click(function(){
    var $input = $("#input-password");
    $input.val('');
    var pass = generatePassword();
  $input.val(pass)
   return false;
});

function generatePassword(){  
 let a = generateElements123() + generateElements45() + generateElements67() + generateElement8();

 return a;
}

function generateElements123(){
 var length123 = 3;
 charset123 = "0123456789";
 let result = '';
 for (let i = 0; i < length123; i++) {
   result += charset123[Math.floor(Math.random() * charset123.length)]
 }
 return result;
}
 
 // if(window.crypto && window.crypto.getRandomValues) {
   // 	return Array(length123)
   // 		.fill(charset123)
   // 		.map(x => x[Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * (x.length + 1))])
   // 		.join('');   
   // } else {
   // 	res = '';
   // 	for (var i = 0, n = charset.length; i < length123; ++i) {
   // 		res += charset.charAt(Math.floor(Math.random() * n));
   // 	}
   // 	return res;
   // }

function generateElements45(){
 var length45 = 2;
 charset45 = "!”#$%&'()*";
 let result = '';
 for (let i = 0; i < length45; i++) {
   result += charset45[Math.floor(Math.random() * charset45.length)]
 }
 return result;
}
 
function generateElements67(){
 var length67 = 2;
 charset67 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let result = '';
 for (let i = 0; i < length67; i++) {
   result += charset67[Math.floor(Math.random() * charset67.length)]
 }
 return result;
}

function generateElement8(){
 var length8 = 1;
 charset8 = "abcdefghijklmnopqrstuvwxyz";
 let result = '';
 var elem = document.getElementById("input-password").innerHTML;
 for (let i = 0; i < length8; i++) {
   result += charset8[Math.floor(Math.random() * charset8.length) + elem.length ] 
 }
 return result;
}
 
