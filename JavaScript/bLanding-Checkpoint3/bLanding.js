console.log("design")
const projectsList = [
  {
    name: 'Vincent Quitta Carney',
    desc: 'gitHub: @vincentnqc',
    url: 'https://picsum.photos/200?random=5',
    tags: 'Web Application Developer',
  },
  {
    name: 'John Obertubbesing',
    desc: 'gitHub: @oberthewhat',
    url: 'https://picsum.photos/200?random=6',
    tags: 'Full Stack Web Developer',
  },
  {
    name: 'David Bille',
    desc: 'gitHub: @DavidAndreww',
    url: 'https://picsum.photos/200?random=7',
    tags: 'UX | UI Design',
  },
  {
    name: 'Amber Styers',
    desc: 'gitHub: @amberstyers',
    url: 'https://picsum.photos/200?random=8',
    tags: 'Front-End Developer',
  },
]
  let rowDiv = document.querySelector('.row')
  console.log('rowDiv')

  projectsList.forEach(project => {
    console.log('project', project)
    let cardTemplate = `<div class="card text-center" style="width: 20rem;">

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