import kotlin.math.pow

fun raiseToPower(x: Double, y: Int) {
    println(x.pow(y))
}

fun main() {
    //base test
    raiseToPower(3.0, 3) //27
    // test first can be fractional float
    raiseToPower(3.1, 3) //29.791000000000004
}
