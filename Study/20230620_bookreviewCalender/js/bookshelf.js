//.book-item > img 태그의 src 속성 초기화

//HTML -> js
const bookItems = document.getElementsByClassName("book-item");
let i = 0;
for(let bookItem of bookItems){
    const bookItemImg = bookItem.getElementsByTagName("img")[0];   //.book-item 하나싹 꺼내서 img 태그 가져옴
    bookItemImg.src = books[i].img;  //data.js 예시 img 값 가져와서 img 테그에 적용함
    i++
}