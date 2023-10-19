let mobileBtn = document.querySelector('.mobile-btn');
let mobileMenu = document.querySelector('.mobile-wrap');
let mobileDepth = document.querySelectorAll('.mobile-depth1');
// let mobileDepth2 = document.querySelectorAll('.mobile-depth2');

// console.log(mobileDepth1);
// console.log(mobileDepth2);

mobileBtn.addEventListener("click", function() {
mobileMenu.classList.toggle("on");
  mobileBtn.classList.toggle("on");
})

Array.from(mobileDepth).forEach((eachDepth, index) => {
  eachDepth.addEventListener('click', function() {
      mobileDepth[index].classList.toggle("open");
  });
});