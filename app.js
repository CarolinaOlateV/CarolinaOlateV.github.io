document.getElementById('ability').addEventListener('click', (evento) =>{
    
    document.getElementById('about-me').style.display='none';
    document.getElementById('projects').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById('skills').style.display='block';

})
document.getElementById('scheme').addEventListener('click', (evento) =>{
  
  document.getElementById('about-me').style.display='none';
  document.getElementById('skills').style.display='none';
  document.getElementById('contact').style.display='none'
  document.getElementById('projects').style.display='block';

})
document.getElementById('contact-me').addEventListener('click', (evento) =>{
  
  document.getElementById('about-me').style.display='none';
  document.getElementById('skills').style.display='none';
  document.getElementById('projects').style.display='none'
  document.getElementById('contact').style.display='block';

})

