console.log("Hi this is First edit  js code by Anil");

const alphamap = {

    age: 20,
    name: "manikandhan",
    sex: "male",
    salary: "25k Dhirams"

}


console.log(alphamap.age)
console.log(alphamap.name, alphamap.salary, alphamap.sex)
alert("show mw the pop up");
let name = prompt("Hey hi");
console.log(name);
let cat = 20;

if (cat / 5 == 0) {
    console.log("Hey this cat is multiple of 5 ")
}
else {
    console.log("Hey this cat is not  multiple of 5 ")

}
let i = 0;

for (let count = 0; count < 10; count++) {

    console.log("count is 10");
}

let sigma = 10

while (sigma < 25) {
    sigma = sigma + 1;
    console.log("console is printing Sigma ", sigma);
}
let delta = 20
do {
    console.log("hello printing once value of delta from do loop ")
} while (delta > 90) {

    console.log("Hi print delta in while loop ")
}
name = "university"
for (let i of name) {
    console.log("i", "===", i)

}

let student =
{

    "name": "Anil",
    "age": 36,
    "gender": "male"

}

for (let val in student) {
    console.log("val value is ", val)
}

for (let key in student) {

    console.log("key in student     :", key)
}

/*for(let number = 0 ;number <= 100 ;i++)

{
if(number %2 ==0)
{
console.log("print the even number",number)
}

}*/

let marks = [10, 20, 30, 90];
let element;
for (let index = 0; index < marks.length; index++) {
    element = marks[index];
    console.log(element)
}
for (const element of marks) {

    console.log(element)

}
let myarray = [10, 20, 30, 40];
let sum = 0;
for (const element of myarray) {

    sum = sum + element;

}
console.log("avg is", sum / myarray.length);

console.log(`avg marks = ${sum / myarray.length}`);


let beta = "skbm";
console.log(beta)

beta = 30;
console.log(beta)

function my_func() {

    console.log("hey hi hello");
    console.log("make in india.");
}
my_func();

function my_func_1(messg) {
    console.log(`hey hi this is message of ${messg}`)
}

my_func_1("make in UAE");

function mysum(a, b) {
    console.log(`print a +b =${a + b}`)
}
mysum(9, 3)


function my_sum_returnig(a, b) {

    value_a = a + b;
    return value_a


}

let valve = my_sum_returnig(80, 80);

console.log(valve);

/*


function mul(a,b){
    return a*b;
}

*/

const hepta = (a, b) => {
    //console.log(a*b);
    return a * b;
}
let values_2 = hepta(14, 5);
console.log(values_2)


const printhello = () => {
    console.log("jheloo world")
};

let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let myarr = arr.filter((val) => {
    return val % 2 == 0;
}
);
console.log(myarr)

let arr_3 = [2, 3, 44, 100, 6, 77, 999, 7, 4]

const altrum = arr_3.reduce((i1, i2) => {

    return i1 > i2 ? i2 : i1
}
)
console.log(altrum)

const tax = {
    calc() {
        console.log("hey tax is 30 percent%")
    }
}

const student_1 = {
    name: "anil"

}
student_1.__proto__ = tax;


const sport_1 = {

    swimming() {


        console.log("hey are you doing swimming")
    }
    ,

    skating() {

        console.log("hey are you performing skating")

    }

};


const student_3 =
{

    name: "aanya"

};


student_3.__proto__ = sport_1

student_3.skating()


class Employee {

    constructor() {

        console.log("hey this is constructor")
    }

    employe_name() {

        console.log("Hey store employee name ")
    }
    employee_dep() {

        console.log("hey store all employee departments name")
    }

    employee_salary(sal) {
        this.sal = sal
        console.log(sal, "this is sal")
    }

}

let bankemployess = new Employee();
bankemployess.employee_salary(300);
bankemployess.employe_name();
let hotelemployess = new Employee();


class college {
    tag = 23;
    constructor(branch, year) {
        this.branch = branch
        this.year = year
    }
    lib() {

        console.log("this is a lib ")
    }

    canteen() {
        console.log(this.branch, this.year, "both are wriiten from child constructor")


    }
}


class university extends college {

    constructor(branch, year) {
        super(branch, year);


    }

    college_city() {

        console.log("which city college is located  ")
        console.log(super.tag, "calling with super keyword")//this super here will not be used to call class level variables in JS 
        console.log(this.tag, "calling with out super keyword")
    }


}

