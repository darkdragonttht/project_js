/*
 * nguy hiểm ngoài: tự động chèn semi
 */
function getPerson() {
    return { //nếu để dấu mở ngoặc ở dưới dòng return, thì dòng return sẽ tự động thêm một dấu ';' ẩn, làm cho dòng code chạy không đúng
        firstname: 'Quang'
    }
}

console.log(getPerson());