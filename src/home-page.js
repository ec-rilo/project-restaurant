'use strict';

let createHomePage = (() => {
    'use strict';
    const contentDiv = document.getElementById('content');

    // Top navigation Bar
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-container');
    contentDiv.appendChild(navContainer);

    const topNav = document.createElement('div');
    topNav.classList.add('top-nav');
    navContainer.appendChild(topNav);

    const topNavLogoItems = document.createElement('ul');
    topNavLogoItems.classList.add('top-nav-logo-info');
    const logoItem1 = document.createElement('li');
    logoItem1.classList.add('logo-item');
    const logoItem2 = document.createElement('li');
    logoItem2.classList.add('logo-item');
    topNav.appendChild(topNavLogoItems);
    topNavLogoItems.appendChild(logoItem1, logoItem2);

    const topNavMenuItemsContainer = document.createElement('ul');
    topNavMenuItemsContainer.classList.add('top-nav-menu-items');
    topNav.appendChild(topNavMenuItemsContainer);

    const menuItemNames = ['MENU', 'BAR', 'HOURS', 'ABOUT', 'CONTACT'];
    menuItemNames.forEach( item => {
        let menuItem = document.createElement('li');

        let menuItemText = document.createElement('a');
        menuItemText.setAttribute('href', '#');
        menuItemText.innerHTML = item;
        menuItem.appendChild(menuItemText);

        topNavMenuItemsContainer.appendChild(menuItem);
    });



    


})();

export {
    createHomePage
}