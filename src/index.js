import _ from 'lodash';
import '../dist/styles/reset.css';
import '../dist/styles/main.css';
import '../dist/styles/menu.css';
import '../dist/styles/about.css';
import '../dist/styles/contact.css';
import {createNav} from './nav.js';
import {createHomePage} from './home-page.js';
import {createBarPage} from './bar.js';
import {createMenuPage} from './menu-page.js';
import {createAboutPage} from './about.js';
import {createContactPage} from './contact.js';

"use strict";

function closePages(pagesArr) {
    pagesArr.forEach(page => {
        page.style.display = 'none';
    });
}

function openPage(page) {
    page.style.display = 'block';

}

let program = (() => {
    let landingPage = createHomePage.contentDiv;
    let barPage = createBarPage.contentDiv;
    let menuPage = createMenuPage.contentDiv;
    let aboutPage = createAboutPage.contentDiv;
    let hoursPage = document.querySelector('.footer-content-container');
    let contactPage = createContactPage.contentDiv;
    let pagesArr = [landingPage, barPage, menuPage, aboutPage];
    closePages(pagesArr);

    // openPage(landingPage);

    let landingPageBtn = document.querySelector(`.logo-item`);
    console.log(landingPageBtn);
    landingPageBtn.addEventListener('click', () => {
        console.log('Hi');
        closePages(pagesArr);
        openPage(landingPage);
    }); 

    let menuPageBtn = document.getElementById(`MENU-page-btn`);
    menuPageBtn.addEventListener('click', () => {
        console.log('HI');
        closePages(pagesArr);
        openPage(menuPage);
    });

    let barPageBtn = document.getElementById(`BAR-page-btn`);
    barPageBtn.addEventListener('click', () => {
        console.log('HI');
        closePages(pagesArr);
        openPage(barPage);
    });

    let hoursPageBtn = document.getElementById(`HOURS-page-btn`);
    hoursPageBtn.addEventListener('click', () => {
        console.log('hi');
        closePages(pagesArr);
        openPage(landingPage);
    });

    let aboutPageBtn = document.getElementById(`ABOUT-page-btn`);
    aboutPageBtn.addEventListener('click', () => {
        console.log('hi');
        closePages(pagesArr);
        openPage(aboutPage);
    });

    let contactPageBtn = document.getElementById(`CONTACT-page-btn`);
    contactPageBtn.addEventListener('click', () => {
        console.log('hi');
        closePages(pagesArr);
        openPage(contactPage);
    });

})();
