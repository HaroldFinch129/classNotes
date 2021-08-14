// const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// let deposit = 0;
// let witdrow = 0;
// let arrDeposited = [];
// let arrWithdraws = [];
// const toplam = movements.forEach(element => {

//     if (element > 0) {
//         deposit += element;
//         arrDeposited.push(element);

//     } else {
//         witdrow += element
//         arrWithdraws.push(element);
//     }

// });
// console.log(deposit, witdrow);
// console.log(arrDeposited, arrWithdraws)

// map initials
const str = 'Clarusway Online Career IT Training School';

const myArr = str.split(" ");
console.log(myArr);

let sumStr = "";
myArr.map((item) => {
    sumStr += item[0]

})
console.log(sumStr);


// let newStr = "";
// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 



// for (let i = 0; i < str.length; i++) {
//     if (str[i].toUpperCase() === str[i]) {

//         newStr += str[i].toLowerCase();

//     } else if (str[i].toLowerCase() === str[i]) {
//         newStr += str[i].toUpperCase();
//     }

// }
// console.log(newStr);


// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each
//

const cart = [{
        item: "🍫",
        price: 5,
        vat: 8,
    },
    {
        item: "🍌",
        price: 5,
        vat: 8,
    },
    {
        item: "🥐",
        price: 7,
        vat: 18,
    },
    {
        item: "🍰",
        price: 15,
        vat: 18,
    },
    {
        item: "🎂",
        price: 25,
        vat: 1,
    },
    {
        item: "🥧",
        price: 20,
        vat: 1,
    },
];
// 1
let sum = 0;
for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    sum += element.price;
}
console.log(sum);
// 2
sum = 0;
for (const el of cart) {
    sum += el.price;
}
console.log(sum);
// 3
sum = 0;
cart.forEach((element) => {
    sum += element.price;
});
// 4
const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
console.log("result :>> ", result);

// 5
const re = cart.reduce((sum, curItem) => {
    return sum + curItem.price;
}, 0);
console.log("re :>> ", re);

const vat = cart.reduce((sum, curItem) => {
    return sum + (curItem.price * curItem.vat) / 100;
}, {});
console.log("vat :>> ", vat);