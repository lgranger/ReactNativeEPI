import Foundation

func reverseDigits(n: Int) -> Int {
	var digit = n % 10
	var n = (n - digit) / 10
	var reversed = digit
	while n != 0 {
		digit = n % 10
		n = n/10
		reversed = (reversed * 10) + digit
	}
	return reversed
}

print(reverseDigits(n: 1234)) 
print(reverseDigits(n: -1234)) 
