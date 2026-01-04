// Mobile nav toggle, set year, and smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function(){
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('main-nav');

  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // set current year
  const yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href === '#' || href === '#!') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        if(nav && nav.classList.contains('open')){
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded','false');
        }
      }
    });
  });
});