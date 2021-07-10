import fIcon from '../dist/images/small-facebook-icon.png';
import iIcon from '../dist/images/small-instagram-icon.png';
import logo from '../dist/images/logo.png';
import mainBackgroundImage from '../dist/images/tacos-dark.jpg'


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

    const mainLogoNav = new Image();
    mainLogoNav.src = logo;
    mainLogoNav.setAttribute('alt', 'Mexican Restaurant Logo');

    const mainBackgroundImg = new Image();
    mainBackgroundImg.src = mainBackgroundImage;
    mainBackgroundImg.setAttribute('alt', 'Picture of tacos');

    const facebookIconFooter = new Image();
    facebookIconFooter.src = fIcon;
    facebookIconFooter.classList.add('small-logo-size', 'footer-logo');
    facebookIconFooter.setAttribute('alt', 'A facebook icon');

    const instaIconFooter = new Image();
    instaIconFooter.src = iIcon;
    instaIconFooter.classList.add('small-logo-size', 'footer-logo');
    instaIconFooter.setAttribute('alt', 'A facebook icon');

    return {
        facebookIconCont,
        instaIconCont,
        mainLogo,
        mainLogoNav,
        mainBackgroundImg,
        facebookIconFooter,
        instaIconFooter,
    }
})();

let createMenuPage = (() => {
    'use strict';
    const contentDiv = document.getElementById('menu-page');

    // Create Bar Page content

    const barPageContainer = document.createElement('div');
    barPageContainer.classList.add('bar-menu-title-container');
    contentDiv.appendChild(barPageContainer);

    const menuTitle = document.createElement('h4');
    menuTitle.classList.add('menu-title');
    menuTitle.innerHTML = 'OUR MENU';
    barPageContainer.appendChild(menuTitle);

    const menuDescription = document.createElement('p');
    menuDescription.classList.add('menu-description');
    menuDescription.innerHTML =
    'Available for take-out & curbside pickup.' +
    '</br>' +
    'Please call to verify current onsite dining options. We continue to follow all state guidelines.';
    barPageContainer.appendChild(menuDescription);

    const menuTabsContainer = document.createElement('ul');
    menuTabsContainer.classList.add('menu-tabs-container');
    barPageContainer.appendChild(menuTabsContainer);

    let numOfTabs = 3;
    const menuTabNamesArr = ['Food', 'Drinks', 'Dessert'];

    for (let i = 0; i < numOfTabs; ++i) {
        const menuTabLi = document.createElement('li');
        menuTabLi.classList.add('menu-tab-item-li');

        const menuTabItemInner = document.createElement('a');
        menuTabItemInner.setAttribute('href', '#');
        menuTabItemInner.classList.add('menu-tab-item', `menu-tab-item-${i + 1}`);
        menuTabItemInner.innerHTML = menuTabNamesArr[i];
        menuTabLi.appendChild(menuTabItemInner);

        menuTabsContainer.appendChild(menuTabLi);
    }

    const menuContainerBox = document.createElement('div');
    menuContainerBox.classList.add('menu-container-box');
    barPageContainer.appendChild(menuContainerBox);

    const menuTabTitle = document.createElement('p');
    menuTabTitle.classList.add('menu-tab-title');
    menuTabTitle.innerHTML = 'FOOD';
    menuContainerBox.appendChild(menuTabTitle);

    const menuContainer = document.createElement('ul');
    menuContainer.classList.add('menu-container');
    menuContainerBox.appendChild(menuContainer);

    const numOfMenuItems = 12;

    for (let i = 0; i < numOfMenuItems; ++i) {
        const menuItemContainer = document.createElement('li');
        menuItemContainer.classList.add('menu-item-container');
        menuContainer.appendChild(menuItemContainer);

        const menuItemName = document.createElement('p');
        menuItemName.classList.add('menu-item-name');
        menuItemName.innerHTML = 'PLATO COMPLETO (RICE BOWL)';
        menuItemContainer.appendChild(menuItemName);

        const menuItemIngredients = document.createElement('p');
        menuItemIngredients.classList.add('menu-item-ingredients');
        menuItemIngredients.innerHTML = 
        'Arroz mexicano, frijoles pinquitos, guacamole, molcajete, cilantro y limón.' +
        'Con una opción de proteina: Carnitas, Pollo al Achiote, Hongos y Calabaza';
        menuItemContainer.appendChild(menuItemIngredients);
    }

    return {
        contentDiv
    }
})();

export {
    createMenuPage
}