
const myAsyncFunction = async (myParam) =>{
    if(myParam>0){return myParam;}
    else{throw("MyError");}
    

}


/*
myAsyncFunction(-1).
    then((output)=>{console.log(output);}).
    catch(()=>{console.log("less than zero");})
;
*/

