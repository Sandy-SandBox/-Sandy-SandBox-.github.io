/****** Animation ********/
const hero = document.querySelector('.hero');
window.onload = ()=> {
    hero.classList.add('active');
}

/****** Navigation ******/
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-list-link');
const nav = document.querySelector('.nav');

navMenu.onclick = ()=> {
  toggle();
}
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = ()=> {
    toggle();
  }
}
/****** Function to toggle Nav ******/
function toggle() {
  nav.classList.toggle('nav-toggle');
  model.classList.remove('model-show');
}

/***** Sticky Header *****/
const header = document.querySelector('.header');
window.addEventListener('scroll',()=>{
  if(window.scrollY > 60) {
  header.classList.add('sticky-header');
}
else {
  header.classList.remove('sticky-header');
}
})

/***** Newsletter Close ******/
const model = document.querySelector('.model');
const modelCloseIcon = document.querySelector('.model-close-icon');
const modelCloseTxt = document.querySelector('.model-close-txt');
modelCloseIcon.onclick = ()=> {
  hideModel();
}
modelCloseTxt.onclick = (e)=> {
    e.preventDefault();
  hideModel();
}
setTimeout(function() {
  model.classList.add('model-show');
}, 10000);

/****** Function to hide Model ******/
function hideModel() {
  model.classList.remove('model-show');
}

/***** Show Success Massage *****/
const  bookBtn = document.querySelector('.book-btn');
const  bookModelHideBtn = document.querySelector('.booking-model-hide-btn');
const  bookingModel = document.querySelector('.booking-model-wrap');
bookBtn.onclick = (e)=> {
    e.preventDefault();
  showBookingModel();
  setTimeout(function() {
    bookingModel.classList.remove('active');
  }, 2500);
}
bookModelHideBtn.onclick = (e)=> {
    e.preventDefault();
  hideBookingModel();
}
function showBookingModel () {
  bookingModel.classList.add('active');
}
function hideBookingModel () {
  bookingModel.classList.remove('active');
}
