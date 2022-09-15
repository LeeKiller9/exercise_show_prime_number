let num = 2;
let count = 0;
let amount = parseInt(prompt("Enter amount of prime number first:"))
let result = '';
let i;
if (amount > 0) {
    while (count < amount) {
        let prime = true
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime === true) {
            if (count === amount - 1) {
                result = result + num
            } else {
                result = result + num + " ; "
            }
            count++
        }
        num++
    }
    document.getElementById('result').innerHTML = result
}


