window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrolled > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });



  const dropdownToggle = document.querySelector('.nav-item.dropdown .dropdown');
  const dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');
  let isDropdownVisible = false;
  dropdownToggle.addEventListener('click', function(e) {

    if (window.innerWidth <992){
    if (isDropdownVisible) {
      dropdownMenu.classList.remove('show');
      isDropdownVisible = false;
    } else {
      dropdownMenu.classList.add('show');
      isDropdownVisible = true;
    }

  }else {
    e.stopPropagation(); 
  return;
  }
  });



