
async function myAsyncFunction(myParam){
    if(myParam>0){return myParam;}
    else{throw("MyError");}
}

module.exports = myAsyncFunction;
