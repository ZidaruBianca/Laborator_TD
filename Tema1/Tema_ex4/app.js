// const number = prompt("Number of terms: ");
// var n = parseInt(number.valueOf());
// getFibonacci(number);

document.getElementById("n").addEventListener("input", inputFib);

function inputFib(){
   var inputFibo = parseInt(document.getElementById("n").value);
   console.log(inputFibo)
    console.log(getFibonacci(inputFibo));
}

function getFibonacci(n){
    if(typeof n == "undefined" || n < 1 || n > 10 || typeof n == "boolean" || typeof n == "string")
        return "not allowed";
    console.log(n);
    
        var fib = new Array();
        for(var i = 0; i < n; i++) {
            if( i == 1)
                fib[i] = 1;
            else if( i == 0)
                fib[i] = 1;
            else 
                fib[i] = 0;
                for(var j = 1; j < i; j++)
                fib[i] = fib[j] + fib[j-1];
        }
        return fib;

    
}