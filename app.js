// Basic Algorithm Scripting 

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



function titleCase(str) {
    const data = str.split(" ")
    let arr = []
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i]) {
                arr.push(`${data[i][0].toUpperCase()}${data[i].substr(1, data[i].length).toLowerCase()}`)
                break
            }
        }
    }
    console.log(arr.join(" "))
}

// titleCase("I'm a little tea pot");
// titleCase("I'm a little tea pot") //I'm A Little Tea Pot




function frankenSplice(arr1, arr2, n) {
    const data = [...arr2]
    data.splice(n, 0, ...arr1)
    // console.log(data, arr2)
}

// frankenSplice([1, 2, 3], [4, 5, 6], 1);






function bouncer(arr) {
    let val = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {

            val.push(arr[i])
        }
    }
    console.log(val)
}

// bouncer([7, "ate", "", false, 9]);
// bouncer(["a", "b", "c"])
// bouncer([false, null, 0, NaN, undefined, ""])



function getIndexToIns(arr, num) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            count++
        }
    }
    console.log(count);
}

// getIndexToIns([40, 60], 50);
// getIndexToIns([10, 20, 30, 40, 50], 35)
// getIndexToIns([10, 20, 30, 40, 50], 30)



function mutation(arr) {
    let count = 0
    let array = []
    for (let i = 0; i < arr[1].split("").length; i++) {
        for (let j = 0; j < arr[0].split("").length; j++) {
            if (arr[1].toLowerCase()[i] == arr[0].toLowerCase()[j]) {
                let remove = arr[0].split("").splice(j, 1)
                array.push(remove)
            }
        }
    }
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().includes(arr[1].toLowerCase()[i]))
            count += 1
    }
    console.log(count === arr[1].length)
}

// mutation(["hello", "hey"])//false
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])//true
// mutation(["Mary", "Aarmy"])//true
// mutation(["floor", "for"])//true
// mutation(["hello", "Hello"])//true


// unsolved
function chunkArrayInGroups(arr, size) {
    let array = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let val = arr.splice(0, size)
            array.push(val)
        }
    }
    if (arr.length > 0) {
        console.log([...array, arr]);
    } else {
        console.log([...array]);
    }
}

// chunkArrayInGroups(["a", "b", "c", "d"], 2);//[["a", "b"], ["c", "d"]]
// chunkArrayInGroups([0, 1, 2, 5, 3, 4], 3)//[[0, 1, 2], [3, 4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)//[[0, 1, 2, 3], [4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)//[[0, 1] [ 2, 3], [4, 5]]
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)




// // Intermediate Algorithm Scripting
function sumAll(arr) {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    let count = 0
    for (let i = min; i < max + 1; i++) {
        count += i
    }
    console.log(count)
}

// sumAll([1, 4]);
// sumAll([5, 10]);


function diffArray(arr1, arr2) {
    let val = arr1.filter((val) => !arr2.includes(val))
    let val1 = arr2.filter((val) => !arr1.includes(val))
    console.log([val1, val].flat());
}

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])
// diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])
// diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])


function destroyer(arr) {
    let array = []
    for (let i = 1; i < arguments.length; i++) {
        array.push(arguments[i])
    }
    let filterData = arguments[0].filter((val) => !array.includes(val))
    console.log(filterData);
}

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);//[1, 1]
// destroyer([2, 3, 2, 3], 2, 3)//[]
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)//[1, 5, 1]
// destroyer([3, 5, 1, 2, 2], 2, 3, 5)//[1]


function whatIsInAName(collection, source) {
    let keyVal = Object.keys(source)
    let filterData = collection.filter((item) => keyVal.every(key => item[key] === source[key]))
    console.log(filterData);
}
// whatIsInAName([{ first: "Romeo", last: "Montague" },
// { first: "Mercutio", last: null },
// { first: "Tybalt", last: "Capulet" }],
//     { last: "Capulet" }) // [{ first: "Tybalt", last: "Capulet" }].
// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })//[{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })//[{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]




function spinalCase(str) {
    const val = str.split(/[-_" "]/).join('-').split("")
    let array = []
    for (let i = 1; i < val.length; i++) {
        const hasUpperCase = /[A-Z]/.test(val[i]);
        if (hasUpperCase) {
            val.splice(i, 1, "-" + val[i].toLowerCase())
        }
    }
    for (let i = 0; i < val.join("").split("-").length; i++) {
        if (val.join("").split("-")[i]) {
            array.push(val.join("").split("-")[i].toLowerCase())
        }
    }
    console.log(array.join("-"));
}

// spinalCase('This Is Spinal Tap');///this-is-spinal-tap
// spinalCase("thisIsSpinalTap")//this-is-spinal-tap
// spinalCase("The_Andy_Griffith_Show")//the-andy-griffith-show
// spinalCase("Teletubbies say Eh-oh")//teletubbies-say-eh-oh

function translatePigLatin(str) {
    let vowel = ['a', 'e', 'i', 'o', 'u']
    let vowel1st = ''
    let filter = vowel.filter((item) => str[0] == item)
    if (filter.length > 0) {
        vowel1st += str + 'way'
    }
    let array = []
    for (let i = 0; i < str.split("").length; i++) {
        for (let j = 0; j < vowel.length; j++) {
            if (vowel[j] == str[i]) {
                array.push(str[i])
            }
        }
    }
    let indeOfVal = str.split("").indexOf(array[0])
    return str.substr(0, indeOfVal).length > 0 ? `${str.substr(indeOfVal, str.length)}${str.substr(0, indeOfVal)}ay` : array.length == 0 ? str + "ay" : vowel1st
}

// translatePigLatin("consonant");
// translatePigLatin("paragraphs");
// translatePigLatin("california")//aliforniacay
// translatePigLatin("rhythm")//rhythmay
// translatePigLatin("schwartz")//artzschway
// translatePigLatin("glove")//overglay
// translatePigLatin("eight")//eightway
// translatePigLatin("algorithm")//algorithmway



function myReplace(str, before, after) {
    let data = str.split(" ")
    let hasUpperCase = /[A-Z]/.test(before[0])
    for (let i = 0; i < data.length; i++) {
        if (data[i] == before) {
            data.splice(i, 1, hasUpperCase ? `${after[0].toUpperCase()}${after.substr(1, after.length)}` : after.toLowerCase())
        }
    }
    console.log(data.join(' '));
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
// myReplace("I think we should look up there", "up", "Down")



function pairElement(str) {
    let newArr = [];

    let dnaPairs = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }
    for (let item in str) {
        let temp = []
        temp.push(str[item], dnaPairs[str[item]])
        newArr.push(temp)
    }
    console.log(newArr);

}

// pairElement("GCG");//[["G", "C"], ["C","G"], ["G", "C"]]
// pairElement("ATCGA")//[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
// pairElement("CTCTA")//[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]








function fearNotLetter(str) {
    let alpha = str.split("")
    let allApha = ['a', 'b', 'c', "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let valOne = allApha.indexOf(alpha.slice(0, 1)[0])
    let valTwo = allApha.indexOf(alpha.slice(-1)[0])

    let filter = allApha.splice(valOne, valTwo + 1).filter((item, i) => item !== alpha[i])
    console.log(filter[0]);
}

// fearNotLetter("abce");//d
// fearNotLetter("abcdefghjklmno")//i


function uniteUnique(...arr) {
    let removeDup = [...new Set(arr.flat())];
    console.log(removeDup);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);//[1, 3, 2, 5, 4]
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])
uniteUnique([1, 2, 3], [5, 2, 1])//[1, 2, 3, 5]
