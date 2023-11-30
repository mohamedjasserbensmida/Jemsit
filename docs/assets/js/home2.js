window.addEventListener('scroll', function () {
  var image1 = document.querySelector('#image1');
  var image2 = document.querySelector('#image2');
  var image3 = document.querySelector('#image3');
  var image4 = document.querySelector('#image4');


  var image1_1 = document.querySelector('#image1_1');
  var image2_2 = document.querySelector('#image2_2');
  var image3_3 = document.querySelector('#image3_3');
  var image4_4 = document.querySelector('#image4_4');

  var image1_0 = document.querySelector('#image1_0');
  var image2_0 = document.querySelector('#image2_0');
  var image3_0 = document.querySelector('#image3_0');

  revealOnScroll(image1);
  revealOnScroll(image2);
  revealOnScroll(image3);
  revealOnScroll(image4);

  revealOnScroll(image1_1);
  revealOnScroll(image2_2);
  revealOnScroll(image3_3);
  revealOnScroll(image4_4);

  revealOnScroll(image1_0);
  revealOnScroll(image2_0);
  revealOnScroll(image3_0);

});

function revealOnScroll(imageElement) {
  var rect = imageElement.getBoundingClientRect();
  var imagePosition = rect.top + window.pageYOffset;


  if (imagePosition < window.pageYOffset + window.innerHeight) {
    imageElement.classList.add('animate');
  }


  if ( (imagePosition + rect.height)+10  > window.pageYOffset + window.innerHeight) {
    imageElement.classList.remove('animate');
  }
}

ScrollReveal().reveal('.flip', {
  rotate: {
    x: 0,
    y: 500,
    z: 0
  },
  distance:'0',
  intervale:0,
  beforeReveal: function (el) {
    el.classList.add('show');
  }
});

