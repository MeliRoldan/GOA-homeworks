const foods = ['გებჟალია', 'ფასანაურული ხინკალი', 'მწვადი', 'ხაჭაპური', 'ფასანაურული ხინკალი'];

let item;

for (let i = 0; i < foods.length; i++) {
    if(foods[i] === 'ფასანაურული ხინკალი') {
        item = `${foods[i]} index is: ${i};`
        break;
    }
}

console.log(item);