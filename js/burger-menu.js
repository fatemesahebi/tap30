function openMenu() {

    if (document.getElementsByClassName("bergure-content")[0].style.display !== "block") {

        document.getElementsByClassName("bergure-content")[0].style.display = "block";
        document.getElementById("bar1").classList.add("rotate-CW");
        document.getElementById("bar2").style.display = "none";
        document.getElementById("bar3").classList.add("rotate-CCW");
    } else {
        document.getElementsByClassName("bergure-content")[0].style.display = "none";
        document.getElementById("bar1").classList.remove("rotate-CW");
        document.getElementById("bar2").style.display = "block";
        document.getElementById("bar3").classList.remove("rotate-CCW");
    }
}
