/* Bài tập 2: "Bẫy lỗi" hệ thống (Error Handling)

Đề bài: Trong Automation, đôi khi Server sẽ trả về lỗi (ví dụ: Timeout 404). 
Bạn cần viết một script "nồi đồng cối đá" không bị crash khi gặp lỗi.

Yêu cầu: 
    1. Viết một hàm fetchDataFromServer() trả về một Promise. 

    2. Sử dụng Math.random() bên trong hàm: 
    * Nếu số ngẫu nhiên > 0.5: Resolve với nội dung "Dữ liệu đã sẵn sàng". 
    * Nếu số ngẫu nhiên <= 0.5: Reject với nội dung "Lỗi kết nối Server!". 
    
    3. Viết một hàm runTest() sử dụng Async/Await để gọi hàm trên. 

    4. Quan trọng: Phải dùng try...catch để: 
    * Nếu thành công: In ra dữ liệu. 
    * Nếu thất bại: In ra thông báo lỗi màu đỏ và dòng chữ "Đang đóng trình duyệt để dọn dẹp...".
*/

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        resolve("Dữ liệu đã sẵn sàng");
      } else {
        reject("Lỗi kết nối Server!");
      }
    }, 1000);
  });
}

async function runTest(params) {
  try {
    const data = await fetchDataFromServer();
    console.log("Thành công:", data);
  } catch (error) {
    console.log("Thất bại:", error);
  } finally {
    console.log("Đang đóng trình duyệt để dọn dẹp...");
  }
}
runTest();
