// выводит строку в обратном порядке
function reverseString(str) {
    var splitString = str.split(""); 
    // ["h", "e", "l", "l", "o"]
    var reverseArray = splitString.reverse(); 
    // ["o", "l", "l", "e", "h"]
    var joinArray = reverseArray.join(""); 
    // "olleh"
    return joinArray; 
    }

reverseString("hello");