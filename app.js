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


// const calculatemultiply = require("./calculate/multiply")
// calculatemultiply(5,5)

                                //--> USING REQUIRE FOR MULTIPLE FILES 
                                // FOR EXECUTING VAR & FUN FROM ANOTHER FOLDER
// const {calculatesub, calculatemultiply} = require("./calculate/index");   // CALLING BOTH AS WE IMPORTED BOTH IN {INDEX.JS}

// calculatesub(10, 5)
// calculatemultiply(10, 5)

                                //--> USING REQUIRE FOR ACCESSING {JSON} DATA
// const data = require("./data.json")
// console.log(data)