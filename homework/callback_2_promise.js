/*
Hãy yêu cầu học viên viết lại đoạn kịch bản test sau từ Callback sang Promise:
    wait(1s) -> In ra "Start Test".
    wait(1s) -> In ra "Doing Test".
    wait(1s) -> In ra "End Test".
*/
// function startTest(callback) {
//   setTimeout(() => {
//     console.log("Start Test");
//     callback();
//   }, 1000);
// }

// function doingTest(callback) {
//   setTimeout(() => {
//     console.log("Doing Test");
//     callback();
//   }, 1000);
// }

// function endTest(callback) {
//   setTimeout(() => {
//     console.log("End Test");
//     // callback();
//   }, 1000);
// }

// startTest(() => {
//   doingTest(() => {
//     endTest(); // vì không truyền callback nên nếu định nghĩa hàm có callback >> lỗi
//   });
// });

/********************************************************/

function startTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Start Test");
      resolve();
    }, 1000);
  });
}

function doingTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Doing Test");
      resolve();
    }, 1000);
  });
}

function endTest() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("End Test");
      //resolve();
    }, 1000);
  });
}

startTest().then(doingTest).then(endTest);
