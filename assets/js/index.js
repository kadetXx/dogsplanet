document.querySelector('#home header .menu').addEventListener('click', () => {
  document.querySelector('#home header .mobile_menu').classList.toggle('show');
})

document.querySelectorAll('#home header .mobile_menu ul a').forEach(menu => {
  menu.addEventListener('click', () => {
    document.querySelector('#home header .mobile_menu').classList.toggle('show');
  })
})