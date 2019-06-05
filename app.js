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

new Vue({
    el: '#example',
    data: {
      slides: 7
    },
    methods: {
      onAfterSlideChange(index) {
        console.log('@onAfterSlideChange Callback Triggered', 'Slide Index ' + index)
      },
      onBeforeSlideChange(index) {
        console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
      },
      onLastSlide(index) {
        console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
      }
    },
    components: {
      'carousel-3d': Carousel3d.Carousel3d,
      'slide': Carousel3d.Slide
    }
  })
  