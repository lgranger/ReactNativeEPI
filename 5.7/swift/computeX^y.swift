import Foundation 

func raiseToPower(x: Double, y: Int) {
    /* swift does  not have a pow method for any Int types, 
    so converting the Int to Double is necessary to use the 
    Foundation pow function. This is only accurate for Ints 
    less than (2^53)-1. The alternative would be to write
    a custom power function that uses exponentiation by squaring.
    For purposes of this exercise I am satisfied with converting
    the Int to Double and using the Foundation pow method*/
    let z = Double(y)
    print(pow(x,z))
}

//base test
raiseToPower(x: 3.0, y: 3) //27
// test first can be fractional float
raiseToPower(x: 3.1, y: 3) // 29.791000000000004
