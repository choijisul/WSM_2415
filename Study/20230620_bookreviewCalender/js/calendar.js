var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesCoainterDiv = document.getElementsByClassName("dates container")[0];

const setCalendar = (year, month) => {
    //현재 월 제목에 표시하자
    //html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];

    // = `${month월}`;
    titleMonthDiv.innerHTML = `${month}월`;

    // 1~해당 월의 마지막 날짜까지 날짜 div만들기    
    datesCoainterDiv.replaceChildren();

    //해당 월의 마지막날
    var thisMonthLastDate = new Date(year, month + 1 - 1, 0).getDate();  //전달 마지막 날
    var date;

    for (let date = 1; date <= thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement("div"); //<div></div>
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;

        // dates.container에게 자식으로 붙이자
        datesCoainterDiv.appendChild(dateItemDiv);

    }

    //1일을 해당 요일로 이동
    let firstDateDiv = datesCoainterDiv.querySelector(".date.item:nth-child(1)");
    // css: .date.item:nth-child(1) {grid-column-start: 6}
    //1일에 요일 구하자 year, month -> month 1일의 요일 : 9월;
    let firstDateDay = new Date(year, month-1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

    //토 : 파란색
    let saturdayFirstDate = 7 - firstDateDay;
    let saturdayDivs = datesCoainterDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate})`);
    for (let saturdayDiv of saturdayDivs){
        //.date.item:nth-child(7n+2) {color: blue;}
        saturdayDiv.style.color = "blue";
    }
    //일 : 빨간색
    let sundayFirstDate = (8 - firstDateDay) % 7;  
    let sundayDivs = datesCoainterDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for (let sundayDiv of sundayDivs){
        //.date.item:nth-child(7n+2) {color: blue;}
        sundayDiv.style.color = "red";
    }


    console.log(thisMonthLastDate);

    //해당 월의 1일 요일
    var thisMonthFirstDay = new Date(year, month - 1, 1).getDay(); //0: sum, 1: mon, 2: tue, 3: wed, 4: the, 5: fri, 6: sat 
    console.log(thisMonthFirstDay);

}
setCalendar(year, month);


// < : 이전달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month --;
    let prevMonth = new Date(year, month - 1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth() + 1;
    setCalendar(year, month);  //onclick은 함수가 아님 ( ()=> 이거 넣어야 실행되는거 시험에 나옴 )
}
// 옛날방법 : leftDiv.addEventListener("click", () => console.log("이전달"));
// > : 이후달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month ++;
    if (month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
};


