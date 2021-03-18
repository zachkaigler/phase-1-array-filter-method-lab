// Code your solution here
function findMatching (driversArray, name) {
    return driversArray.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function fuzzyMatch(drivers, ab) {
    let fuzzyDriver = drivers.filter(function(driver){
        if (driver.substring(0, 2) === ab )
            return driver
    })
    return fuzzyDriver
}


// function fuzzyMatch (driversArray, providedLetters) {
//     let providedLetterArray = []
  
//     let counter1 = 0
//     while (counter1 < providedLetters.length) {
//       providedLetterArray.push(providedLetters[counter1])
//       console.log(providedLetters[counter1], " pushed into array")
//       console.log(providedLetterArray)
//       counter1 = counter1 + 1
//     }
  
    
//     return driversArray.forEach( function(driver) {
//       let counter2 = 0
//       while (counter2 < driver.length) {
//         if (driver[counter2].toLowerCase === providedLetterArray[counter2].toLowerCase()) {
//           console.log(`Letter ${counter2} matches`)
//           counter2 = counter2 + 1
//         } else {
//           console.log("no match")
//           return "no match"
//         }
//       }
//     })
//     }

function matchName (driversArray, name) {
    return driversArray.filter( function (driver) {
        if (driver.name === name) {
            return driver
        }
    })
}