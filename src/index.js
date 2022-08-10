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
    // write your solution here// преобразуем эту строку в массив по 10 чисел
    const numberArr = expr.match(/.{10}/g);
    console.log("numberArr", numberArr);
    // из каждой десятки получаем точки и тире
    const symbols = numberArr.map((number10) => {
        // звездочки значат пробел по условию
        if (number10 === "**********") { return ' ' }
    
    
        const symbol = number10.match(/.{2}/g).map(n => {
            // делим по два символа и определяем точка или тире
            console.log("n", n);
            if (n === "10") { return "." }
            if (n === "11") { return "-" }
            return ""
        }).join("");
        // смотрим что получилось
        console.log("symbol", symbol);
        return symbol
    }
    )

    console.log("symbols", symbols);
    // на выходе массив из точек и тире преобразуем в буквы и обЪединяем обратно в строку
    return symbols.map((symbol) => {
        // пропускаем пробелы
        if (symbol === " ") { return " " }
 
        return MORSE_TABLE[symbol]
    }
    )
    .join("")
// Log to console
console.log("RESULT", decode("00011011110000111111**********0000111111"))
}

module.exports = {
    decode
    
}