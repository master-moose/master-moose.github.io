const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches
const storedTheme=localStorage.getItem('theme')
if(storedTheme==='dark'||(prefersDark&&storedTheme!=='light')){document.documentElement.classList.add('dark')}
const btn=document.getElementById('theme-toggle')
if(btn){btn.addEventListener('click',()=>{const dark=document.documentElement.classList.toggle('dark');localStorage.setItem('theme',dark?'dark':'light')})}
document.getElementById('year').textContent=new Date().getFullYear();
async function loadProjects(){
  try{
    const res=await fetch('https://api.github.com/users/master-moose/repos?per_page=6&sort=updated',{
      headers:{Accept:'application/vnd.github+json'}
    });
    if(!res.ok) return;
    const repos=await res.json();
    const grid=document.getElementById('projects-grid');
    if(!grid) return;
    repos.forEach(r=>{
      const card=document.createElement('article');
      card.className='project-card';
      card.innerHTML=`<h3>${r.name}</h3><p>${r.description || ''}</p><a class='btn secondary' href='${r.html_url}' target='_blank' rel='noopener'>View Repo</a>`;
      grid.appendChild(card);
    });
  }catch(err){console.error(err);}
}
loadProjects(); 