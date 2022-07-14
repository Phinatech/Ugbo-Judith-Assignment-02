// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================

function sumOfNumbers(arrayOfNumbers) {
    let addNumbers = 0;
    for (let j = 0; j < arrayOfNumbers.length; j++){
      addNumbers += arrayOfNumbers[j];
    }
    return addNumbers;
}
assignment.sumOfNumbers = sumOfNumbers;


function countEvenNumbers(arrayOfNumbers) {
    let even_numbers = 0;
  for(i=0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] % 2 == 0){
      even_numbers++;
    }
  }
  return even_numbers;
}
assignment.countEvenNumbers = countEvenNumbers;


function celsiusToFahrenheit(arrayOfNumbers) {
    const unit_conversion = [];
  arrayOfNumbers.forEach(item =>         
 unit_conversion.push(Math.trunc((item * 9/5)+32)));
  
  return unit_conversion;
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

