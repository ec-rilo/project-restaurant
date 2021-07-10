import _ from 'lodash';
import '../dist/styles/reset.css';
import '../dist/styles/main.css';
import '../dist/styles/menu.css';
import {createNav} from './nav.js';
import {createHomePage} from './home-page.js';
import {createBarPage} from './bar.js';
import {createMenuPage} from './menu-page.js';

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
    let hoursPage = document.querySelector('.footer-content-container');
    let pagesArr = [landingPage, barPage, menuPage];
    closePages(pagesArr);

    openPage(landingPage);

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

})();
