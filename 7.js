/*Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.*/
function abbrevName(name){
    let abbrev = name.split(" ");
    return (abbrev[0][0] + "." + abbrev[1][0]).toUpperCase();
  }