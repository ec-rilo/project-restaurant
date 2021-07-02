import fIcon from '../dist/images/small-facebook-icon.png';
import iIcon from '../dist/images/small-instagram-icon.png';
import logo from '../dist/images/logo.png';

'use strict';


let imgLibrary = (() => {
    const facebookIconCont = document.createElement('a');
    facebookIconCont.setAttribute('href', '#');

    const facebookIcon = new Image();
    facebookIcon.classList.add('social-media-btns');
    facebookIcon.src = fIcon;
    facebookIcon.setAttribute('alt', 'A facebook icon');
    facebookIconCont.appendChild(facebookIcon);


    const instaIconCont = document.createElement('a');
    instaIconCont.setAttribute('href', '#');

    const instaIcon = new Image();
    instaIcon.src = iIcon;
    instaIcon.classList.add('social-media-btns');
    instaIcon.setAttribute('alt', 'A instagram icon');
    instaIconCont.appendChild(instaIcon);

    const mainLogo = new Image();
    mainLogo.src = logo;
    mainLogo.setAttribute('alt', 'Mexican Restaurant Logo');

    return {
        facebookIconCont,
        instaIconCont,
        mainLogo,
    }
})();

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
    topNav.appendChild(topNavLogoItems);

    const logoItem1 = document.createElement('li');
    logoItem1.classList.add('logo-item');
    const logoItem1Img = imgLibrary.mainLogo;
    logoItem1Img.classList.add('logo-nav');
    logoItem1.appendChild(logoItem1Img);

    topNavLogoItems.appendChild(logoItem1);

    const logoItem2 = document.createElement('li');
    logoItem2.classList.add('logo-item');
    const logoItem2Text = document.createElement('p');
    logoItem2Text.innerHTML = 'La Mexicana';
    logoItem2Text.classList.add('nav-logo-name');
    logoItem2.appendChild(logoItem2Text);

    topNavLogoItems.appendChild(logoItem2);

    const topNavMenuItemsContainer = document.createElement('ul');
    topNavMenuItemsContainer.classList.add('top-nav-menu-items');
    topNav.appendChild(topNavMenuItemsContainer);

    const menuItems = [{name: 'MENU'}, {name: 'BAR'}, {name: 'HOURS'}, {name: 'ABOUT'}, {name: 'CONTACT'}];
    menuItems.forEach( item => {
        let menuItem = document.createElement('li');

        let menuItemText = document.createElement('a');
        menuItemText.setAttribute('href', '#');
        menuItemText.innerHTML = item.name;
        menuItem.appendChild(menuItemText);

        topNavMenuItemsContainer.appendChild(menuItem);
    });

    const topNavImgs = [imgLibrary.facebookIconCont, imgLibrary.instaIconCont];

    const numOfSocMedIcons = 2;
    for (let i = 0; i < numOfSocMedIcons; ++i) {
        const socialMediaIconCont = document.createElement('li');
        topNavMenuItemsContainer.appendChild(socialMediaIconCont);

        const icon = topNavImgs[i];
        socialMediaIconCont.appendChild(icon);
    }


})();

export {
    createHomePage
}