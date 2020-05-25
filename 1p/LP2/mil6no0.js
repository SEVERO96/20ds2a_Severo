let anarray = []
for (let k= 0;k<1000;k++){
    anarray[k]=Math.ceil(Math.random()*6)
    if (anarray[k]===0)
    console.log(anarray[k])
}
console.log('done...');
