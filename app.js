'use strict';

//TODO: Delcare all required variables

const accordionContainer = document.querySelector('.accordion__container');
const accordionHeader = document.querySelectorAll('.accordion__header');
const accordionBody = document.querySelectorAll('.accordion__body-container');
const body = document.body;


//TODO: Initally close all accordion tabs

//* Add active class to all accordion headers
const headerActive = function () {
    accordionHeader.forEach(accordionHead => {
    accordionHead.classList.add('active__header')
    });
}
headerActive();

//* Add active class to all accordion bodies
const bodyActive = function () {
    accordionBody.forEach(accordionBod => {
    accordionBod.classList.add('active__body')
    });
}
bodyActive();

//TODO: Target the parent container using event delegation (target elements that contains "accordion__header") and listen for clicks

accordionContainer.addEventListener('click', e => {

    //* Target only elements with "accordion__header"
    if (e.target.closest('.accordion__header')) {

        const clicked = e.target.closest('.accordion__header');

        /////////////////////////////////////////////////
        //* Remove active class from the clicked accordion header
        clicked.classList.toggle('active__header');

        //* Remove active class from the clicked accordion body
        const contentBody = document.querySelector(`.accordion__body--${clicked.dataset.accordion}`);
        contentBody.classList.toggle('active__body');
    }
})


//TODO: Automatically close unused tabs when the body is clicked

body.addEventListener('click', e => {

    //* Target other parts of the page asides the accordion container and its children
    
    if (!e.target.closest('.accordion__container')) {
        headerActive();
        bodyActive();
    }

})

