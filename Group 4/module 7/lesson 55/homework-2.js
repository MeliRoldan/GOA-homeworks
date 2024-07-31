// დაალეგთ რიცხვები პატარიდან ყველაზე დიდამდე

let numArr = [100, 254, 65, 45, 87, 34, 5, 67, 76]

for(let i=0; i < numArr.length - 1; i++) {
    for(let j = i+1; j < numArr.length; j++)
        if(numArr[i] > numArr[j]) {
            let small = numArr[i];
            numArr[i] = numArr[j];
            numArr[j] = small;
        }
}

console.log(numArr);