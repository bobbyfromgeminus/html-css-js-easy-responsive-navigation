'use strict';

const navContainer = document.querySelector('nav section');
const navHamburger = document.querySelector('nav mark');
const navClose = document.querySelector('nav section button');

const navigationToggle = () => {
    navContainer.classList.toggle('show-nav');
}

navHamburger.addEventListener('click', navigationToggle);

navClose.addEventListener('click', navigationToggle);