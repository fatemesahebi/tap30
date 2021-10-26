let stopSlide = 0 ;


function openTab(evt, tabName, linkName) {
    // Declare all variables
    let tabcontent, tablinks;
    stopSlide = 1 ;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-links" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-links");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(linkName).classList.add("active");
}

let myIndex = 0;
slideShow();

function slideShow() {
    let i;
    let text = document.getElementsByClassName("tab-content");
    let icon = document.getElementsByClassName("tab-links");
    if (stopSlide === 0) {
        for (i = 0; i < text.length; i++) {
            text[i].style.display = "none";
            icon[i].classList.remove("active");
        }
        myIndex++;
        if (myIndex > text.length) {
            myIndex = 1;
        }
        text[myIndex - 1].style.display = "flex";
        icon[myIndex - 1].classList.add("active");
        setTimeout(slideShow, 2000); // Change image every 2 seconds
    }
}
