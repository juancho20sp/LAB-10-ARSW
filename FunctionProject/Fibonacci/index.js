// var bigInt = require("big-integer");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let nth = req.body.nth
    // let nth_1 = bigInt.one;
    // let nth_2 = bigInt.zero;
    // let answer = bigInt.zero;



    
    // if (nth < 0)
    //     throw 'must be greater than 0'
    // else if (nth === 0)
    //     answer = nth_2
    // else if (nth === 1)
    //     answer = nth_1
    // else {
    //     for (var i = 0; i < nth - 1; i++) {
    //         answer = nth_2.add(nth_1)
    //         nth_2 = nth_1
    //         nth_1 = answer
    //     }
    // }


    const callFib = dynamicFibonacci(); 
    answer = callFib(nth); 


    function dynamicFibonacci() {
        let cache = {};
        
        return function fib(n) {
            // check if already calculated for n
            if (n in cache) {
                return cache[n];
            } else if (n < 2) { // base case
                return n;
            } else {
                // store result in cache
                cache[n] = BigInt(fib(n - 1)) + BigInt(fib(n - 2));
                return BigInt(cache[n]);
            }
        }
    }

    context.res = {
        body: answer.toString()
    };
}