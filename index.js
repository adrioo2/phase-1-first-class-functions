function receivesAFunction (spy) {
    spy ()
}
function returnsANamedFunction (){
    return function newFunction(){}
}
function returnsAnAnonymousFunction (){
    return function () {}
}