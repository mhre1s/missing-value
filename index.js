function test(x) {
  let subArr = [];
  for (let i = 0; i < x.length - 1; i++) {
    let subtracts = x[i] - x[i + 1];
    subArr.push(subtracts);
  }
  let posElements = subArr.map((element) => {
    return Math.abs(element);
  });
  console.log(subArr, posElements);
  for (let y = 0; y < posElements.length - 1; y++) {
    if (posElements[y] !== posElements[y + 1]) {
        if(posElements[y] > posElements[y + 1]){
            if(x[y] > x[y+1]){
                let highSub = posElements[y]
                let lessSub = posElements[y + 1]
                let missingValue = x[y + 1] + lessSub
                return missingValue
            }
            else{
                let highSub = posElements[y];
                let lessSub = posElements[y + 1];
                let missingValue = x[y + 1] - lessSub;
                return missingValue;
            }    
        }
        else{
            if(x[y] > x[y + 1]){
                let lessSub = posElements[y];
                let highSub = posElements[y + 1];
                let missingValue = x[y + 1] - lessSub;
                return missingValue
            }
            else{
                let lessSub = posElements[y];
                let highSub = posElements[y + 1];
                let missingValue = x[y + 1] + lessSub;
                return missingValue;
            }  
        }
    }
  }
}
console.log(test([15,5,0,-5]));
