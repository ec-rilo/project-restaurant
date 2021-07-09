import _ from 'lodash';
import '../dist/styles/reset.css';
import '../dist/styles/main.css';
import '../dist/styles/menu.css';
import {createHomePage} from './home-page.js';
import {createBarPage} from './bar.js';
import {createNav} from './nav.js';

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
    let pagesArr = [landingPage, barPage];
    closePages(pagesArr);

    openPage(landingPage);
    
    let menuPageBtn = document.getElementById(`MENU-page-btn`);
    menuPageBtn.addEventListener('click', () => {
        console.log('HI');
        closePages(pagesArr);
        openPage(barPage);
    });

    let landingPageBtn = document.querySelector(`.logo-item`);
    console.log(landingPageBtn);
    landingPageBtn.addEventListener('click', () => {
        console.log('Hi');
        closePages(pagesArr);
        openPage(landingPage);
    });

})();
