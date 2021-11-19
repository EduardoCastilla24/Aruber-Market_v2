
const toggle_menu = () =>{
    const menu = document.getElementById('Toggle-Menu');
    const close = document.getElementById('Btn-Close');
    const nav_links = document.getElementById('Nav-Links');

    menu.addEventListener('click', ()=>{
        nav_links.classList.toggle('active');
    });

    close.addEventListener('click', ()=>{
        nav_links.classList.toggle('active');
    });
}

toggle_menu();