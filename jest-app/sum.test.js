const sum = require('./sum');

test("sum 1+2 is three", ()=>{
    expect(sum(1,2)).toBe(3);
});
