let sidebar = document.querySelector('#sidebar');
let navBtn = document.querySelector('#navBtn');
let navBtn_icon = document.querySelector('#nav_open_icon');
const body = document.querySelector('body');

function activate_nav() {
    body.style.overflow = 'hidden';
    
    if (sidebar.style.display == 'none') {
        
        sidebar.style.display = 'grid';
        
    } else {
        sidebar.style.transition = '600ms all ease';
        sidebar.style.display = 'none';
        navBtn_icon.className = 'fas fa-bars';
    }
};


function disable_nav() {
    if (sidebar.style.display == 'grid' && body.style.overflow == 'hidden') {
        sidebar.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        sidebar.style.display = 'grid';

    }
};