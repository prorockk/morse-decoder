const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr=[];
    let result='';
    let moorse=[];
    let moorseStr='';
    let str='';
    for (i=0; i<expr.length;i+=10){
        arr.push(expr.slice(i,i+10))    
    }
    for (i=0; i<arr.length;i++){
        str = arr[i]+'';
        moorseStr='';
        if (str=='**********'){
            moorse.push(' ')
        }
        else{
            for (j=0;j<str.length;j+=2){                                   
                    if (str.slice(j,j+2)=='10'){
                        moorseStr+='.'
                    }
                     else if (str.slice(j,j+2)=='11') {
                        moorseStr+='-'
                    }    
            }      
        }        
        if (moorseStr!=''){moorse.push(moorseStr)}    
    }
    for (i=0; i<moorse.length;i++){
        
        if (moorse[i]==' '){
            result+=' '
        }
        else {result+=MORSE_TABLE[moorse[i]]}
    }
    return result;
}

module.exports = {
    decode
}