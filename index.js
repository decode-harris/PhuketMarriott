const btn_nav = document.querySelector('.btn_nav');
const body = document.querySelector('.body');
const header = document.querySelector('.header');
let nav = document.querySelector('.nav');

btn_nav.addEventListener('click', ()=>{
    body.style.position = 'relative';
    // nav modal props
    let nav_modal = document.createElement('section');
    nav_modal.style.position = 'absolute';
    nav_modal.style.top = '0';
    nav_modal.style.left = '0';
    nav_modal.style.height = '100%';
    nav_modal.style.width = '100%';
    nav_modal.style.background = 'rgba(0,0,0,0.9)';
    nav_modal.style.zIndex = '100';
    
    // nav props
    if (nav.style.display == 'none') {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.justifyContent = 'center';
        nav.style.alignItems = 'center';

        nav.style.height = '100vh';
        nav.style.maxHeight = '100vh';
        nav.style.width = '100vw';
        nav.style.maxWidth = '100vw';


        nav.style.color = '#FFF';
        nav.style.border = '4px solid red';

        nav.style.position = 'relative';

        let btn_close = document.createElement('button');
        btn_close.innerHTML = 'X';
        btn_close.style.position = 'absolute';
        btn_close.style.top = '5px';
        btn_close.style.right = '5px';
        btn_close.style.height = '30px';
        btn_close.style.width = '55px';
        btn_close.style.background = 'red';

        btn_close.addEventListener('click', ()=>{
            if (nav.style.display == 'flex') {
                nav.style.display = 'none';
                nav_modal.style.display = 'none';
            } else {
                nav.style.display = 'flex';
            }
        });

        nav.appendChild(btn_close);

    } else {
        nav.style.display = 'none';
    }
    nav_modal.appendChild(nav);
    body.appendChild(nav_modal);

});
   
    



