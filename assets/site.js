(function(){
  var header=document.getElementById('site-header'),btn=document.getElementById('nav-toggle');
  if(!header||!btn)return;
  var mq=window.matchMedia('(max-width: 900px)');
  function setOpen(open){
    header.classList.toggle('menu-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.setAttribute('aria-label',open?'Close menu':'Open menu');
    btn.textContent=open?'✕':'☰';
    document.documentElement.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',function(){setOpen(!header.classList.contains('menu-open'));});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
  mq.addEventListener('change',function(){setOpen(false);});
})();
