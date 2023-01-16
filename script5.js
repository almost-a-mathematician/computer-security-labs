function Ciepher_Rows(CipherForMatrix,matrixStringShifr) {
    let cipher = JSON.parse(JSON.stringify(CipherForMatrix)) 
    let matrix = JSON.parse(JSON.stringify(matrixStringShifr)) 
    for (let i = 0; i < matrixStringShifr.length; i++) {
        for (let j = 0; j < matrixStringShifr.length; j++) {
            matrix[i]=matrixStringShifr[cipher[1][i]] 
        }
    } 
    return matrix
}

function Ciepher_Column(CipherForMatrix,matrixStringShifr) {
    let cipher = JSON.parse(JSON.stringify(CipherForMatrix)) 
    let matrix = JSON.parse(JSON.stringify(matrixStringShifr)) 
    for (let i = 0; i < matrixStringShifr.length; i++) {
        for (let j = 0; j < matrixStringShifr.length; j++) {
            matrix[j][i]=matrixStringShifr[j][cipher[0][i]] 
        }
    } 
    return matrix
}

function Ciepher(CipherForMatrix,matrixStringShifr,flag) {
    let matrix = JSON.parse(JSON.stringify(matrixStringShifr)) 
    if(flag){
        matrix=Ciepher_Column(CipherForMatrix,matrix)
        matrix=Ciepher_Rows(CipherForMatrix,matrix)
    }
    else{
        matrix=Ciepher_Rows(CipherForMatrix,matrix)
        matrix=Ciepher_Column(CipherForMatrix,matrix)
    }
    return matrix
}

function MatrixToString(matrixString) {
    matrix_new = ""
    for (let i = 0; i < matrixString.length; i++) {
        matrix_new+=matrixString[i].join("")      
    }
    return matrix_new
}

function CiepherToUnCiepher(shifr) {
    let cipher = JSON.parse(JSON.stringify(shifr))
    for (let i = 0; i < shifr[0].length; i++) {
        for (let j = 0; j < shifr[0].length; j++) {
            cipher[0][shifr[0][j]]=j
            cipher[1][shifr[1][j]]=j
        }
    }
    return cipher
}

function Task1(stringForCipherFromUser,ShifrNumbersUser,flagUser) {
    let stringForCipher = stringForCipherFromUser 
    let cipherMatrixSize = Math.pow(stringForCipher.length, 1/2) 
    let matrixStringShifr=[]  
    let flag = flagUser
    while (!(Number.isInteger(cipherMatrixSize))) {
        stringForCipher+=" "
        cipherMatrixSize = Math.pow(stringForCipher.length, 1/2) 
    }


    for (let i = 0; i < cipherMatrixSize; i++) {
        matrixStringShifr.push([])
        for (let j = 0; j < cipherMatrixSize; j++) {
            matrixStringShifr[i].push(stringForCipher[j+i*cipherMatrixSize])
        }  
    }
    

    let TMPciepher = ShifrNumbersUser.split(" ")
    let CipherForMatrix = [[],[]] 
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < TMPciepher.length/2; j++) {
            CipherForMatrix[i].push(Number(TMPciepher[j+TMPciepher.length/2*i]))
        }  
    }
    
    let matrix = [] 
    let UnCiepher = [] 
    if(flag){
        UnCiepher = matrixStringShifr
    }
    else{
        UnCiepher = CiepherToUnCiepher(matrixStringShifr)
    }
    matrix = Ciepher(CipherForMatrix,UnCiepher,flag) 
    return MatrixToString(matrix) 
}

function GetCoordinateSymbol(alphabet, symbol) {
    for (let j = 0; j < alphabet.length; j++) {
        let ind = alphabet[j].indexOf(symbol)
        if(ind!=-1){
            return [ind,j]
        }      
        ind = alphabet[j].indexOf(symbol.toUpperCase())
        if(ind!=-1){
            return [ind,j]
        }     
    }        
}

function GetSymbol(alphabet,coordinates) {
    let number_column = coordinates[0]
    let number_row = coordinates[1]
    let new_symbol = alphabet[number_row][number_column]
    return new_symbol
}

