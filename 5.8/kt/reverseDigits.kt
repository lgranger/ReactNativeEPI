@Suppress("NAME_SHADOWING") 
fun reverseDigits(n: Int): Int {
	var digit = n % 10
	var n = (n - digit) / 10
	var reversed = digit
	while (n != 0) {
		digit = n % 10
		n = (n - digit) / 10
		reversed = (reversed * 10) + digit
	}
	return reversed
}

fun main() {
	println(reverseDigits(1234))
	println(reverseDigits(-1234))
}
