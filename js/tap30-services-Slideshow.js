// let myIndex = 0;
// slideShow();
//
// function slideShow() {
//     let i;
//     let text = document.getElementsByClassName("tab-content");
//     let icon = document.getElementsByClassName("tab-links");
//     for (i = 0; i < text.length; i++) {
//         text[i].style.display = "none";
//         icon[i].classList.remove("active");
//     }
//     myIndex++;
//     if (myIndex > text.length) {
//         myIndex = 1;
//     }
//     text[myIndex - 1].style.display = "flex";
//     icon[myIndex - 1].classList.add("active");
//     setTimeout(slideShow, 2000); // Change image every 2 seconds
// }