let obj1 = new university("mech", 2021);
obj1.lib();
obj1.canteen();
obj1.college_city();

//===============================================================


setTimeout(() => {
    console.log("hey hello time out")
}, 5000);



//==================================================================


const hello = () => {
    console.log("hey hi hello")
};

setTimeout(hello, 2000);


//=========================call -  back -hell =========================================
function getdata(data, getnextdata) {

    setTimeout(() => {
        console.log("data", data);
        if (getnextdata) {
            getnextdata();
        }
    }, 2000);

}


getdata(300, () => {
    getdata(400, () => {
        getdata(500)
    })
});

//===================================Promise    ===============================

let promise = new Promise((resolve, reject) => {
    console.log("hey i am a Promise");
    resolve("hey this reslove 123");
    //reject("hey some exception occured");
})





function getmydata(mydata, Nextdata) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log("data is coming from promised statement : ", mydata)

        }, 2000);

        resolve("sucess")

        if (Nextdata) {
            Nextdata();

        }

    });

}

//getmydata(900);
getmydata(500, 900);

//###########################Type of method Writings structure ######################

function getalpha_1() {
    console.log("ahlla");
}


const getbeta = () => {
    console.log("get beta fish")
}
//#################################################Promises############

let megapromise = () => {

    return new Promise((resolve, reject) => {

        console.log("hey this is mega promise experiment")
        resolve("success response from Network")
        //reject("No any message from network ")

    })

}
let smallpromise = megapromise();

smallpromise.then((res) => {
    console.log("promise fullfilled", res)
});

smallpromise.catch((err) => {
    console.log("hey this is small promise failure", err)
});

//***********************Chaining Process of promises ****************/

function synchro_1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hey this is coming from Synchro_1 ");
            resolve("success from Synchro_1")
        }, 2000);

    });
}

function synchro_2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hey this is coming from synchro_2")
            resolve("sucess from Syncho_2")
        }, 2000)
    });
}

console.log("fetch the data from Sync1");

synchro_1().then((res) => {
    console.log("hey this is inside p1 then method ")
    synchro_2().then((res) => {
        console.log("hey this is inside p1 then method ")
    })
});


function api() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("hey hi this is weather api promise");
            resolve(200);
        }, 2000);
    });
}

async function getmyweatherapi() {
    await api();
}

getmyweatherapi();
//************************fetch Api  */

const URL = "https://cat-fact.herokuapp.com/facts";
//let Promise = fetch(URL);
//console.log(Promise);
const factpara = document.querySelector("#factor");
const btn = document.querySelector("#butter_button");

const getfact = async () => {
    console.log("hey fetching API please wait for 2 sec .......")
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data[0].text, "hey is it that")
    //confirm.log(data)
    factpara.innerText = data[1].text;

};

//getfact();
btn.addEventListener("click", getfact);



//****************************V2.0 Batch 10 classes */

var brow = "firfox";
var brow = "chrome";
console.log(brow);//IF YOU SEE JS ALLOW RE DECLARATION WHERE AS JAVA DOESN'T ALLOW YOU 

let pillar = "hey anil how are you ";
let number_9 = 90;
if (number_9 > 89) {

    let Pole = "hey suni how are you ";
}
console.log("print the right value :", pillar)
//console.log("hey where is the pole:", pole)// Becuase pole is block level variable only 
//****************************Let Redeclaration*/once let is declared you cant redecalred you can re iniialitixze

let Arrow = "hi ";
//let Arrow="hello";
Arrow = "hey hi how do you do ";
console.log("we are redcalring but doing re initializing ", Arrow);

//*****************************const key word its like final key word in java**************************************/
const welcomeword = "hi welcome to hotel";
//welcomeword = "hello come in side hotel";//TypeError: Assignment to constant variable.at first.js:494:13
console.log(welcomeword);
// so constant once declared it is final 

// so finally Let we can reinitailaize but const we cant do it ***************************
var soup;
console.log("soup", soup); //undefined
let sour;
console.log("sour", sour); //undefined
//const salt;  ** Always decalre const variables .............

function checkage(age) {

    if (age > 24) {
        console.log("hey you can vote ");

    } else {
        console.log("hey you cant vote");

    }

}
checkage(25);

//*****************************Loops*************************************/
// for (let i = 0; i <= 5; i++) {
//     console.log(i)

// }

const myarray_3 = [100, 200, 300, 400, 500];

for (const e of myarray_3) {
    console.log(e)
}

