function test(){
    //  var fibonacci = getFibonacci(n);
    //  console.log("VAL", fibonacci)
    console.log(getFibonacci(2)[1] == 1 ? (getFibonacci(2)[0] == 1 ? "Passed" : "Failed") : "Failed");
    // console.log(fibonacci[4] == 5 ? (fibonacci[3] == 3 ? (fibonacci[2] == 2 ? (fibonacci[1] == 1 ? (fibonacci[0] == 1 ? "Passed" : "Failed") : "Failed") : "Failed") : "Failes") : "Failed");
    console.log(getFibonacci(5)[4] == 5 ? (getFibonacci(5)[3] == 3 ? (getFibonacci(5)[2] == 2 ? (getFibonacci(5)[1] == 1 ? (getFibonacci(5)[0] == 1 ? "Passed" : "Failed") : "Failed") : "Failed") : "Failes") : "Failed");
    console.log(getFibonacci() == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(-1) == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(15) == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci(true) == "not allowed" ? "Passed" : "Failed");
    console.log(getFibonacci("b") == "not allowed" ? "Passed" : "Failed");
}

test();