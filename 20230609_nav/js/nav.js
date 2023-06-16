
// 1. HTML -> js
// 햄버거메뉴 -> navToggleDiv
// 햄버거메뉴 i -> navToggleI
// nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-list")[0];

// 2. Event Handling
// 햄버거메뉴 클릭 -> 햄버거메뉴 i <-> X
// 햄버거메뉴 클릭 -> .nav-list에 .show-menu 보여주기 <-> 안보여주기
nav_toggle.onclick = () => alert("안녕"); //시험문제 나온다. (위에 하기 전에 한 코드임)-> ()d있으면 바로 호출해서 안됨.

//-----------------------------
//HTML -> js
// id
// const navToggleDiv = document.getElementById("nav_toggle");
// nav_toggle;  //js 변수 선언 규칙 지켜줘야함 

// class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];

// tag
// const navToggleDiv = document.getElementsByTagNameNS("div")[0];

//querySelector, querySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav_toggle")[0];
// const navToggleDiv = document.querySelectorAll("nav_toggle")[0];