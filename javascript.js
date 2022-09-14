let prime = true
let num = 2;
let count = 0;
let amount = parseInt(prompt("Enter amount of prime number first:"))
let result = '';
let i;
if (amount > 0) {
    while (count <= amount) {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime === true) {
            count++
            if (count <= amount) {
                result = result + " " + num
            }
        }
        prime = true;
        num++
    }
    document.getElementById('result').innerHTML = result
}


