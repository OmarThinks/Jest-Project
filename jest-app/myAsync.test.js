const myAsyncFunction = require('./myAsync');

test('successful async 1', async () => {
    const data = await myAsyncFunction(1);
    expect(data).toBe(1);
});



test('successful async 2', async () => {
    expect(myAsyncFunction(1)).resolves.toBe(1);
});


test('failure async 1', async () => {
    expect(myAsyncFunction(-1)).rejects.toMatch("MyError");
});


test('failure async 2', async () => {
    expect.assertions(1);

    myAsyncFunction(-1).catch(e => {expect(e).toMatch('MyError')});
});



