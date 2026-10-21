(function(){
  var key='mkt-theme';
  function apply(t){document.documentElement.setAttribute('data-theme',t);}
  var saved=null; try{saved=localStorage.getItem(key);}catch(e){}
  if(saved) apply(saved);
  else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) apply('dark');
})();
