console.log("Hi this is First edit  js code by Anil");

const alphamap ={

age:20,
name:"manikandhan",
sex:"male",
salary:"25k Dhirams"

}


console.log(alphamap.age)
console.log(alphamap.name,alphamap.salary,alphamap.sex)
alert("show mw the pop up");
let name = prompt("Hey hi");
console.log(name);
let cat=20;

if(cat/5==0){
    console.log("Hey this cat is multiple of 5 ")
}
else {
    console.log("Hey this cat is not  multiple of 5 ")

}
let i=0;

for (let count = 0; count <10; count++) {

    console.log("count is 10");
}

let sigma =10

while (sigma<25) {
    sigma=sigma+1;
    console.log ("console is printing Sigma ",sigma);
}
let delta=20
do {
    console.log("hello printing once value of delta from do loop ")
} while (delta>90){

    console.log("Hi print delta in while loop ")
}
 name = "university"
for (let i of name) {
    console.log("i","===",i)
    
}

let student =
{

"name":"Anil",
"age":36,
"gender":"male"

}

for (let val in student)
{
console.log("val value is ",val)
}

for(let key in student){

    console.log("key in student     :",key)
}

/*for(let number = 0 ;number <= 100 ;i++)

{
if(number %2 ==0)
{
console.log("print the even number",number)
}

}*/

let marks =[10,20,30,90];
let element;
for (let index = 0; index < marks.length; index++) {
    element = marks[index];
    console.log(element)
}
for (const element of marks) {

    console.log(element)
    
}
let myarray =[10,20,30,40];
let sum =0;
for (const element of myarray) {

    sum=sum+element;
    
}
console.log("avg is",sum/myarray.length);

console.log(`avg marks = ${sum/myarray.length}`);


let beta ="skbm";
console.log(beta)

beta =30;
console.log(beta)

function my_func()
{

    console.log("hey hi hello");
    console.log("make in india.");
}
my_func();

function my_func_1(messg){
    console.log(`hey hi this is message of ${messg}`)
}

my_func_1("make in UAE");

function mysum(a,b){
    console.log(`print a +b =${a+b}`)
}
mysum(9,3)


function my_sum_returnig(a,b){

value_a =a+b;
return value_a


}

let valve= my_sum_returnig(80,80);

console.log(valve);

/*


function mul(a,b){
    return a*b;
}

*/

const hepta = (a,b)=>{
    //console.log(a*b);
    return a*b;
}
let values_2 =hepta(14,5);
console.log(values_2)


const printhello = () =>  {
    console.log("jheloo world")
};

let arr = [2,3,4,5,6,7,8,9,10]
 let myarr= arr.filter((val)=>{
   return val%2==0;
  }
);
console.log(myarr)

let arr_3= [2,3,44,100,6,77,999,7,4]

const altrum=arr_3.reduce((i1,i2)=>{

    return i1>i2?i2:i1
}
)
console.log(altrum)









