'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
  
function countVowel(str){

    let count =0;
    for (const c of str){
        if(c == "a"|| c=="i"|| c=="u"|| c=="e"|| c=="o"){
            count++;
        }
    }
    return count;
}

test(countVowel("hello"), 2);
test(countVowel("WaffleCollege"), 5);