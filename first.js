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
















































































































































