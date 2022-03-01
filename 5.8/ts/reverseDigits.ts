function enforceInteger(n: number):number {
	return n - (n % 1)
}

function reverseIntegerDigits(n:number):number{
	n = enforceInteger(n)
	var reversed = n % 10 
	n = (n - reversed) / 10
	while (n != 0) {
		let digit = n % 10 
		n = (n - digit) / 10 
		reversed = (reversed * 10) + digit 
	}
	return reversed
}

console.log(
	reverseIntegerDigits(1234),
	reverseIntegerDigits(-1234),
	reverseIntegerDigits(123.4),
	reverseIntegerDigits(-123.4)
)

