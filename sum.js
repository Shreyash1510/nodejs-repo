function calculatesum(a,b) {
    const sum = a+b;
    console.log("The sum is: "+ sum);
    
}

module.exports = calculatesum;

                        // For ES module method of exporting function & variable
// export function calculatesum(a,b) {
//     const sum = a+b;
//     console.log("The sum is: "+ sum);
// }



var x = 10
var y = 20
                      // OUTPUT BY RETURN
function tempsum(m,n) {
    const answ = m+n
    return answ
}

var fans = tempsum(x,y)
console.log(fans)

// // console.log(tempsum(x,y))
var fans2 = tempsum(20,30)
console.log(fans2)

                      // OUTPUT BY CONSOLE.LOG


// function tempsum(m,n) {
//     const answ = m+n
//     console.log(answ) 
// }

// tempsum(x,y)