// первый вариант полибия

function PolibiyShifr(strForPolibiy,alphabet) {
    let coordinates_symbols = []
    let container_coordinates = []
    let new_coordinates = []
    let string_shifr = ""
    for (let i = 0; i < strForPolibiy.length; i++) {
        coordinates_symbols.push(GetCoordinateSymbol(alphabet,strForPolibiy[i]))    
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < coordinates_symbols.length; j++) {
            container_coordinates.push(coordinates_symbols[j][i])
        }    
    }
    for (let i = 0; i < container_coordinates.length; i++) {    
        new_coordinates.push([container_coordinates[i],container_coordinates[++i]]) 
    }
    for (let i = 0; i < new_coordinates.length; i++) {    
        string_shifr+=GetSymbol(alphabet,new_coordinates[i])
    }

    return string_shifr
}

function PolibiyRasShifr(strForPolibiy,alphabet){
    let coordinates_symbols = []
    let container_coordinates = []
    let new_coordinates = []
    let string_shifr = ""
    for (let i = 0; i < strForPolibiy.length; i++) {
        coordinates_symbols.push(GetCoordinateSymbol(alphabet,strForPolibiy[i]))    
    }


    for (let j = 0; j < coordinates_symbols.length; j++) {
        container_coordinates.push(coordinates_symbols[j][0])
        container_coordinates.push(coordinates_symbols[j][1])
    }    
    
    for (let i = 0; i < container_coordinates.length/2; i++) {    
        new_coordinates.push([container_coordinates[i],container_coordinates[i+container_coordinates.length/2]])
    }
    for (let i = 0; i < new_coordinates.length; i++) {    
        string_shifr+=GetSymbol(alphabet,new_coordinates[i])
    }
    return string_shifr
}

function Polibiy1(strForPolibiy,alphabet,flag) {
    let str_array = [...(strForPolibiy.split(" "))]
    if(flag){
        for (let i = 0; i < str_array.length; i++) {
            str_array[i]=PolibiyShifr(str_array[i],alphabet)
        }
    }
    else{
        for (let i = 0; i < str_array.length; i++) {
            str_array[i]=PolibiyRasShifr(str_array[i],alphabet)
        }
    }
    return str_array.join(" ")
}


function Stabilization(str_stability) {
    str_stability=str_stability.replaceAll("Ъ","Ь")
    str_stability=str_stability.replaceAll("ъ","ь")

    str_stability=str_stability.replaceAll("ё","е")
    str_stability=str_stability.replaceAll("Ё","Е")

    str_stability=str_stability.replaceAll("э","е")
    str_stability=str_stability.replaceAll("Э","Е")
    str_stability=str_stability.replaceAll("з","ж")
    str_stability=str_stability.replaceAll("З","Ж")
    str_stability=str_stability.replaceAll("й","и")
    str_stability=str_stability.replaceAll("Й","И")
    str_stability=str_stability.replaceAll("с","р")
    str_stability=str_stability.replaceAll("С","Р")
    str_stability=str_stability.replaceAll("х","ф")
    str_stability=str_stability.replaceAll("Х","Ф")
    str_stability=str_stability.replaceAll("j","i")
    str_stability=str_stability.replaceAll("J","I")
    return str_stability
}

let strForPolibiy = "kasha"

strForPolibiy=Stabilization(strForPolibiy)

let ru = [
    ["А",	"Б",	"В",	"Г",	"Д"],
	["Е",	"Ж",	"И",	"К",	"Л"],
	["М",	"Н",	"О",	"П",	"Р"],
	["Т",	"У",	"Ф",	"Ц",	"Ч"],
    ["Ш",	"Ы",	"Ь",	"Ю",	"Я"]
]

let en = [
    ["A",	"B",	"C",	"D",	"E"],
	["F",	"G",	"H",	"I",	"K"],
	["L",	"M",	"N",	"O",	"P"],
	["Q",	"R",	"S",	"T",	"U"],
    ["V",	"W",	"X",	"Y",	"Z"]
]

