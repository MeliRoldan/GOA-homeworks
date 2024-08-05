// function highest(a, b, c) {
//     let exp1 = a + b //3
//     let exp2 = b + c //5
//     let exp3 = a + c //4

//     let arr = [exp1, exp2, exp3] //3,5,4

//     let high = arr[0] //3

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > high) {
//             high = arr[i]
//         }
//     }

//     return high

// }

// console.log(highest(1,2,3))

// function strCount(str, letter){

//     let count = 0 
    
//     for (let i = 0; i < str.length; i ++) {
//       if (str[i] == letter) {
//         count++
//       }
//     }
    
//     return count
// }

// console.log(strCount("melimeliee", "e"))

// function broken(x){
//     console.log("srting is:", x)

//     let arr = ""
    
//     for (let i = 0; i < x.length; i++) {
//         console.log("i = ", x[i])
//       if (x[i] == "1") {
//         arr = arr + "0";
//         console.log("array is: ", arr)
//       } else {
//         arr = arr + "1";
//         console.log("array is: ", arr)
//       }
//     }
    
//     return arr
// }

// console.log(broken("100010"))

// function openOrSenior(data){
//     result = []
    
//     for (let i = 0; i < data.length; i++) {
//       if (data[i][0] >= 55 && data[i][1] > 7) {
//         result.push("Senior")
//       } else {
//         result.push("Open")
//       }
//     }
    
//     return result;
// }

// openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])

// function conjugate(verb){

//   const suffixes = {
//     'ar': ['o', 'as', 'a', 'amos', 'áis', 'an'],
//     'er': ['o', 'es', 'e', 'emos', 'éis', 'en'],
//     'ir': ['o', 'es', 'e', 'imos', 'ís', 'en']
//   };

//   let inf_verb
//   let verb_suffix 

//   if (verb.endsWith('ar')) {
//     verb_suffix  = 'ar';
//     inf_verb = verb.slice(0, -2);
//   } else if (verb.endsWith('er')) {
//     verb_suffix  = 'er';
//     inf_verb = verb.slice(0, -2);
//   } else if (verb.endsWith('ir')) {
//     verb_suffix = 'ir';
//     inf_verb  = verb.slice(0, -2);
//   } else {
//     return "Invalid verb"
//   }

//   let endings = suffixes[verb_suffix]

//   let inf_verb_arr = []

//   for (let i = 0; i < endings.length; i++) {
//     inf_verb_arr.push(inf_verb + endings[i])
//   }

//   return {
//     [verb]: inf_verb_arr
//   }
  
// }

// console.log(conjugate("vivir"))

// function solution(str){

//   let arr = Array.from(str);

//   let charArr = []

//   for (let i = 0; i < arr.length; i += 2) {
//     let set = arr.slice(i, i + 2).join('')
//     if (set.length < 2) {
//       set += "_"
//       charArr.push(set)
//     } else {
//       charArr.push(set)
//     }
//   }

//   return charArr
// }

// console.log(solution("Melin"))

function highAndLow(numbers){
  let numArr = numbers.split(' ');

  numArr = numArr.map(Number);

  let maxNum = Math.max(...numArr);
  let minNum = Math.min(...numArr);

  return `${maxNum}  ${minNum}`
}

console.log(highAndLow("1 2 3 4 -1"))
