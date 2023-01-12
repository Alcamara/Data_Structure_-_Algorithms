const bubbleSort = require('./bubbleSort');
const numArr = [34,-55, 2, 10,0,13, -2];

test("Array should print [-55,-2,0,2,10,13,34]",()=>{
    expect(bubbleSort(numArr)).toStrictEqual([-55,-2,0,2,10,13,34]);
})