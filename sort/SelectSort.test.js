const selectSort = require('./SelectSort');
const numArr = [34,-55, 2, 10,0,13, -2];

test("selectSort function should print [-55,-2,0,2,10,13,34]",()=>{
    expect(selectSort(numArr)).toStrictEqual([-55,-2,0,2,10,13,34])
})