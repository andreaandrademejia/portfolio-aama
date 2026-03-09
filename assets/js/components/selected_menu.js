/* ============================== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}
	/* ============================== sticky navbar ========================*/


let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

/* ============================== toggle icon  ========================*/
menuIcon.onclick = () => {
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');


};






export default activeMenu;
