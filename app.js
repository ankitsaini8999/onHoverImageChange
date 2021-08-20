"use strict";

const toggle = document.querySelector(".toggler");
const linkHolder = document.querySelector(".link-holder");

toggle.addEventListener("click", function () {
	linkHolder.classList.toggle("active");
});
