window.onscroll=function(){myFunction()};var menu=document.getElementById("menu"),sticky=menu.offsetTop;function myFunction(){window.pageYOffset>sticky?menu.classList.add("sticky"):menu.classList.remove("sticky")}function instagram(){window.open("https://www.instagram.com/")}let mainNav=document.getElementById("js-menu"),navBarToggle=document.getElementById("js-navbar-toggle");navBarToggle.addEventListener("click",(function(){mainNav.classList.toggle("active")}));