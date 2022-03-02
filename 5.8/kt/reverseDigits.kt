/*Kotlin gives us a name shaddow compiler warning because
we reassign the n value to itself. In this instance this is
an acceptable choice, thus supressing this warning */
@Suppress("NAME_SHADOWING") 
fun reverseDigits(n: Int): Int {
	var digit = n % 10
	var n = (n - digit) / 10
	var reversed = digit
	while (n != 0) {
		digit = n % 10
		n = n/ 10
		reversed = (reversed * 10) + digit
	}
	return reversed
}

fun main() {
	println(reverseDigits(1234))
	println(reverseDigits(-1234))
}