for (let i = 0; i < myarray_3.length; i++) {

    console.log(myarray_3[i])
}

let p = 20;
while (p < 25) {
    p++
    console.log("my p ", p)

}
let arrowbounce = 25;
do {
    console.log("hey this is do while loop and logic is false and i am executing it once")

} while (arrowbounce > 25);
console.log("hey know it not greater than 25")

const mac_browsig = ["chrome", "safari", "firefox", "Brave"];
for (const e of mac_browsig) {
    console.log(e)
    if (e == "firefox") {

        console.log("hey i am satisfied with browser :", e)
        break;

    }


}

//**************************How to create a object in JS and Iterarte it for loop */
//of vs in : of is used to iterate array where in is used to iterate object 

const bank = {
    name: "adcb",
    yearofborn: 1989,
    place: "abudabhi",
    type: "commercial-bank"
}

for (const key in bank) {
    console.log(key, "==================", bank[key]);
}

//************************************Play with Array Guys *********************

// push : add element to array 

let arr_1 = ["anil", "sunil", "vineel"];
arr_1.push("navya");
console.log("pushing after:", arr_1)

//pop : remove last element from array

let arr2 = ["hike", "mike", "bike", "Rike"];
arr2.pop();
console.log(arr2);

//shift: remove first element from array
let arr3 = ["orange", "mango", "jackfruit", "pista"]
arr3.shift();
console.log(arr3);

//un-shit : add element to array ij zero th index 
let arr4 = ["orange", "mango", "jackfruit", "pista"];
arr4.unshift("parrotcolor");
console.log(arr4);
console.log(arr4.length)

//splice : remove elements from certain positionand oadd new element 

let arr5 = ['coke', 'pepsi', 'buvonto', 'maza']
arr5.splice(2, 3, 'goldspot');
console.log("drinks adeed after splice", arr5);

//slice: gives out new subset of array 

let arr6 = ['rhino', 'carrot', 'keera', 'onion', 'raddish', 'gobi']
let arr7 = arr6.slice(2, 4);
console.log(arr7);

//index of 

let arr8 = ['rhino', 'carrot', 'keera', 'onion', 'raddish', 'gobi'];
let arr9 = arr8.indexOf('gobi');
console.log(arr9)


//check for not present element 

let notpresent_element = arr8.indexOf('chilli');
console.log("when element is not presented", notpresent_element);

let arr_11 = ['rhino', 'carrot', 'keera', 'onion', 'raddish', 'gobi', 'keera'];
let number_firstindex = arr_11.indexOf('keera');
console.log("hey this is firstindex", number_firstindex);


let number_secondindex = arr_11.indexOf('keera', arr_11.indexOf('keera') + 1);
console.log("hey this is my second index", number_secondindex)

//includes
let arr_12 = ['rhino', 'carrot', 'keera', 'onion', 'raddish', 'gobi', 'keera'];
var flag = arr_12.includes("onion");
console.log("flag of veggies includes function", flag);

//for each operation

arr_12.forEach((e) => {
    console.log(e);

});

let num_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//printing 5th table 
num_arr.forEach((e) => {

    console.log(e, "xxxx", 5, "=", e * 5)
});

//****************************************************************************
//Map Filter Reduce :
let number_1 = [1, 2, 3, 4, 5];

let Adding_with_5 = number_1.map((e) => e + 5)
console.log("Adding number with 5", Adding_with_5);
//*************************************************************************** 
let number_2 = [2, 3, 4, 5, 6, 55, 66, 77, 88, 99];
let new_filter_array = number_2.filter((e) => e % 2 == 0);
console.log(new_filter_array);
//***************************************************************************

let farenheittemp = [23, 45, 67, 77]

function fareheinheightfunc(feta) {
    return (feta - 32) * (5 / 9);

}
console.log("fareheight numbers", farenheittemp.map(fareheinheightfunc))

let student_col = [{ name: "sharma", age: 30, gender: "male" }, { name: "varma", age: 30, gender: "female" }, { name: "kurma", age: 45, gender: "female" },
{ name: "kailash", age: 16, gender: "female" }];

let new_studs = student_col.filter((stud) => {
    return stud.age > 16 && stud.gender == 'female'
})
console.log("new studs :", new_studs)

//****************************************************************************************

let small_arr = [2, 3, 4, 5, 5, 66, 7, 88, 99, 0, 45];
let flag_1 = small_arr.every((e) => e < 600);
console.log("small every", flag_1);

