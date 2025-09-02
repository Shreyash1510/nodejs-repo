// console.log(global);         //window object for codeeditor only not for browser
// console.log(window);
// console.log(this);
// console.log(globalThis);      //window object for all(codeeditor + browser)

                                //--> REQUIRE (Execute content of another file [EXCEPT {VARIABLES} & {FUNCTIONS}])
// require("./web.js")       //one module/file into another          



                                //--> REQUIRE with EXPORTS (Execute content of another file [INCLUDING {VARIABLES} & {FUNCTIONS}])
// require("./sum.js")       //ReferenceError: calculatesum is not defined (variable & fn not run as they are protected by default)

// const calculatesum = require("./sum.js")
// calculatesum(2,3)       

                        // Other way by ES modules
// import { calculatesum} from "./sum.js";
// calculatesum(2,3)       




                                //--> USING REQUIRE FOR MULTIPLE FILES 
                                // FOR EXECUTING VAR & FUN FROM ANOTHER FOLDER
// const {calculatesub, calculatemultiply} = require("./calculate/index");   // CALLING BOTH AS WE IMPORTED BOTH IN {INDEX.JS}

// calculatesub(10, 5)
// calculatemultiply(10, 5)




                                //--> USING REQUIRE FOR MULTIPLE FUNCTION OF SAME FILE 

// const {combined_add} = require("./calculate/multiple_functions")
// combined_add(100,10)

// const {combined_multiply} = require("./calculate/multiple_functions")
// combined_multiply(100,10)

                                // Other simple and easy way to call both at once
const {combined_add , combined_multiply} = require("./calculate/multiple_functions")
combined_add(100,10)
combined_multiply(100,10)

                                // [for calculate > multiple_function.js > exports.combined_add & exports.combined_multiply]
// const math_add= require("./calculate/multiple_functions")
// math_add.combined_add(10,100)

// const math_multiple = require("./calculate/multiple_functions")
// math_multiple.combined_multiply(10,100)




                                //--> USING REQUIRE FOR ACCESSING {JSON} DATA
// const data = require("./data.json")
// console.log(data)