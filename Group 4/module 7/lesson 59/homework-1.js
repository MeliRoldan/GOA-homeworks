//codewars

var replaceDots = function(str) {
  let splitArr = str.split('.').join('-');
  return splitArr.slice(0, -1);
}

console.log(replaceDots("Have.a.nice.day."))