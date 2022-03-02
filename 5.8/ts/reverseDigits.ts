/*Javasctipt/Typescript has only number type which is float point.
This question is for integer types only. This fuction returns only 
the Integer portions of any inputted number.*/
function enforceInteger(n: number):number {
	return n - (n % 1)
}

function reverseIntegerDigits(n:number):number{
	n = enforceInteger(n)
	var reversed = n % 10 
	n = (n - reversed) / 10
	while (n != 0) {
		let digit = n % 10
		/* subrtacting the digit before dividing by 10 is required here becuase the
		division would create a float point, and we need to maintain itegers for 
		the math to continue to work correctly*/
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