let flag_2 = small_arr.every((e) => e < 100);
console.log("small_arr_lesser", flag_2);

//********************************************************************some**********************

small_arr = [2, 3, 4, 5, 55, 66, 7, 88, 99, 0, 45];

let some_e = small_arr.some((e) => e % 2 == 0)
console.log(some_e)

//***************************find-reverse-Indexoff -last index off********************************



let findelement = small_arr.find((e) => e % 5 == 0)
console.log("finding first element", findelement);


let fruits = ["apple", "mango", "berry", "grape", "apple", "pineapple"]
console.log("index of first apple", fruits.indexOf("apple"));
console.log("Last index of first apple", fruits.lastIndexOf("apple"));
console.log(fruits.reverse())

fruits = ["apple", "mango", "berry", "grape", "apple", "pineapple", "1234", "jackfruit", "T11233"]
console.log("After sorting all the fruits:", fruits.sort())


//***************Function Declarations*************************************************************************************
//Type ofMethod -1
function alpha_m1(a, b) {
    return a * b;
}
let prod = alpha_m1(9, 11);
console.log("prodcut is ", prod)

//Type of method -2 
function just_printing() {
    console.log("Hey hi ");
}

//Type of method -3
//Anonymous Function :calling using vairable name :

const muller = function (x, y) {
    return x * y
        ;
}
const mul = muller(number_9, 11);
console.log("hey muller fuction is writiing", mul);


//Arrow Function Very very imp guys .lIsten carefully :

const dividing_func = (x, y) => x / y;
const finalconst = dividing_func(2000, 30);
console.log("hey final const after dividing with arrow fuction is ", finalconst);



const multi_arrow = (x, y) => {
    return x * y
}

const multiplefunc = multi_arrow(200, 800);
console.log("hey Mutiple fuction with Aroow ", multiplefunc);

//calling via cinstructor method : down a is 1st param,b is 2nd param , 3rd will be the body 
//const subtract = new Function(a, b, 'return a-b;');
//console.log("hey hi subtract", subtract)


//IIFE and Geberator Function Type 


// Anonymous Function and using Map function to do square root  : 
//in map we have anonymous fuction and it is behaving like call back 

let sqrt_arr = [1, 2, 3, 4, 5, 6, 7]
const square_root = sqrt_arr.map(function (e) {
    return e * e
})
console.log("square rooting all numbers", square_root);

//with for each fuction .but it will provide Un defined check why ? hw?

const new_sqrt = sqrt_arr.forEach((e) => { return e * e })

console.log("square new rooting all numbers", new_sqrt);
//with for loop
for (const element of sqrt_arr) {

    console.log("hey i am doing with for each loop", element * element);

}

//Recurrsive Fuction 
function factorial(n) {

    if (n === 1 || n === 0) {
        return 1
    }
    else {
        return n * factorial(n - 1)
    }

}

console.log("factorial of 5", factorial(5));

// Higher order function calling one high oreder function form other function :
function Adddtion(a, b) {
    return a + b;
}
function operate(functionname, a, b) {
    functionname(a, b);
}
const myaddfunc = operate(Adddtion, 3, 4);
console.log("my higher order fucntion is ", myaddfunc);
//*************Arrow Functions **************/
const adder = (num1, num2) => num1 + num2;
const prv = adder(90, 10);
console.log("Adding with two numbers in a fucntion Prv ", prv)

const no_fun = () => "Hey Hi hello this is no param fun";
console.log(no_fun())

// other way of writing function :*******************************
const student_fullname = {
    firstname: "Anil",
    lastname: "purushothapatnam"
}

const myfunc_fullname = (student_fullname) => `${student_fullname.firstname} ${student_fullname.lastname}`;
console.log(myfunc_fullname(student_fullname));

// Defualt values vs values we are inserting 

const sporting = (username = 'Anil', sport = 'tennis') => `hey ${username} the game you like most is ${sport}`;
const R1 = sporting();
console.log(R1);
console.log(sporting("navya", "swimming"));

//rest params 
const summer = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
const mytotal = summer(20, 3, 40, 5);
console.log(mytotal)

// //java code for above problem:
// int[] array = {1, 2, 3, 4, 5};
// int sum = Arrays.stream(array).reduce(0, Integer::sum);
// int[] array = {1, 2, 3, 4, 5};
// list<Integerge> l1=Arrays.Aslist(array)
// int sum = l1.stream().reduce(0, (a,b)=>a+b);

