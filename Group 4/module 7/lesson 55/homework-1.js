// დაალაგეთ სახელები ანბანის მიხედვით

let myArr = ["d", "e", "f", "g", "a", "b", "c", "p", "q", "r", "s", "z"]
let abcArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
  "u", "v", "w", "x", "y", "z"]
let newMyArr = []

for(let i=0; i < abcArr.length; i++) {
    for(let char of myArr)
        if(char[0] === abcArr[i]){
            newMyArr.push(char);
        }
}
console.log(newMyArr);