const bar = document.querySelector('.nav-bar')
const nav = document.querySelector('nav')
const header_btn = document.querySelector('.heading__right')

bar.onclick = function () {
    if (nav.style.display === 'none') {//kiểm tra nếu nav đang ở trang thái ẩn thì click sẽ add thuộc tính block và ngược lại
        nav.style.display = 'block'
        header_btn.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}