function combined_add(x, y) {
    const sum = x + y;
    console.log("sum "+sum);
}

function combined_multiply(x, y) {
    const mul = x * y;
    console.log("miltiply "+mul);
}

                            //If many functions in same file → use {onefunction, twofunction, ......etc}

module.exports = {combined_add, combined_multiply};                          


                            // If export single single fnction the cause below problem
// module.exports = combined_add;
// module.exports = combined_multiply;    //WILL CAUSEW BELOW PROBLEM

// The second line overwrites the first one.
// So only multiply will be exported — add is lost.  [ALSO WE WILL GET DUPLICATE OUTPUT OF combined_multiply]


                            // If still wants to exports only one by one function then syntax will be
// exports.combined_add = combined_add;                            //while calling this we have to destructure function first
// exports.combined_multiply = combined_multiply;                  //while calling this we have to destructure function first

