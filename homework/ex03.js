/* Bài tập 3: Kịch bản Test song song (Parallel vs Sequential)

Đề bài: 
    Giả sử bạn cần kiểm tra 3 Page khác nhau: HomePage, ProductPage, và ContactPage. 
    Mỗi trang mất 2 giây để load.

Yêu cầu:
    Viết một hàm checkPage(pageName) trả về Promise và hoàn thành sau 2 giây.

    Kịch bản A (Tuần tự): 
        Dùng await để kiểm tra từng trang một (Trang 1 xong mới đến trang 2). 
        Sau đó in ra tổng thời gian chạy (dự kiến là 6 giây).

    Kịch bản B (Song song - Nâng cao): 
        Tìm hiểu về Promise.all() để kích hoạt kiểm tra cả 3 trang cùng một lúc. 
        Sau đó in ra tổng thời gian chạy (dự kiến chỉ mất 2 giây).
*/

function checkPage(pageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Load ${pageName}`);
      resolve(pageName);
    }, 2000);
  });
}

async function runSequential(params) {
  console.time("Total Sequential Time");
  await checkPage("HomePage - S");
  await checkPage("ProductPage - S");
  await checkPage("ContactPage - S");
  console.timeEnd("Total Sequential Time");
}
runSequential();

async function runParallel(params) {
  console.time("Total Parallel Time");
  await Promise.all([
    checkPage("HomePage - P"),
    checkPage("ProductPage - P"),
    checkPage("ContactPage - P"),
  ]);
  console.timeEnd("Total Parallel Time");
}
runParallel();
