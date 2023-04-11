const hambergerMenuOpen = document.querySelector('.box');

const menu = document.querySelector('.menuBar');

const menuLinks = document.querySelectorAll('.menuLinks');

const closeMenu = document.querySelector('.closeMenu');

const htmlMobileWorks = document.querySelector('.mobileWorks');

const mobileDynamic = document.createElement('div');

const cardDetails = [
  { name: 'Professional Art Printing Data' },
  { description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industrys standard.' },
  { technologies: ['HTML', 'Boostrap', 'Ruby'] },
  { featuredImage: 'img/background.png' },
];

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    menu.style.display = 'none';
    e.stopPropagation();
  });
});

hambergerMenuOpen.addEventListener('click', (e) => {
  menu.style.display = 'block';
  e.stopPropagation();
});

closeMenu.addEventListener('click', (e) => {
  menu.style.display = 'none';
  e.stopPropagation();
});

htmlMobileWorks.appendChild(mobileDynamic);
mobileDynamic.innerHTML = "<main id='about' class='works'><main class='btw'><section class='section1 box'>  <header class='works_image'><header><h1>My Recent Works</h1></header><hr  class='horizontal_rule'/><div class='recent_works_image'><img src='img/myWorks.png' alt='image' /></div></header><main><h1>Multi-Post Stories</h1><p>A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a standard dummy text.</p></main><section><ul><li><button class='ul_li'>CSS</button></li><li><button class='ul_li'>HTML</button></li><li><button class='ul_li'>BOOTSTRAP</button></li><li><button class='ul_li'>RUBY</button></li></ul></section><footer><button class='section1_button pop_btn'>See Project</div></button></footer></section></main></main>";

for (let i = 0; i < 6; i += 1) {
  mobileDynamic.innerHTML += ` <section class="section2 box background">
  <section class="background_wrapper" style="background-image: url(${cardDetails[3].featuredImage})">
      <main>
          <h1>
            ${cardDetails[0].name}
          </h1>
          <p>
            ${cardDetails[1].description}
          </p>
        </main>
        <section>
          <ul>
            <li>
              <button class="ul_li">${cardDetails[2].technologies[0]}</button>
            </li>
            <li>
              <button class="ul_li">${cardDetails[2].technologies[1]}</button>
            </li>
            <li>
              <button class="ul_li">${cardDetails[2].technologies[2]}</button>
            </li>
          </ul>
        </section>
        <footer>
          <button class="project pop_btn">See Project</button>
        </footer>
  </section>
          </section>
         `;
}

const popupMobile = document.querySelector('.popupMobile');

const popBtn = document.querySelectorAll('.pop_btn');

const popClose = document.querySelector('.popX');

popBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupMobile.style.display = 'block';
    window.scrollTo(0, 0);
  });
});

popClose.addEventListener('click', () => {
  popupMobile.style.display = 'none';
});