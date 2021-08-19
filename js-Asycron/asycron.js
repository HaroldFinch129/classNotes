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

let counter = 0;

function showTime() {
    if (counter == 20) {
        clearInterval(id);
    }

    const timeLabel = document.querySelector("p");
    // console.log(timeLabel);
    const time = new Date();
    timeLabel.innerHTML = time.toLocaleTimeString();
    counter++;
}
setInterval(showTime, 1000);