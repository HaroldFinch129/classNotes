function perfect(number) {
    var toplam = 0;
    for (var i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            toplam += i;
        }
    }

    if (toplam === number && toplam !== 0) {
        console.log("It's a perfect number.");
    } else {
        console.log("It's not a perfect number.");
    }
}
let num = parseFloat(prompt("Please enter a number"));

perfect(num);