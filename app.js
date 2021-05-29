'use strict';

//TODO: Delcare all required variables

const accordionContainer = document.querySelector('.accordion__container');
const accordionHeader = document.querySelectorAll('.accordion__header');
const accordionBody = document.querySelectorAll('.accordion__body-container');


//TODO: Initally close all accordion tabs

//* Add active class to all accordion headers
accordionHeader.forEach(accordionHead => {
    accordionHead.classList.add('active__header')
});
//* Add active class to all accordion bodies
accordionBody.forEach(accordionBod => {
    accordionBod.classList.add('active__body')
});

//TODO: Target the parent container using event delegation (target elements that contains "accordion__header") and listen for clicks

accordionContainer.addEventListener('click', e => {

    //* Target only elements with "accordion__header"
    if (e.target.closest('.accordion__header')) {

        const clicked = e.target.closest('.accordion__header');

        /////////////////////////////////////////////////
        //* Remove active class from the clicked accordion header
        clicked.classList.toggle('active__header');

        //* Remove active class from the clicked accordion body
        console.log(clicked.dataset.accordion);
        const contentBody = document.querySelector(`.accordion__body--${clicked.dataset.accordion}`);
        contentBody.classList.toggle('active__body');
    }
})