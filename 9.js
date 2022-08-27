/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.
*/
var min = function(list){
    minNum = list[0];
  for (i=0; i < list.length; i++) {
    if (list[i] < minNum) {
      minNum = list[i];
    }
  }
    return minNum;
}

var max = function(list){
    maxNum = list[0];
  for (i=0; i < list.length; i++) {
    if (list[i] > maxNum) {
      maxNum = list[i];
    }
  }
    return maxNum;
}