const browse = (browser = "chrome", ...details) => {
    console.log(`browser for this operation is ${browser}`);
    console.log(`this operation is using `, details);
}
browse();
browse("firfox", 'v2.0', 'headless', 'modeheadless');

//object creation in JS *************************************
//1st way 
const myobj_1 = {

    name: "anil",
    age: "35",
    studies: "dublin"
}
console.log(myobj_1.name, myobj_1.age, myobj_1.studies);

//2nd way via constructor function ****************************
function car(brand, model, make) {
    this.brand = brand;
    this.make = make;
    this.model = model
}

const car_obj = new car("benz", "34lac", 2019);
const car_obj2 = new car("BMW", "35lac", 2020);

console.log(car_obj.make)
console.log('car brand is :', car_obj.brand)

console.log(car_obj2.make)
console.log('car brand is :', car_obj2.brand)

//class style 

class Bank {

    constructor(bankname, bankprod) {
        this.bankname = bankname;
        this.bankprod = bankprod;
    }

    getdetails() {

        console.log(`hey hello this is ${this.bankname} and ${this.bankprod}`)
    }
}
//creating obj of the class ......

const bankobj3 = new Bank("aib", "studentloan");
console.log(bankobj3.bankname, '-----', bankobj3.bankprod);
bankobj3.getdetails();

//using factory method create a obj 
function createstore(brandname, city) {
    return {
        brandname: brandname,
        city: city,
        getstoreinfo: function () {
            console.log(`store name is ${this.brandname} and store city is in ${this.city}`)
        }
    }


}

const obj4 = createstore("ratnadeep", "guntur");
obj4.getstoreinfo();
const obj4_1 = createstore("vijaya", "vijayawada");
obj4_1.getstoreinfo();

//type of variables :

let alpha = 90;
alpha = 'anil'
console.log(alpha)

const arr_22 = [1, 2, 3, 4, 5]
console.log(typeof arr_22)//object ans

x = {
    name: 'anil'
}
console.log(typeof x)//object ans

function alpha_009(name) {
    console.log("hey hello this ----");
}
console.log(typeof alpha_009)//fucntion ans

// overloaded function 
function browserchallenge(browser_name, browser_version, browser_remoteexecution) {

    if (typeof browser_version == 'string' && browser_remoteexecution == 'boolean') {
        console.log(`browser_name =${browser_version}`)

    }
    else {
        console.log(`browser_name =${browser_version}`)

    }

}
browserchallenge("chrome", "v2.0", true);

//Basic examples of classes and how do you use it 

class sweetshop {

    constructor(sweetname, taste, region, cost) {
        this.sweetname = sweetname;
        this.taste = taste;
        this.region = region;
        this.cost = cost;


    }

    make_newsweet() {

        console.log(`make a new sweet with all const ingridents ${this.region}`);


    }
}

const s1 = new sweetshop("kalakarn", "sweet", "telugu", 250);
console.log("sweet name is :  ", s1.sweetname);
console.log(s1.make_newsweet());

const s2 = new sweetshop("basanti", "sweet", "bengali", 900);
console.log("sweet name is :  ", s2.sweetname);
console.log(s2.make_newsweet());

//Inheritance concepts in Java Script ******************

//p1--->c1---->ectend c2 mutiple inheritance not possible in JS like java we can have only multi level inheritance 

//can Access grandparent methods by grand kids 

class Vechicle {

    constructor(color, model, enginecc) {

        this.enginecc = enginecc;
        this.color = color;
        this.model = model
    }
    getinfo_vechile() {
        console.log(`hey print all vech details ${this.color},${this.enginecc},${this.model}`)
    }
}

class ship extends Vechicle {

    constructor(color, model, enginecc, load) {
        super(color, model, enginecc);
        this.load = load;

    }

    getship_load() {
        console.log(`hey hi hello load ${this.load}`);// Always we need to Access with this keyword or else we get ,load not defined  
    }
}

class Aero extends Vechicle {

    constructor(color, model, enginecc, company) {
        super(color, model, enginecc);
        this.company = company;

    }

    getAero_brand() {
        console.log(`hey hi hello load ${this.company}`);
    }


}

const ship1 = new ship("black", 2024, "5GT", "2000MT");
ship1.getinfo_vechile();
ship1.getship_load();

const Aero_obj = new Aero("white", 2021, "2000000CC", "Boeing");
Aero_obj.getinfo_vechile();
Aero_obj.getAero_brand();
















































































































































































