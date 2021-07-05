import _ from 'lodash';
import '../dist/styles/reset.css';
import '../dist/styles/main.css';
import {createHomePage} from './home-page.js';

"use strict";

function closePages(pagesArr) {
    pagesArr.forEach(page => {
        page.style.display = 'none';
    });
}

let program = (() => {
    let landingPage = createHomePage.contentDiv;

    const pagesArr = [landingPage];

    closePages(pagesArr);

})();
