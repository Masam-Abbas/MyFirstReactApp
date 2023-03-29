import React from 'react'

function add(a,b){
    let add = a+b;
    return add
}
function sub(a,b){
    let sub = a-b;
    return sub
}
function divi(a,b){
    let div = a/b;
    div=div.toFixed(2);
    return div
}
function mult(a,b){
    let mult = a*b;
    return mult
}

export {add, sub, divi, mult}