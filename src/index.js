module.exports = function toReadable (number) {

    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (number === 0) {
        return ones[0];
    }

    let result = '';

    if (Math.floor(number / 100) > 0) {  //Обработка сотен
        result += ones[Math.floor(number / 100)] + ' hundred ';
    };

    const remainder = number % 100; //Остаток от деления на 100 (десятки и единицы)

    if (remainder >= 11 && remainder <= 19) { //Числа от 11 до 19
        result += teens[remainder - 11];
    } else {

    if (Math.floor(remainder / 10) > 0) {
        result += tens[Math.floor(remainder / 10) - 1] + ' ';
    }

    if (Math.floor(remainder % 10) > 0) {
        result += ones[remainder % 10];
    }
}
return result.trim();
  
}
