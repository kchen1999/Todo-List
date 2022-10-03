
function createHeader() {
    const header = document.createElement('div'); 
    header.classList.add('header'); 
    return header; 
}

function createMain() {
    const main = document.createElement('div'); 
    main.classList.add('main'); 
    const sideMenu = document.createElement('div'); 
    sideMenu.classList.add('sideMenu');
    const container = document.createElement('div');
    container.classList.add('container');  
    main.append(sideMenu);
    main.append(container);
    return main; 
}


function loadPage() {
    const content = document.getElementById('content'); 
    content.append(createHeader()); 
    content.append(createMain()); 
}

export default loadPage; 