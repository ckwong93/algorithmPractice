// tech screen from UpLift - convert clojurescript function into javascript. function searches throw nested object to see if query exists

// Documentation 
// user=> (def m {:username "sally"
//               :profile {:name "Sally Clojurian"
//                         :address {:city "Austin" :state "TX"}}})
// #'user/m

// user=> (get-in m [:profile :name])
// "Sally Clojurian"
// user=> (get-in m [:profile :address :city])
// "Austin"
// user=> (get-in m [:profile :address :zip-code])
// nil
// user=> (get-in m [:profile :address :zip-code] "no zip code!")
// "no zip code!"

m = {
    username: "sally",
    profile: {
        name: "Sally Clojurian",
        address: {
            city: "Austin",
            state: "TX"
        }
    }
}

// Iterative Solution
function getIn(obj, kS, notFound = null) {
    for (var i = 0; i < kS.length; i++) {
        let currentKey = kS[i];
        let currentValue = obj[currentKey];
        obj = currentValue;
    }

    if (obj === undefined && !notFound) {
        return null
    } else if (obj === undefined && notFound) {
        return notFound
    } else {
        return obj
    }
}

// Recursive Solution
function getInRecursively(obj, kS, notFound = null) {
    let index = 0;
    let queryResult;

    // recursive helper function
    function traverse(miniObj, index) {
        if (index >= kS.length || miniObj === undefined) {
            // returns when base case is met OR query does not exist within nested object
            queryResult = miniObj;
            return;
        }
        let currentKey = kS[index];
        let currentValue = miniObj[currentKey];
        // sets nested Object = currentValue so we can continue with the search
        miniObj = currentValue;
        traverse(miniObj, index + 1);
    }

    traverse(obj, 0);

    // error handling based on parameters
    if (queryResult === undefined && !notFound) {
        return null
    } else if (queryResult === undefined && notFound) {
        return notFound
    } else {
        return queryResult
    }
}




// TEST CASES:


console.log(getInRecursively(m, ['profile', 'name']))
// returns "Sally Clojurian"
console.log(getInRecursively(m, ['profile', 'address', 'city']))
// returns "Austin"
console.log(getInRecursively(m, ['profile', 'address', 'zip-code']))
// returns null
console.log(getInRecursively(m, ['profile', 'address', 'zip-code'], "no zip code"))
// returns 'no zip code!'

console.log(getIn(m, ['profile', 'name']))
// returns "Sally Clojurian"
console.log(getIn(m, ['profile', 'address', 'city']))
// returns "Austin"
console.log(getIn(m, ['profile', 'address', 'zip-code']))
// returns null
console.log(getIn(m, ['profile', 'address', 'zip-code'], "no zip code"))
// returns 'no zip code!'