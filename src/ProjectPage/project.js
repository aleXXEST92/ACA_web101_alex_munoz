const projectsList = [
  {
    name: 'My Portfolio',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=1',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/Portfolio/portfolio.html" class="btn btn-primary">Check It Out</a>'
  },
  {
    name: 'CSS Grid',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=2',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/coupons/coupons.html" class="btn btn-primary">Check It Out</a>'
  },
  {
    name: 'NASA Flexbox',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=3',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/nasa/nasa.html" class="btn btn-primary">Check It Out</a>'
  },
  {
    name: 'My First Dashboard',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=4',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/dashboard/dashboard.html" class="btn btn-primary">Check It Out</a>'
  },
  {
    name: 'Salon',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=5',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/hair/hair.html" class="btn btn-primary">Check It Out</a>'
  },
  {
    name: 'The SNO-Lot',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=6',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz//src/TheSNO-Lot/snolot.html" class="btn btn-primary">Check It Out</a>'

  },
  {
    name: '.Animations',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=7',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/src/Transistions/transition.html" class="btn btn-primary">Check It Out</a>'

  },
  {
    name: 'Tic-Tac-Toe',
    desc: 'a lil description of something here',
    url: 'https://picsum.photos/200?random=8',
    tags: '#css, #html, #boostrap',
    button:'<a href="https://alexxest92.github.io/ACA_web101_Alex_Munoz/JavaScript/Tic-Tac-Toe/index.html" class="btn btn-primary">Check It Out</a>'

  },
]
  let rowDiv = document.querySelector('.row')
  console.log('rowDiv')

  projectsList.forEach(project => {
    console.log('project', project)
    let cardTemplate = `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${project.url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${project.name}</h5>
      <p class="card-text">${project.desc}</p>
      <p class='card-text'>${project.tags}</p>
      <a href='card-button'>${project.button}</a>
    </div>
  </div>`
    rowDiv.insertAdjacentHTML('beforeend', cardTemplate)
    
  });
  
