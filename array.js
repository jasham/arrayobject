let tempArr = ["Jasham","Shahzad","Abdullah",'Ninja']


console.log("Here is tempArray",tempArr)

console.log("Calling specific index value tempArr[3] = ", tempArr[3])


for( let i = 0; i < tempArr.length; i++) {
    console.log("-----------------------------------------------")
    console.log("Here is value of i",i)
    console.log("Getting value",i < tempArr.length)
    console.log("Value of arrays tempArr = ",tempArr[i])
    console.log("-----------------------------------------------")
}

console.log("Updating array at index 2")

tempArr[2] = "Kathal"

console.log("Here is array Value",tempArr)

// let pushedval = tempArr.pop()
console.log("Pop value of tempArr",tempArr.pop())
console.log("Pop value of tempArr",tempArr)


console.log("Pushing value",tempArr.push("Ketripal"))
console.log("After Pushing value",tempArr)



console.log("Shift array",tempArr.shift())

console.log("After Shift array",tempArr)

console.log("UnShift array",tempArr.unshift("Honolulu"))

console.log("After UnShift array",tempArr)

console.log("Checking splice",tempArr.splice(2,1))
console.log("After splice",tempArr)


console.log("Inserting at somepoint in array ",tempArr.splice(1,0,"Hello"))
console.log("Inserting at somepoint in array ",tempArr.splice(3,0,"Hello"))

console.log("After adding value",tempArr)

console.log("Is this array or not",Array.isArray("kl"))
console.log("Is this array or not",Array.isArray(tempArr))