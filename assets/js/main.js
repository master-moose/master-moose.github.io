const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches
const storedTheme=localStorage.getItem('theme')
if(storedTheme==='dark'||(prefersDark&&storedTheme!=='light')){document.documentElement.classList.add('dark')}
const btn=document.getElementById('theme-toggle')
if(btn){btn.addEventListener('click',()=>{const dark=document.documentElement.classList.toggle('dark');localStorage.setItem('theme',dark?'dark':'light')})}
document.getElementById('year').textContent=new Date().getFullYear() 