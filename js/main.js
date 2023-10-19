let tabButtons = document.querySelectorAll('.tabButton');
// console.log(tabButton);

Array.from(tabButtons).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function() {
      let tabBoxs = document.querySelectorAll('.menu-swiper'); // 탭박스 선언
      for (var i = 0; i < tabBoxs.length; i++) {
          tabBoxs[i].classList.remove("on");
          tabButtons[i].classList.remove("on");
          // 모든 버튼과 박스에서 on제거
      }
      tabBoxs[index].classList.add("on");
      // // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
      this.classList.add("on");
  });
  // eachButton.addEventListener("mouseover", function(){
  //   tabButtons[index].classList.add("on");
  // });
  // eachButton.addEventListener("mouseout", function(){
  //   tabButtons[index].classList.remove("on");
  // })
});
tabButtons[0].click();