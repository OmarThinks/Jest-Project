const myAsyncFunction = require('./myAsync');
/*
test("myAsyncFunction1 toBe 1", ()=>{
    return myAsyncFunction(1).then((data)=>{
        expect(data).toBe(1);
    })
});
*/

/*
test('the data is peanut butter', () => {
     myAsyncFunction(1).then(data => {
      expect(data).toBe(1);
    });
});
*/


test('the data is peanut butter', async () => {
    const data = await myAsyncFunction(1);
    expect(data).toBe(1);
  });





