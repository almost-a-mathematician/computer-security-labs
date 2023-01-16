window.addEventListener('DOMContentLoaded', function() {
  
    var UserText = document.getElementById('text-to-work');
    var UserSelectStap = document.getElementById('encrypt-step');
    var UserStep = Number(UserSelectStap.value);
    var result = document.getElementById('output');
    var Encrypt = document.getElementById('encrypt-btn');
    var Decrypt = document.getElementById('decrypt-btn');
    var Reset = document.getElementById('btn-reset');
    var TextToWork;
    var pos;
    
    var OtherSymbols = [' ',',','.',':',';','!','?','-','_','=','+','(',')','[',']','@','`',"'",'"','<','>','|','/','%','$','^','&','*','~'];
    var Numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var RusAlfUp = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];
    var RusAlfLower = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];
    var EngAlfUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var EngAlfLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z'];

    var RusAlfUpEncrypt = Array(33);
    var RusAlfLowerEncrypt = Array(33);
    var EngAlfUpEncrypt = Array(26); 
    var EngAlfLowerEncrypt = Array(26);
   
    var NumbersEncrypt = Array(10);
    
    initEncrypt();
    
    UserSelectStap.addEventListener('change', function() {
      UserStep = Number(this.value);
      initEncrypt();
    });
    
    function initEncrypt() {
      RusAlfUpEncrypt = CezarEncrypt(UserStep, RusAlfUp);
      RusAlfLowerEncrypt = CezarEncrypt(UserStep, RusAlfLower);
      NumbersEncrypt = CezarEncrypt(UserStep, Numbers);
      EngAlfUpEncrypt = CezarEncrypt(UserStep, EngAlfUp);
      EngAlfLowerEncrypt = CezarEncrypt(UserStep, EngAlfLower);
    }
  
    function CezarEncrypt(stap, arr) {
      var CopyAlf = arr.slice();
      var i = 0;
      
      while ((i + stap) < (CopyAlf.length)) {
        var buff = CopyAlf[i];
        CopyAlf[i] = CopyAlf[i + stap];
        CopyAlf[i + stap] = buff;
        i++;     
      }
      return CopyAlf;
    }
    
    function contains(symb, arr) {
      var letter = symb;
      pos = 0;
      for (var i = 0; i < arr.length; i++) {
        if (letter === arr[i]) {
          pos = i;
          return true;
          break;
        }
      }
    }
    
    function encrypt(text) {
      var result = '';
      for (var i = 0; i <= text.length; i++) {
        var symbol = text[i];
        if (contains(symbol, OtherSymbols)) {
          result += symbol;
        }
        if (contains(symbol, Numbers)) {
          symbol = NumbersEncrypt[pos];
          result += symbol;
        }
        if (contains(symbol, RusAlfUp)) {
            symbol = RusAlfUpEncrypt[pos];
            result += symbol;
        }
        if ((contains(symbol, RusAlfLower))) {
            symbol = RusAlfLowerEncrypt[pos];
            result += symbol;
        }
        if (contains(symbol, EngAlfUp)) {
            symbol = EngAlfUpEncrypt[pos];
            result += symbol;
        }
        if ((contains(symbol, EngAlfLower))) {
            symbol = EngAlfLowerEncrypt[pos];
            result += symbol;
        }
      }
      return result;
    }
    
    function decrypt(text) {
      var result = '';
      for (var i = 0; i <= text.length; i++) {
        var symbol = text[i];
        if (contains(symbol, OtherSymbols)) {
          result += symbol;
        }
        if (contains(symbol, NumbersEncrypt)) {
          symbol = Numbers[pos];
          result += symbol;
        }
        if (contains(symbol, RusAlfUpEncrypt)) {
            symbol = RusAlfUp[pos];
            result += symbol;
        }
        if ((contains(symbol, RusAlfLowerEncrypt))) {
            symbol = RusAlfLower[pos];
            result += symbol;
        }
        if (contains(symbol, EngAlfUpEncrypt)) {
            symbol = EngAlfUp[pos];
            result += symbol;
        }
        if ((contains(symbol, EngAlfLowerEncrypt))) {
            symbol = EngAlfLower[pos];
            result += symbol;
        }
      }
      return result;
    }
  
    Encrypt.addEventListener('click', function() {
      TextToWork = UserText.value;
      result.value = encrypt(TextToWork);
    });
    Decrypt.addEventListener('click', function() {
      TextToWork = UserText.value;
      result.value = decrypt(TextToWork);
    });
    Reset.addEventListener('click', function() {
      UserText.value = '';
      result.value = '';
    });
    
  });


  /////////////////////////////////////////////

  

  var isChet = false;
  var isEnd = false;
  var flag = false;
  var flagX = false;
  var flagAdd = false;
  function getKeyword(key) { 
     var key = document.getElementById("key").value;
     return document.getElementById("key").value;
  }
  
  function getString() {
    return document.getElementById("String").value;
  }
  
  function processKey() { 
    var key = getKeyword();
    key = key.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    var result = [];
    var temp = '';
    var alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
    for(var i = 0; i < key.length; i++) {
      if (alphabet.indexOf(key[i]) !== -1) {
        alphabet = alphabet.replace(key[i], '');
        temp += key[i];
      }
    }
    temp += alphabet;
    var result = [];
    temp = temp.split('');
    while(temp[0]) {
      result.push(temp.splice(0,5));
    }
    return result;
  }
  
  function cipher() {
    var keyresult = processKey();
    var res = [];
    var error = 'Warning!!! String is empty';
    var str = getString();
    if(str === '') {
      document.getElementById('printValue').innerHTML = error;
    }
    // var err = 'ERRORX';
    var textPhrase, separator;
    str = str.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
    if(str.length === 0) {
      //document.getElementById("printValue").innerHTML = err.toUpperCase().replace(/\s/g, '').replace(/J/g, "I");
      }
    else {
      textPhrase = str[0];
    }
    var help = 0; flagAdd = false;
    for(var i = 1; i < str.length; i++) {
        if(str[i - 1] === str[i]) {
          if(str[i] === 'X') {
            separator = 'Q';
          }
          else {
            separator = 'X';
          }
          textPhrase += separator + str[i];
          help = 1; 
        }
        else {
          textPhrase += str[i];
        }
      if(help === 1) {
        flagAdd = true;
      }
    }
    
    if(textPhrase.length % 2 !== 0) {
      if(textPhrase[textPhrase.length - 1] === 'X') {
        textPhrase += 'Q';
        isEnd = true;
        flagX = false;
      }
      else {
        textPhrase += 'X';
        isEnd = true;
        flagX = true;
      }
    }
    
    var t = [];
    var enCodeStr = '';
    for(var i = 0; i < textPhrase.length; i += 2){
        var pair1 = textPhrase[i];
        var pair2 = textPhrase[i + 1];
        var p1i, p1j, p2i, p2j;
        for(var stroka = 0; stroka < keyresult.length; stroka++) {
          for(var stolbec = 0; stolbec < keyresult[stroka].length; stolbec++){
            if (keyresult[stroka][stolbec] == pair1){
                p1i = stroka;
                p1j = stolbec;
            }
            if (keyresult[stroka][stolbec] == pair2){
                p2i = stroka;
                p2j = stolbec;
            }
          }
        }
      var coord1 = '', coord2 = '';
      
      if(p1i === p2i) {
        if(p1j === 4) {
          coord1 = keyresult[p1i][0];
        }
        else {
          coord1 = keyresult[p1i][p1j + 1];
        }
        if(p2j === 4) {
          coord2 = keyresult[p2i][0];
        }
        else {
          coord2 = keyresult[p2i][p2j + 1]
        }
      }
      if(p1j === p2j) {
        if(p1i === 4) {
          coord1 = keyresult[0][p1j];
        }
        else {
          coord1 = keyresult[p1i + 1][p1j];
        }
        if(p2i === 4) {
          coord2 = keyresult[0][p2j];
        }
        else {
          coord2 = keyresult[p2i + 1][p2j]
        }
      }
      if(p1i !== p2i && p1j !== p2j) {
        coord1 = keyresult[p1i][p2j];
        coord2 = keyresult[p2i][p1j];
      }
      enCodeStr = enCodeStr + coord1 + coord2;
    }
    document.getElementById("printValue").innerHTML = enCodeStr;
    // alert("Добавили букву в середине слова? - " + flagAdd);
    return enCodeStr;
  }
  
  function deCodeCipher() {
    var deCodeStr = '';
    var text = '';
    var error = "Warning!!! String is empty";
    var text1 = cipher();
    if(text1 === '') {
      document.getElementById('printDeCode').innerHTML = error;
    }
    var keyresult = processKey();
    for(var i = 0; i < text1.length; i += 2){
        var pair1 = text1[i];
        var pair2 = text1[i + 1];
        var p1i, p1j, p2i, p2j;
        for(var stroka = 0; stroka < keyresult.length; stroka++) {
          for(var stolbec = 0; stolbec < keyresult[stroka].length; stolbec++){
            if (keyresult[stroka][stolbec] == pair1){
                p1i = stroka;
                p1j = stolbec;
            }
            if (keyresult[stroka][stolbec] == pair2){
                p2i = stroka;
                p2j = stolbec;
            }
          }
        }
      var coord1 = '', coord2 = '';
      
      if(p1i === p2i) {
        if(p1j === 0) {
          coord1 = keyresult[p1i][4];
        }
        else {
          coord1 = keyresult[p1i][p1j - 1];
        }
        if(p2j === 0) {
          coord2 = keyresult[p2i][4];
        }
        else {
          coord2 = keyresult[p2i][p2j - 1]
        }
      }
      if(p1j === p2j) {
        if(p1i === 0) {
          coord1 = keyresult[4][p1j]
        }
        else {
          coord1 = keyresult[p1i - 1][p1j];
        }
        if(p2i === 0) {
          coord2 = keyresult[4][p2j];
        }
        else {
          coord2 = keyresult[p2i - 1][p2j]
        }
      }
      if(p1i !== p2i && p1j !== p2j) {
        coord1 = keyresult[p1i][p2j];
        coord2 = keyresult[p2i][p1j];
      }
      text = text + coord1 + coord2;
    }
    text = text.split('');
    
    for(var i = 0; i < text.length; i++) {
      var count;
      if (flagAdd) {
        if(text[i] === text[i + 2] && (text[i + 1] === 'X' || text[i + 1] === 'Q')) {
          count = i + 1;
          text.splice(count, 1);
        }
      }
      else if(flagAdd && isEnd && (flagX || !flagX)) {
        if(text[i - 2] === text[i] && (text[i - 1] === 'X' || text[i - 1] === 'Q'))
          count = i + 1;
        text.splice(count, 1);
      }
      else if(!flagAdd) {
        break;
      }
    }
    if(flagX) {
      text.pop();
    }
    if(isEnd && !flagX) {
      text.pop();
    }
    text = text.join('');
    console.log(text);
    document.getElementById('printDeCode').innerHTML = text;
  }
  
  