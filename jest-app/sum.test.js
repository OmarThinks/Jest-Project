const sum = require('./sum');

test("sum 1+2 toBe three", ()=>{
    expect(sum(1,2)).toBe(3);
});

test("sum 1+2 toEqual three", ()=>{
    expect(sum(1,2)).toEqual(3);
});



test("Object toBe same", ()=>{
    expect({"hi":1}).toEqual({"hi":1});
});


test("Object toEqual same", ()=>{
    expect({"hi":1}).not.toBe({"hi":1});
});




test("Object toEqual same object", ()=>{
    let mydata = {"hi":1};
    expect(mydata).toBe(mydata);
});







