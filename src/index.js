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
   let arr = expr.match(/(.){10}/g);
    let result = '';
    for(let i = 0; i < arr.length; i++){        
        if(arr[i].includes('**********')){
            result += ' ';
            continue;
        }       
       
        let cut = arr[i].match(/[^0]\d+/g);
        let cutShare = cut[0].match(/\d{2}/g);
        let correct = '';
        for(let item of cutShare){
            if(item == '10'){
                correct += '.';
            } 
            if(item == '11'){ 
                correct += '-';
            }        
        };
        correct = MORSE_TABLE[correct];
        result += correct;
    }
    return (result)   
}

module.exports = {
    decode
}
