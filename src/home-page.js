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

let createHomePage = (() => {
    'use strict';
    const contentDiv = document.getElementById('content');

    // Center content

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');
    contentDiv.appendChild(titleContainer);

    const mainLogo = imgLibrary.mainLogo;
    mainLogo.classList.add('logo-main');
    mainLogo.setAttribute('alt', 'A mexican restaurant logo');
    titleContainer.appendChild(mainLogo);

    const mainTitle = document.createElement('h1');
    mainTitle.classList.add('main-title');
    mainTitle.innerHTML = 'La Mexicana';
    titleContainer.appendChild(mainTitle);

    const titleDescription = document.createElement('p');
    titleDescription.innerHTML = 'Delicious Mexican food served in house or at home!';
    titleDescription.classList.add('title-description');
    titleContainer.appendChild(titleDescription);

    const mainImg = imgLibrary.mainBackgroundImg;
    mainImg.classList.add('home-background');
    contentDiv.appendChild(mainImg);

     
    const pageSeparation = document.createElement('div');
    pageSeparation.classList.add('white-line-break');
    contentDiv.appendChild(pageSeparation);

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-content-container');
    contentDiv.appendChild(footerContainer);

    const footerTitleContainer = document.createElement('div');
    footerTitleContainer.classList.add('title-content');
    footerContainer.appendChild(footerTitleContainer);

    const footerTitle = document.createElement('h4');
    footerTitle.classList.add('footer-title');
    footerTitle.innerHTML = 'La Mexicana';
    footerTitleContainer.appendChild(footerTitle);
    
    const footerTitleDescription = document.createElement('h5');
    footerTitleDescription.classList.add('footer-description');
    footerTitleDescription.innerHTML = 'Mexican Restaurant';
    footerTitleContainer.appendChild(footerTitleDescription);

    const socialMediaContainer = document.createElement('div');
    socialMediaContainer.classList.add('social-media-container');
    footerTitleContainer.appendChild(socialMediaContainer);

    const socialButton1 = document.createElement('a');
    socialButton1.setAttribute('href', '#')
    socialMediaContainer.appendChild(socialButton1);
    
    const socialButton1Img = imgLibrary.facebookIconFooter;
    socialButton1.appendChild(socialButton1Img);

    const socialButton2 = document.createElement('a');
    socialButton2.setAttribute('href', '#');
    socialMediaContainer.appendChild(socialButton2);

    const socialButton2Img = imgLibrary.instaIconFooter;
    socialButton2.appendChild(socialButton2Img);

    const footerWhiteLine = document.createElement('div');
    footerWhiteLine.classList.add('white-line');
    footerContainer.appendChild(footerWhiteLine);

    const hoursContainer = document.createElement('div');
    hoursContainer.classList.add('hours-container');
    footerContainer.appendChild(hoursContainer);

    const footerHoursTitle = document.createElement('h5');
    footerHoursTitle.innerHTML = 'Hours';
    footerHoursTitle.classList.add('footer-hours-title');
    hoursContainer.appendChild(footerHoursTitle);

    const footerStoreHours = document.createElement('p');
    footerStoreHours.innerHTML = 
    'Monday 11:30-9' + '</br>' +
    'Tuesday 11:30-9' + '</br>' +
    'Wednesday 11:30-9' + '</br>' +
    'Thursday 11:30-9' + '</br>' +
    'Friday 11:30-9' + '</br>' +
    'Saturday 11:30-9' + '</br>'+
    'Sunday 11:30-9' + '</br>';
    footerStoreHours.classList.add('footer-store-hours');
    hoursContainer.appendChild(footerStoreHours);

    const footerAddress = document.createElement('p');
    footerAddress.classList.add('footer-address');
    footerAddress.innerHTML =
    '699 Renner Dr. Arcata, CA' + '</br>' +
    'tel / 123-456-7890';
    hoursContainer.appendChild(footerAddress);

    const acknoFooter = document.createElement('div');
    acknoFooter.classList.add('ackno-footer');
    contentDiv.appendChild(acknoFooter);

    const copyright = document.createElement('p');
    copyright.innerHTML = '© 2021 Mockup Restaurant';
    acknoFooter.appendChild(copyright);

    const websiteCredits = document.createElement('p');
    websiteCredits.innerHTML = 'Website: Edgar Carrillo';
    acknoFooter.appendChild(websiteCredits);

    return {
        contentDiv
    }
})();

export {
    createHomePage
}