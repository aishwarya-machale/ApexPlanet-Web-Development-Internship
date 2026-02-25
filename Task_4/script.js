const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const mainContent = document.getElementById("mainContent");


menuToggle.onclick = () => {

sidebar.classList.toggle("active");

if(mainContent){
mainContent.classList.toggle("shift");
}

};


const navLinks = document.querySelectorAll(".nav-links li a");

const currentPage = window.location.pathname.split("/").pop();


navLinks.forEach(link => {

const linkPage = link.getAttribute("href");

if(linkPage === currentPage){

link.parentElement.classList.add("active");

}

});