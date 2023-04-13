const hambergerMenuOpen = document.querySelector('.box');

const menu = document.querySelector('.menuBar');

const menuLinks = document.querySelectorAll('.menuLinks');

const closeMenu = document.querySelector('.closeMenu');

const htmlMobileWorks = document.querySelector('.mobileWorks');

const mobileDynamic = document.createElement('div');

const formValidation = document.querySelector('form');

const error = document.querySelector('.submitErrorMessage');

const cardDetailsMobile = [
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
  <section class="background_wrapper" style="background-image: url(${cardDetailsMobile[3].featuredImage})">
      <main>
          <h1>
            ${cardDetailsMobile[0].name}
          </h1>
          <p>
            ${cardDetailsMobile[1].description}
          </p>
        </main>
        <section>
          <ul>
            <li>
              <button class="ul_li">${cardDetailsMobile[2].technologies[0]}</button>
            </li>
            <li>
              <button class="ul_li">${cardDetailsMobile[2].technologies[1]}</button>
            </li>
            <li>
              <button class="ul_li">${cardDetailsMobile[2].technologies[2]}</button>
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

const dataPoped = document.querySelector('.body');

popupMobile.innerHTML = `<div class="popUpData">
<header>
  <p class="popH1">Multi Post Stories</p>
  <span class="popX">&times;</span>
</header>
<section>
  <ul class="popList">
    <li>HTML</li>
    <li>Bootsrap</li>
    <li>Ruby on Rails</li>
  </ul>
  <div class="popImage">
    <img src="img/popup.png" alt="10 years">
  </div>
  <div class="popPara">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent</p>
  </div>

  <div class="popLinks"><button><a href="">See live</a><span><img src="img/seeLive.png" alt=""></span></button>
    <button><a href="">See source</a><span><img src="./img/gitLive.png" alt=""></span></button>

  </div>
</section>
</div>`;

popBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    popupMobile.style.display = 'block';
    window.scrollTo(0, 0);
    dataPoped.style.overflow = 'hidden';
    e.stopPropagation();
  });
});

const popClose = document.querySelector('.popX');

popClose.addEventListener('click', (e) => {
  popupMobile.style.display = 'none';
  dataPoped.style.overflow = 'visible';
  e.stopPropagation();
});

// desktop version
const htmlDesktopWorks = document.querySelector('.desktopWorks');

const cardDetailsDesktop = [
  { name: ['Data Dashboard Healthcare', 'Professional Art Printing Data More', 'Website Portfolio', 'Professional Art Printing Data More', 'Datadashboard Healthcare', 'Website Portfolio'] },
  { description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard." },
  { technologies: ['HTML', 'Bootstrap', 'Ruby'] },
];

const desktopDynamic = document.createElement('div');

htmlDesktopWorks.appendChild(desktopDynamic);

desktopDynamic.innerHTML = "<section class='desktop_works'><div class='box1 first_work'><div class='first_card'><h1>My Recent Works</h1><span></span></div><div class='first_card_bottom'> <div class='first_card_image'><img src='./img/myWorks.png' alt=''></div> <div class='first_card_details'><h1>Multi-Post Stories</h1><p>A daily selection of privately personalized reads; no accounts or sign-ups required. This has been theindustry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.</p><ul><li>CSS</li><li>HTML</li><li>Bootstrap</li><li>Ruby</li></ul><button class='pop_btnDesktop'>See project</button></div> </div></div></section>";

const desktopWorksDynamic = document.querySelector('.desktop_works');

for (let i = 0; i < cardDetailsDesktop[0].name.length; i += 1) {
  desktopWorksDynamic.innerHTML += `<div class="card_project2 box2 data">
  <div class='card_project box1 professional2'><button class='pop_btnDesktop'>See project</button></div>
  
  <h1>${cardDetailsDesktop[0].name[i]}</h1>
  <p>${cardDetailsDesktop[1].description}</p>
  <ul>
    <li>${cardDetailsDesktop[2].technologies[0]}</li>
    <li>${cardDetailsDesktop[2].technologies[1]}</li>
    <li>${cardDetailsDesktop[2].technologies[2]}</li>
  </ul>
</div>`;
}

const popupDesktop = document.querySelector('.popupDesktop');

const popBtnDesktop = document.querySelectorAll('.pop_btnDesktop');

popupDesktop.innerHTML = `<div class="popupDesktopContent">
<div class="title"><span>Keeping track of hundreds of components website</span>
  <span class="popXDesktop">&times;</span>
</div>
<ul>
  <li>HTML</li>
  <li>Bootstrap</li>
  <li>Ruby on rails</li>
</ul>
<div class="deskContent">
  <div class="imageDiv"><img src="./img/popup.png" alt=""></div>
  <div class="contentDiv">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s.
      <br>
      <br>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
      scrambled it 1960s with the releax map lapora verita.
    </p>
    <div class="buttons">
      <button><span>See live</span><span><img src="./img/seeLive.png" alt=""></span></button>
      <button><span>See source</span><span><img src="./img/gitLive.png" alt=""></span></button>
    </div>
  </div>
</div>
</div>`;

popBtnDesktop.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    popupDesktop.classList.add('popupDesktopt');
    window.scrollTo(0, 0);
    dataPoped.style.overflow = 'hidden';
    e.stopPropagation();
  });
});

const popCloseDesktop = document.querySelector('.popXDesktop');

popCloseDesktop.addEventListener('click', (e) => {
  popupDesktop.classList.remove('popupDesktopt');
  dataPoped.style.overflow = 'visible';
  e.stopPropagation();
});

formValidation.addEventListener('submit', (e) => {
  if (formValidation.email.value !== formValidation.email.value.toLowerCase()) {
    error.textContent = 'email should be in lower e.g mata@gmail.com';
    e.preventDefault();
  }
  return true;
});

//start of local storage functionality;