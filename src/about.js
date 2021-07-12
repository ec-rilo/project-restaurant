import mainBackgroundImage from '../dist/images/tacos-dark.jpg'

let createAboutPage = (() => {

    const contentDiv = document.getElementById('about-page');

    // Create about page content

    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('about-background');

    contentDiv.appendChild(backgroundContainer);

    const textContainer = document.createElement('div');
    textContainer.classList.add('about-text-container');
    backgroundContainer.appendChild(textContainer);

    const title = document.createElement('p');
    title.classList.add('about-text', 'about-title');
    title.innerHTML = 'About Us';
    textContainer.appendChild(title);

    const titleUnderline = document.createElement('div');
    titleUnderline.classList.add('title-underline');
    textContainer.appendChild(titleUnderline);

    const subTitle = document.createElement('p');
    subTitle.classList.add('about-text', 'about-subtitle');
    subTitle.innerHTML = 'Food, Art, and more!';
    textContainer.appendChild(subTitle);

    const para1 = document.createElement('p');
    para1.classList.add('about-text', 'about-content-text');
    para1.innerHTML = 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    textContainer.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add('about-text', 'about-content-text');
    para2.innerHTML = 
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt' +
    'mollit anim id est laborum.';
    textContainer.appendChild(para2);

    const para3 = document.createElement('p');
    para3.classList.add('about-text', 'about-content-text');
    para3.innerHTML =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    textContainer.appendChild(para3);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('about-background-img');
    contentDiv.appendChild(imgContainer);

    const backgroundImg = document.createElement('img');
    backgroundImg.classList.add('about-img');
    backgroundImg.setAttribute('src', '../dist/images/tacos.jpg');
    backgroundImg.setAttribute('alt', 'Street Tacos');
    imgContainer.appendChild(backgroundImg)

    return {
        contentDiv
    }
})();

export {
    createAboutPage
}