function receivesAFunction(callback){
    return callback()
}

function returnsANamedFunction(){
    return function Drew(){}

}
function returnsAnAnonymousFunction(){
    return function(){}
}