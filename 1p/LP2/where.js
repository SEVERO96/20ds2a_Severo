let anArray = [ 2, 3, 4, 5, 6, 2, 2, 2, 2]
let busqueda = 2;
let c = 0
for (let x of anArray) {
    
    if (x === busqueda){
        console.log('encontrado en la posicion '+ c)
       
    }
    c++
}
