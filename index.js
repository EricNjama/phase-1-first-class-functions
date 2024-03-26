function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
    return function named(){
        console.log ("Whats popping!")
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("haha")
    }
}
