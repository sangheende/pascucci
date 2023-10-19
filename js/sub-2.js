
/* 선생님이 해주신 코드 */
// let menuList = document.querySelector(".menu-box");
// let arr_menuList = [];
// for (let i = 0; i < 15; i++) {
//   listLi = `
//   <li class="menu-list">
//     <figure class="list-img">
//       <img src="/img/sub02-01-img0${i + 1}.png" alt="">
//     </figure>
//   </li>`;
//   arr_menuList.push(listLi);

// }
// menuList.innerHTML = [...arr_menuList];


/**에쏘 1셋트는 완성
 * 만약 menu-box가 늘어난다면, 13번에서 설정했던 menuList를 querySelectorAll로 선언하여 노드리스트로 반환
 * 해당 노드리스트를 배열로 변환(for...of구문 돌려도 됨, 반복문 안에서 전개구문 .innerHTML해라라고 명령) 
 * 
 * 각 음료의 이미지 패턴과 타이틀을 객체로 만드어 놓고 참조하게끔 만들어볼것
 * 해당 객체가 2중 객체(객체안 객체 || 배열안 객체)면 좋겠다, 1차는 아이스, 에쏘, 핫이며 핫에 들어가서 각 디테일 메뉴구성
 */
const sec = document.querySelectorAll(".sec");
const italian = document.querySelector(".menu-italian");
const vari = document.querySelector(".menu-variation");
const brew = document.querySelector(".menu-brew");

const coffee = [
  {title:"Italian coffee",
    menu:[
      {
        name:"에스프레소",
        engName:"Espresso",
        desc:"말린 과일의 산미와 초콜릿의 단맛의 조화를 느낄 수 있는 이탈리안 정통 에스프레소",
        img:"../img/sub02-01-img01.jpg"
      },
      {
        name:"에스프레소 마끼야또",
        engName:"Macchiato",
        desc:"에스프레소 위에 벨벳 밀크폼을 혼합하여 진하면서도 부드러운 마우스필을 느낄 수 있는 커피",
        img:"../img/sub02-01-img02.jpg"
      },
      { name:"아포가또",
        engName:"Affogato",
        desc:"천일염으로 만든 젤라또에 에스프레소를 가미한 파스쿠찌 오리지날 아포가또",
        img:"../img/sub02-01-img03.jpg"
      },
    ]
  },
  {title:"Coffee Variation",
    menu:[
      { name:"카페 헤이 오트",
        engName:"Caffe Hazelnut Oat",
        desc:"골든색 원두와 헤이즐넛 향의 풍미가 식물성 귀리음료와 어우러져 달콤 고소한 파스쿠찌만의 시그니처 카페라떼",
        img:"../img/sub02-01-img04.jpg"
      },
      { name:"아메리카노",
        engName:"Americano",
        desc:"뜨거운물에 에스프레소를 희석, 한층 부드럽고 깊은 아로마를 느낄 수 있는 레귤러 커피",
        img:"../img/sub02-01-img05.jpg"
      },
      { name:"카페라떼",
        engName:"Cafe' Latte",
        desc:"에스프레소와 스팀우유를 혼합하여 우유의 고소함과 부드러운 마우스필을 함께 느낄 수 있는 마일드 커피",
        img:"../img/sub02-01-img06.jpg"
      },
      { name:"카푸치노",
        engName:"Cappuccinoo",
        desc:"에스프레소와 부드러운 벨벳 밀크폼을 혼합하여 커피와 우유거품의 절묘한 풍미를 느낄 수 있는 커피",
        img:"../img/sub02-01-img07.jpg"
      },
    ]
  },
  {title:"Cold Brew",
    menu:[
      { name:"콜드부르 아메리카노",
        engName:"Cold Brew Americano",
        desc:"원두 고유의 향을 고스란히 간직한 부드러운 콜드브루 커피",
        img:"../img/sub02-01-img08.jpg"
      },
      { coldLatte:"콜드부르 라떼",
        engName:"Cafe' Latte",
        desc:"입안을 가득 채우는 깊은 풍미와 부드러움, 콜드브루 라떼",
        img:"../img/sub02-01-img09.jpg"
      },
      { name:"연유 콜드브루 플로토",
        engName:"Milky Cold Brew Float",
        desc:"시원한 콜드브루에 달콤한 연유와 피오르디 젤라또를 띄워 더욱 달콤하고 부드럽게 즐기는 이탈리안 스타일의 커피 플로트",
        img:"../img/sub02-01-img010.jpg"
      },
      {
        name:"오트 콜드브루 플로토",
        engName:"Oat Cokd Brew Float",
        desc:"고소한 식물성 오트음료와 콜드브루 커피, 젤라또를 더하여 고급스럽게 즐기는 음료",
        img:"../img/sub02-01-img011.jpg"
      },
      { name:"콜드브루 원액",
        engName:"Cold Brew",
        desc:"파스쿠찌만의 시그니처 커피 원액을 한 병 가득, 집에서도 취향에 맞게 즐길 수 있는 커피원액 베이스",
      },
    ]
  },
]






// console.log(sec)
// vari.innerHTML = `<div class="sec-header"><h4 class="sec-tit">${coffee[length].title}</h4></div>`
