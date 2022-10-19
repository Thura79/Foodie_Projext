import './style.scss';
import * as bootstrap from 'bootstrap';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints';


// Can also be included with a regular script tag
import Typed from 'typed.js';

let options = {
  strings: ['Food ...', 'Drink ...'],
  typeSpeed: 40,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
};

let typed = new Typed('.element', options);


let toDown = {
  distance: '150px',
  origin: 'top',
  // opacity: true,
  interval: 1000,
  duration: 600
};

ScrollReveal().reveal('.to-down', toDown);


let toRight = {
  distance: '150px',
  origin: 'left',
  // opacity: true,
  interval: 1000,
  duration: 600
};

ScrollReveal().reveal('.to-right', toRight);


let toLeft = {
  distance: '150px',
  origin: 'right',
  // opacity: true,
  interval: 1000,
  duration: 600
};

ScrollReveal().reveal('.to-left', toLeft);



new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
    let oldNavLink = document.querySelector('.nav-link.active');
    if(oldNavLink != null){
    oldNavLink.classList.remove('active');
    }
    let currentNavLink = document.querySelector(`[href='#home']`);
    currentNavLink.classList.add('active');


  },
  offset: "0%" 
})


let settles = ['about', 'services', 'menus', 'contact'];

settles.forEach(function(settle){
  new Waypoint({
    element: document.getElementById(settle),
    handler: function(direction) {
      let oldNavLink = document.querySelector('.nav-link.active');
      let currentNavLink = document.querySelector(`[href='#${settle}']`);
      oldNavLink.classList.remove('active');
      currentNavLink.classList.add('active');
  
  
    },
    offset: "10%" 
  })
})



let menusLists = [
  {
    id: 1,
    img: './img/plate1.png',
    title: 'Barbecue Slade',
    description: 'Special Delicious Dish',
    price: 22.2,
    currency: '$'
  },


  {
    id: 2,
    img: './img/plate2.png',
    title: 'Salad with fish',
    description: 'Special Delicious Dish',
    price: 30.4,
    currency: '$'
  },


  {
    id: 1,
    img: './img/plate3.png',
    title: 'Spinch Salad',
    description: 'Special Delicious Dish',
    price: 50,
    currency: '$'
  }
];


let menuRow = document.getElementById('menuRow');

menusLists.forEach(function(menuList){
  let div = document.createElement('div');
  div.classList.add('col-8','col-md-4',  'col-lg-2');
  div.innerHTML = `
  <div class="card mb-5 mb-md-0">
  <img src="${menuList.img}" class=" w-75 mx-auto my-3 d-block" alt="">
  <div class="card-body">
    <h6 class=" fw-bold">${menuList.title}</h6>
    <p class=" text-black-50">
      ${menuList.description}
    </p>

    <div class=" d-flex justify-content-between align-items-center">
      <p class=" mb-0">${menuList.currency} ${menuList.price}</p>
      <button class=" btn btn-primary">
        <i class="bi bi-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
  
  `;


  menuRow.append(div);
})