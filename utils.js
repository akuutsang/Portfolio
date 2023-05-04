const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();
  if (currentHour > 12) {
    currentHour -= 12;
  }
  hour.textContent = currentHour.toString();
  minute.textContent = currentMinute.toString().padStart(2, '0');
  second.textContent = currentSecond.toString();
};
setInterval(updateTime, 1000);

const data = [
  {
    name: 'Paper Rock Scissors',
    link: 'https://github.com/akuutsang/Project-Rock-Paper-Scissors',
    image: 'assets/Paper-Rock-Scissors.JPG',
  },
  {
    name: 'Calculator',
    link: 'https://github.com/akuutsang/Calculator',
    image: 'assets/Calculator.JPG',
  },
  {
    name: 'Etch-A-Sketch',
    link: 'https://github.com/akuutsang/Etch-A-Sketch',
    image: 'assets/Etch-A-Sketch.JPG',
  },
  {
    name: 'Landing-Page',
    link: 'https://github.com/akuutsang/Landing-page',
    image: 'assets/Landing-Page.jpg',

  },
];
function card() {
  data.forEach((element, i) => {
    const projects = document.querySelector('.projects');
    const box = document.createElement('div');
    box.classList = 'boxes';
    const boxItem = `
            <img class="pro-image" src="${data[i].image}" alt="">
            <div class="description">
                <h3>${data[i].name}</h3>
                <a href="${data[i].link}">readmore</a>    
            </div>
      `;
    box.innerHTML += boxItem;
    projects.appendChild(box);
  });
}
// scard();

export { updateTime, card };
