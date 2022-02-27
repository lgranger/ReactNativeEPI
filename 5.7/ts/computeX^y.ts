/* The question requirements are to use a float and an integer. Typescrpt/Javascript
has only Number, which is a float. This function allows raiseToPower to ensure that
the second parameter has no decimal places, and is therefore effecitvly an integer*/
function integer(n: number):number {
    return Number(n.toString().split(".")[0]);
}

function raiseToPower(x: number, y: number) {
    let m = (Math.pow(x, integer(y)));
    console.log(m);
}

//base test
raiseToPower(3.0, 3); //27
// test first can be fractional float
raiseToPower(3.1, 3.1); //29.791000000000004
// test second passed in as float will calcuate as if second is int
raiseToPower(3.0, 3.1); //27
 