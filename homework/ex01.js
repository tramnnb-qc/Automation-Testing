/* Bài tập 1: "Làm phẳng" kim tự tháp (Refactoring)

Đề bài: Cho một đoạn code sử dụng Callback cực kỳ rắc rối dưới đây. 
        Đoạn code này mô phỏng việc Mở trình duyệt -> Nhập URL -> Tìm Element -> Click.

function openBrowser(callback) {
    setTimeout(() => {
        console.log("1. Đã mở trình duyệt");
        callback();
    }, 1000);
}

function enterUrl(url, callback) {
    setTimeout(() => {
        console.log("2. Đã nhập URL: " + url);
        callback();
    }, 1000);
}

function clickButton(callback) {
setTimeout(() => {
        console.log("3. Đã click nút Login");
        callback();
    }, 1000);
}

// Thực thi (Địa ngục Callback)
openBrowser(() => {
    enterUrl("https://test.com", () => {
        clickButton(() => {
            console.log("✅ Test hoàn tất!");
        });
    });
});

    Yêu cầu: 
    1. Viết lại 3 hàm trên dưới dạng Promise. 
    2. Sử dụng Async/Await để thực thi chuỗi hành động trên sao cho code trông "thẳng" và dễ đọc nhất.

*/

function openBrowser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("1. Đã mở trình duyệt");
      resolve();
    }, 1000);
  });
}

function enterUrl(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. Đã nhập URL: " + url);
      resolve();
    }, 1000);
  });
}

function clickButton() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("3. Đã click nút Login");
      resolve();
    }, 1000);
  });
}

// Thực thi dạng promise:
// openBrowser()
//   .then(() => enterUrl("https://test.com"))
//   .then(() => clickButton())
//   .then(() => console.log("✅ Test hoàn tất!"));

// Thực thi dạng Async/Await:
async function excuteTest(params) {
  try {
    await openBrowser();
    await enterUrl("https://test.com");
    await clickButton();
    console.log("✅ Test hoàn tất!");
  } catch (error) {
    console.log("Test fail:", err);
  }
}

excuteTest();
