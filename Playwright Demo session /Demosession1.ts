console.log("hello world")

var a = "First Text"
let b= 10
const c = true

var a= "Second Text" //"Var" datatype can be redeclared 
b= 20 // "let" datatype can be reassigned 
//example let b = 20 can be redeclared 
// const variable type is constant it can not be changed cannot be redeclared and not reassigned
//c= false

console.log(a+b)
console.log(b)
console.log(c)

a= "ABC"


let arr=["Banana", "Rasberry", "Oranges",`${c}`, 100]   //`${variable}` is an dynamic variable we can enter any datatype variable here
console.log(arr)
console.log(arr.sort()) // sort's an array

console.log("********")
for(let i=0;i<4;i++){
    console.log(arr[i])
}

console.log("******** while loop")
let v=4
while(v){
    v--;
    console.log(arr[v]);
}