// первый вариант полибия
strForPolibiy=Polibiy1(strForPolibiy,en,true)
console.log("Polibiy 1")
console.log("====================================================")
console.log(strForPolibiy)
strForPolibiy=Polibiy1(strForPolibiy,en,false)
console.log(strForPolibiy)
console.log("====================================================")


//второй вариант полибия
function PolibiyShifr2(strForPolibiy,alphabet) {
    let coordinates_symbols = []
    let container_coordinates = []
    let new_coordinates = []
    let string_shifr = ""
    for (let i = 0; i < strForPolibiy.length; i++) {
        coordinates_symbols.push(GetCoordinateSymbol(alphabet,strForPolibiy[i]))    
    }
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < coordinates_symbols.length; j++) {
            if((i==0)&&(j==0)){
                j++
            }
            container_coordinates.push(coordinates_symbols[j][i])
        }    
    }
    container_coordinates.push(coordinates_symbols[0][0])
    for (let i = 0; i < container_coordinates.length; i++) {    
        new_coordinates.push([container_coordinates[i],container_coordinates[++i]]) 
    }
    for (let i = 0; i < new_coordinates.length; i++) {    
        string_shifr+=GetSymbol(alphabet,new_coordinates[i])
    }

    return string_shifr
}

function PolibiyRasShifr2(strForPolibiy,alphabet){
    let coordinates_symbols = []
    let container_coordinates = []
    let new_coordinates = []
    let string_shifr = ""
    for (let i = 0; i < strForPolibiy.length; i++) {
        coordinates_symbols.push(GetCoordinateSymbol(alphabet,strForPolibiy[i]))    
    }


    for (let j = 0; j < coordinates_symbols.length; j++) {
        container_coordinates.push(coordinates_symbols[j][0])
        container_coordinates.push(coordinates_symbols[j][1])
    }    
    
    let x = container_coordinates.pop()
    container_coordinates.unshift(x)

    for (let i = 0; i < container_coordinates.length/2; i++) {    
        new_coordinates.push([container_coordinates[i],container_coordinates[i+container_coordinates.length/2]])
    }
    for (let i = 0; i < new_coordinates.length; i++) {    
        string_shifr+=GetSymbol(alphabet,new_coordinates[i])
    }
    return string_shifr
}

function Polibiy2(strForPolibiy,alphabet,flag) {
    let str_array = [...(strForPolibiy.split(" "))]
    if(flag){
        for (let i = 0; i < str_array.length; i++) {
            str_array[i]=PolibiyShifr2(str_array[i],alphabet)
        }
    }
    else{
        for (let i = 0; i < str_array.length; i++) {
            str_array[i]=PolibiyRasShifr2(str_array[i],alphabet)
        }
    }
    return str_array.join(" ")
}

strForPolibiy=Polibiy2(strForPolibiy,en,true)
console.log("Polibiy 2")
console.log("====================================================")
console.log(strForPolibiy)
strForPolibiy=Polibiy2(strForPolibiy,en,false)
console.log(strForPolibiy)
console.log("====================================================")


// третий вариант полибия

function NewAlphabet(alphabet, string_key) {
    let ru = MatrixToString(alphabet)
    let keys_6 = string_key.toUpperCase()
    keys_6 = [ ... new Set((keys_6+ru).split("")) ]
    let matrix_fuck_you = []
    for (let i = 0; i < 5; i++) {
        matrix_fuck_you.push([])
        for(let j =0;j<5;j++){
            matrix_fuck_you[i].push(keys_6[5*i+j])
        }
    }
    return matrix_fuck_you
}

let alphabet_en = JSON.parse(JSON.stringify(en)) 
let string_key = "punch" 
string_key=Stabilization(string_key) 
alphabet_en = NewAlphabet(alphabet_en,string_key)

strForPolibiy=Polibiy1(strForPolibiy,alphabet_en,true)
console.log("Polibiy 3")
console.log("====================================================")
console.log(strForPolibiy)
strForPolibiy=Polibiy1(strForPolibiy,alphabet_en,false)
console.log(strForPolibiy)
console.log("====================================================")



