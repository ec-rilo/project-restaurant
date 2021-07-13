'use strict';

let createContactPage = (() => {
    const contentDiv = document.getElementById('contact-page');

    // Left Container Information

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('contact-main-container');
    contentDiv.appendChild(mainContainer);

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('contact-container-left');
    mainContainer.appendChild(leftContainer);

    const leftTextContainer = document.createElement('div');
    leftTextContainer.classList.add('contact-text-container');
    leftContainer.appendChild(leftTextContainer);

    const title = document.createElement('p');
    title.classList.add('title');
    title.innerHTML = 'Contact';
    leftTextContainer.appendChild(title);

    const telephoneNum = document.createElement('p');
    telephoneNum.classList.add('medium-text', 'contact-pg-tel');
    telephoneNum.innerHTML = '123-456-7890';
    leftTextContainer.appendChild(telephoneNum);

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('contact-info-container');
    leftTextContainer.appendChild(infoContainer);

    const addressInfo = document.createElement('p');
    addressInfo.classList.add('medium-text');
    addressInfo.innerHTML = "699 Renner Dr.</br> Arcata, CA</br> 95518";
    infoContainer.appendChild(addressInfo);

    // Right Container Information

    const rightContainer = document.createElement('div');
    rightContainer.classList.add('contact-container-right');
    mainContainer.appendChild(rightContainer);

    const rightTextContainer = document.createElement('div');
    rightTextContainer.classList.add('contact-message-container');
    rightContainer.appendChild(rightTextContainer);

    const emailInfo = document.createElement('p');
    emailInfo.classList.add('small-title');
    emailInfo.innerHTML = 'contact@lamexicana.com';
    rightTextContainer.appendChild(emailInfo);

    const rightContainerSubtitle = document.createElement('p');
    rightContainerSubtitle.classList.add('small-title', 'contact-info');
    rightContainerSubtitle.innerHTML = 'Message us, we\'d love to hear from you!';
    rightTextContainer.appendChild(rightContainerSubtitle);

    const formContainer = document.createElement('form');
    formContainer.setAttribute('autocomplete', 'off');
    formContainer.setAttribute('action', '#');
    formContainer.classList.add('contact-form-container');
    rightTextContainer.appendChild(formContainer);

    // Form Content
    
    // Item 1
    const formNameContainer = document.createElement('div');
    formNameContainer.classList.add('form-name', 'contact-input-container-smll');
    formContainer.appendChild(formNameContainer);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'fname');
    formNameContainer.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.classList.add('form-control', 'form-sizing-smll');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'fname');
    nameInput.setAttribute('name', 'fullName');
    nameInput.setAttribute('placeholder', 'Name *');
    nameInput.setAttribute('required', '');
    formNameContainer.appendChild(nameInput);


    // Item 2
    const formEmailContainer = document.createElement('div');
    formEmailContainer.classList.add('form-email', 'contact-input-container-smll');
    formContainer.appendChild(formEmailContainer);

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'email');
    formEmailContainer.appendChild(emailLabel);

    const emailInput = document.createElement('input');
    emailInput.classList.add('form-control', 'form-sizing-smll');
    emailInput.setAttribute('type', 'text');
    emailInput.setAttribute('id', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.setAttribute('placeholder', 'Email *');
    emailInput.setAttribute('required', '');
    formEmailContainer.appendChild(emailInput);

    // Item 3
    const formSubjectContainer = document.createElement('div');
    formSubjectContainer.classList.add('form-subject', 'contact-input-container-lrge');
    formContainer.appendChild(formSubjectContainer);

    const subjectLabel = document.createElement('label');
    subjectLabel.setAttribute('for', 'subject');
    formSubjectContainer.appendChild(subjectLabel);

    const subjectInput = document.createElement('input');
    subjectInput.classList.add('form-control', 'form-sizing-smll');
    subjectInput.setAttribute('type', 'text');
    subjectInput.setAttribute('id', 'email');
    subjectInput.setAttribute('name', 'subject');
    subjectInput.setAttribute('placeholder', 'Subject *');
    subjectInput.setAttribute('required', '');
    formSubjectContainer.appendChild(subjectInput);

    // Item 4

    const formMessageContainer = document.createElement('div');
    formMessageContainer.classList.add('form-message', 'contact-input-container-xlrge');
    formContainer.appendChild(formMessageContainer);

    const messageLabel = document.createElement('label');
    messageLabel.setAttribute('for', 'message');
    formMessageContainer.appendChild(messageLabel);

    const messageInput = document.createElement('input');
    messageInput.classList.add('form-control', 'form-sizing-smll');
    messageInput.setAttribute('type', 'text');
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('name', 'message');
    messageInput.setAttribute('placeholder', 'Message');
    messageInput.setAttribute('required', '');
    formMessageContainer.appendChild(messageInput);

    // End of Items

    const submitBtn = document.createElement('input');
    submitBtn.classList.add('form-send');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Send');
    formContainer.appendChild(submitBtn);

    return {
        contentDiv
    }

})();

export {
    createContactPage
}