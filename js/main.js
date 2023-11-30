const xhr = new XMLHttpRequest();
xhr.open("GET", "../json/menusec.json");
xhr.send();
let menuSwiperAll = document.querySelector('.menu-swiper-all');
let tabButtons = document.querySelectorAll('.category .tabButton');

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let tabMenus = JSON.parse(xhr.responseText);
    for (const tabMenu of tabMenus) {
      let menuSwiper = document.createElement("div");
      menuSwiper.classList.add("swiper");
      menuSwiper.classList.add("menu-swiper");
      menuSwiperAll.prepend(menuSwiper);

      let swiperWrap = document.createElement("div");
      swiperWrap.classList.add("swiper-wrapper");
      menuSwiper.appendChild(swiperWrap);

      for (const menu of tabMenu.menu) {

        let swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperWrap.appendChild(swiperSlide);

        let menuBox = document.createElement("div");
        menuBox.classList.add("menu-box");
        swiperSlide.appendChild(menuBox);

        let aLink = document.createElement("a");
        aLink.href = "./sub/sub2-1.html";
        menuBox.appendChild(aLink);

        aLink.innerHTML = `
        <figure class="menu-box-img"><img src="${menu.img}" alt=""></figure>
        <div class="menu-box-txt">
          <h4>${menu.name}</h4>
          <span>${menu.engName}</span>
          <p>${menu.desc}</p>
        </div>
        `;
      }
    }
    Array.from(tabButtons).forEach((eachButton, index) => {
      let tabBoxs = document.querySelectorAll('.menu-swiper'); // 탭박스 선언
      eachButton.addEventListener('click', function () {
        // console.log(tabBoxs[1]);
        for (const tabBox of tabBoxs) { tabBox.classList.remove("on"); }
        for (const tabButton of tabButtons) { tabButton.classList.remove("on"); }
        // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
        tabBoxs[index].classList.add("on");
        this.classList.add("on");
      });
    });
    var swiper = new Swiper(".menu-swiper", {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        // 브라우저 320px 크기일 경우
        320: { slidesPerView: 1, spaceBetween: 0, },
        // 브라우저 480px 크기일 경우
        768: { slidesPerView: 2, spaceBetween: 40, },
        // 브라우저 640px 크기일 경우
        1200: { slidesPerView: 2.5, spaceBetween: 30, },
      },
    });

  };
  tabButtons[0].click();
};