function isNumeric(num){
    return !isNaN(num)
  }

function Check1(keyForCheck,stringForCipherUser){
    let cipherMatrixSize = Math.pow(stringForCipherUser.length, 1/2)
    while (!(Number.isInteger(cipherMatrixSize))) {
        stringForCipherUser+=" "
        cipherMatrixSize = Math.pow(stringForCipherUser.length, 1/2) 
    }
    let checkar=keyForCheck.split(" ")
    if(checkar.length/2>cipherMatrixSize){
        alert("")
        return false
    }
    if(checkar.length/2!=cipherMatrixSize){
        alert("")
        return false
    }
    for (let i = 0; i < checkar.length; i++) {
        let check = checkar[i]
        if(isNumeric(check)){
            if(Number(check[i])>=cipherMatrixSize){
                alert("")
                return false
            }
        }
        else{
            alert("")
            return false
        }
    }
    return true
}

function Check2(text,lang){
    let strochka = text.toUpperCase().split(" ")
    for (let hz = 0; hz < strochka.length; hz++) {   
        for (let i = 0; i < strochka[hz].length; i++) {
            let flag = false
            for (let j = 0; j < lang.length; j++) {
                if(flag){
                    break;
                }
                for (let z = 0; z < lang[j].length; z++) {
                    if(lang[j].indexOf(strochka[hz][i])!=-1){
                        flag=true
                        break;
                    }
                }     
            }
            if(!flag){
                return false
            }        
        }
    }
    return true
}

document.body.addEventListener('click', e => {
    if (e.target.classList.contains('button_shifr')){
        let path = e.path

        let numberOfTask = [...path[3].children].indexOf(path[2])
        let numberOfButton = [...path[1].children].indexOf(path[0])
        let lang = []

        let flag = false
        if(numberOfButton==0){
            flag=true
        }

        let text = path[1].querySelectorAll(".text")[0]
        let key = path[1].querySelectorAll(".key")[0]
        let answer = path[1].querySelectorAll(".answer")[0]
        let lan = path[1].querySelectorAll(".select")[0]
        if(text.value==""){
            alert("input smth")
            return false
        }
        if((text.value).replaceAll(" ","")==""){
            alert("input smth")
            return false
        }
        if(key!=undefined){
            if(key.value==""){
                alert("enter key")
                return false
            }
            if((key.value).replaceAll(" ","")==""){
                alert("enter key")
                return false
            }
        }
        
        if(lan!=undefined){
            if(Number(lan.value)==0){
                lang = en
            }
            else{
                lang = ru
            }
        }

        let strochka = ""
        if (numberOfTask==0) {
            if(Check1(key.value,text.value)){
                strochka=Task1(text.value,key.value,flag)
                answer.value = strochka
            }
        }

        if (numberOfTask==1) {
            let tmpStrochenka = text.value
            tmpStrochenka = Stabilization(tmpStrochenka)
            if(Check2(tmpStrochenka,lang)){
                strochka=Polibiy1(tmpStrochenka,lang,flag)
                answer.value = strochka
            }else{
                alert("use another alphabet")
            }
        }
        if (numberOfTask==2) {
            let tmpStrochenka = text.value
            tmpStrochenka = Stabilization(tmpStrochenka)
            if(Check2(tmpStrochenka,lang)){
                strochka=Polibiy2(tmpStrochenka,lang,flag)
                answer.value = strochka
            }else{
                alert("use another alphabet")
            }
        }
        if (numberOfTask==3) {
            let tmpStrochenka = text.value
            let tmpStrochenka2 = key.value
            tmpStrochenka = Stabilization(tmpStrochenka)
            tmpStrochenka2 = Stabilization(tmpStrochenka2)
            if(Check2(tmpStrochenka,lang)){
                if(Check2(tmpStrochenka2,lang)){
                    strochka=Polibiy1(tmpStrochenka,NewAlphabet(lang,tmpStrochenka2),flag)
                    answer.value = strochka
                }else{
                    alert("use another alphabet")
                }
            }else{
                alert("use another alphabet")
            }
        }
    }
  })