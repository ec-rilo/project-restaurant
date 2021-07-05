import _ from 'lodash';
import '../dist/styles/reset.css';
import '../dist/styles/main.css';
import {createHomePage} from './home-page.js';
import {createBarPage} from './bar.js';

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
    menuPageBtn.addEventListener('click', () => console.log('it works'));



})();
