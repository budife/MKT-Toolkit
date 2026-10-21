(function(){
  var key='mkt-theme';
  function apply(t){document.documentElement.setAttribute('data-theme',t);}
  var saved=null; try{saved=localStorage.getItem(key);}catch(e){}
  if(saved) apply(saved);
  else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) apply('dark');
  window.addEventListener('DOMContentLoaded',function(){
    var btn=document.createElement('button');
    btn.type='button';
    btn.setAttribute('aria-label','Toggle dark mode');
    btn.style.cssText='position:fixed;right:16px;bottom:16px;z-index:9999;width:44px;height:44px;border-radius:50%;border:1px solid var(--line,#dce3e8);background:var(--surface,#fff);color:var(--ink,#17212b);font-size:18px;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.15)';
    function sync(){btn.textContent=document.documentElement.getAttribute('data-theme')==='dark'?'☀️':'🌙';}
    sync();
    btn.addEventListener('click',function(){
      var cur=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
      try{localStorage.setItem(key,cur);}catch(e){}
      apply(cur); sync();
    });
    document.body.appendChild(btn);
  });
})();
