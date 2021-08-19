// // setTimeOut----------------------------
// const slowTask = () => {
//     let i = 0;
//     do {
//         i++;
//     } while (i < 500 _000_000);
//     return "task is completed.";
// };

// console.log("¯\\_(ツ)_/¯");
// console.time("bir");
// // setTimeout
// console.log("hello1");
// console.timeLog("bir");
// slowTask();
// setTimeout(() => {
//     console.log("Settimeout");
//     console.timeEnd("bir");
// }, 1000);
// console.log("hello2");
// console.timeLog("bir");
// console.log("hello3");
// console.timeLog("bir");

// let counter = 0;
// const id = setInterval(function () {
//   const timeLabel = document.querySelector("p");
//   // console.log(timeLabel);
//   const time = new Date();
//   timeLabel.innerHTML = time.toLocaleTimeString();
//   counter++;
//   if (counter == 5) {
//     timeLabel.innerHTML = "Merhaba";
//     clearInterval(id);
//     // console.log("timeLabel :>> ", timeLabel);
//   }
// }, 1000);
// console.log("id :>> ", id);

/** promise */

const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise started");
    let condition = false;
    if (condition) {
        resolve("işlem tamam");
    }
    reject(Error("gerçekleşmedi"));
});
console.log("merhaba");
myPromise
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.log(msg);
    });
console.log("gule gule");