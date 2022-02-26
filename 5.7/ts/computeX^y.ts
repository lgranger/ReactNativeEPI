function integer(n: number):number {
    return Number(n.toString().split(".")[0]);
}

function raiseToPower(x: number, y: number) {
    let m = (Math.pow(x, integer(y)));
    console.log(m);
}

raiseToPower(3.0, 3); //27
raiseToPower(3.1, 3.1); //29.791000000000004
raiseToPower(3.0, 3.1); //27