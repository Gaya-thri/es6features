var num = [1, 2, 3, 4, 5];

// for each and string Interpolation
num.forEach((element,index)=>{
    console.log("`${element}` with index is `${index}`");
})
//rest parameter
var add = sum((...nums,)=>{
     console.log(nums)
})
sum(1, 2, 3, 4, 5);

//spread operator
var add1 = sum1((x, y, z)=>{
   console.log(x+y+z);
})

add1(...num);

//property shorthand

var x=0,y=0;
var obj = {x:x, y:y};
console.log(obj);