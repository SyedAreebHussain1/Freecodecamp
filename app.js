//ques:  What is oop ?
//ans:  obj oriented programing is a programing style based on class and obj.

// class hello {
//     message() {
//         console.log("Hello world")
//     }
//     sorry() {
//         console.log("sorry world")
//     }
// }

// let a = new hello()
// a.message()
// a.sorry()


// class
// class student {
//     // constructor Method
//     constructor(name, age) {
//         this.studentName = name
//         this.studentAge = age
//         console.log("contructor")
//     }
//     // prototype Method
//     hello() {
//         console.log("Hello " + this.studentName + " Age " + this.studentAge)
//     }
//     // static Method
//     static staticMethod() {
//         console.log("Hello static")
//     }
// }
// // onject
// const a = new student("Areeb", 15)
// const b = new student("Umar", 22)
// a.hello()
// b.hello()
// // static function call karny ka tareka
// student.staticMethod()

function convertCtoF(celsius) {
    return celsius * 9 / 5 + 32;
}
//   convertCtoF(30);


function reverseString(str) {
    let array = str.split('')
    let letter = ""
    for (var i = array.length - 1; i >= 0; i--) {
        letter += array.splice(i, 1, array[i]).join("")

    }
}
// reverseString("hello");//olleh



function factorialize(num) {
    let count = 1
    for (let i = 1; i < num + 1; i++) {
        count *= i
    }
    console.log(count)
}

// factorialize(5);//120
// factorialize(10);//120




function findLongestWordLength(str) {
    let array = str.split(" ")
    let val = array.sort((a, b) => {
        return a.length - b.length
    })
    return val[val.length - 1].length
}

// findLongestWordLength("The quick brown fox jumped over the lazy dog");



function largestOfFour(arr) {
    let maxValue = []
    for (let i = 0; i < arr.length; i++) {
        const max = Math.max(...arr[i])
        maxValue.push(max)
    }

    return maxValue
}
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);//[27, 5, 39, 1001]



function confirmEnding(str, target) {
    const arrayStr = str.split(' ').reverse()[0]
    const arr = []
    for (let i = target.length - 1; i >= 0; i--) {
        arr.push(arrayStr.split('').reverse()[i])
    }
    return arr.join('') === target
}

// confirmEnding("Bastian", "n");
// confirmEnding("He has to give me a new name", "name")
// confirmEnding("Open sesame", "same")///true
// confirmEnding("Open sesame", "sage")//false





function repeatStringNumTimes(str, num) {
    let repeat = ''
    for (let i = 0; i < num; i++) {
        repeat += str
    }
    console.log(repeat)
}

// repeatStringNumTimes("abc", 3);


function truncateString(str, num) {
    // return str.length == num || str.length < num ? str : `${str.substr(0, num)}...`
    let arr = []
    for (let i = 0; i < num; i++) {
        if (str.length == num || str.length < num) {
            return str
        } else {
            arr.push(...str[i])
        }
    }
    return `${arr.join('')}...`
}

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))



function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return arr[i]
        }
    }
}

// findElement([1, 2, 3, 4], num => num % 2 === 0)
// findElement([1, 3, 5, 10, 4, 8, 9, 10], function (num) { return num % 2 === 0; })
// console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; }))




function getTrueToTrueValue(arr) {
    let indexOne = 0
    let indexTwo = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            indexOne += i
            break
        }
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j]) {
            indexTwo += j
            break
        }
    }
    let data = arr.slice(indexOne, indexTwo + 1)
    console.log(data);
}
// getTrueToTrueValue([false, 0, true, false, 0, true, 0, "Areeb", false])


function booWho(bool) {
    return typeof bool === "boolean"
}

// booWho(null);
// booWho(false)
// booWho(true)