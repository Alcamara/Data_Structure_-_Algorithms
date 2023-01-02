const binarySearch = require('./binarySearch');


test("Should return true",()=>{
    expect(binarySearch(0,100,50)).toBe(true);
})

test("Should return true",()=>{
    expect(binarySearch(0,100,20)).toBe(true);
})

test("Should return true",()=>{
    expect(binarySearch(0,100,88)).toBe(true);
})

test("Should return false",()=>{
    expect(binarySearch(0,100,101)).toBe("number not found");
})