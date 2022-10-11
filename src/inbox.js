function loadInbox() {
    const container = document.querySelector('.container');
    const mainHeader = document.createElement('p');
    mainHeader.textContent = "Inbox";
    mainHeader.classList.add('main-header');
    container.append(mainHeader);
}

export {loadInbox};