function factorial(n){
    f=1
    for (i=1 ; i <= n; i++) {
        f=f*i
    }
    return f
}
function permutacion(n,r){
   let p=(factorial(n))/(factorial(n-r))
    return p
}
console.log(permutacion (8,5));