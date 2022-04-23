/* // now CSS stylesheet with id "#common-css" will be loaded and styles applied
document.querySelector("#item-css").removeAttribute('disabled');

// alternate
document.querySelector("#item-css").setAttribute('disabled', false);
 */
//Nav Modal Interaction
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

if (width < 1024) {
  const navToggle = document.querySelectorAll('#nav-toggle');

  navToggle.forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('show');
    });
  });
} else if (width === undefined) {
  const navToggle = document.querySelectorAll('#nav-toggle');

  navToggle.forEach(e => {
    e.addEventListener('click', () => {
      document.querySelector('.nav').classList.toggle('show');
    });
  }); 
}

//Cart Modal Interaction

const cartToggle = document.querySelector('.nav-button-cart');

cartToggle.addEventListener('click', () => {
  document.querySelector('.nav').style.display = 'block';
});

//Item amount
const itemAmount = document.querySelector('.item-button-amount-value');
const decrementAmount = document.querySelector('.item-button-amount-decrease');
const incrementAmount = document.querySelector('.item-button-amount-increase');
var amount = 1;

incrementAmount.addEventListener('click', () => {
  amount++;
  itemAmount.value = amount;
});

decrementAmount.addEventListener('click', () => {
  if (itemAmount.value > 1) {
    amount--;
    itemAmount.value = amount;
  }
  
});

//Carouselle Interaction
const mainIllustration = document.querySelector(".item-illustration-main");
var illustrationNumber = 1;

if (width < 1024) {
  var position = 1;
  const next = document.querySelector('#item-container-slider-prev');
  const prev = document.querySelector('#item-container-slider-next');
  next.addEventListener('click', e => {
    if (position < 3) {
      position++;
      const url = `url(../images/image-product-${position}.jpg)`;
      mainIllustration.style.backgroundImage = url;
    } else {
      position = 1;
      const url = `url(../images/image-product-${position}.jpg)`;
      mainIllustration.style.backgroundImage = url;
    }
  });
  prev.addEventListener('click', e => {
    if (position > 1) {
      position--;
      const url = `url(../images/image-product-${position}.jpg)`;
      mainIllustration.style.backgroundImage = url;
    } else {
      position = 4;
            const url = `url(../images/image-product-${position}.jpg)`;
      mainIllustration.style.backgroundImage = url;
    }
  });
} else {
  const carouselItems = document.querySelectorAll("#item-illustration-sub-i");

  carouselItems.forEach(e => {
    e.addEventListener('click', (e) => {
      const url = `url(../images/image-product-${e.srcElement.attributes[2].value}.jpg)`;
      mainIllustration.style.backgroundImage = url;
      illustrationNumber = e.srcElement.attributes[2].value;
    });
  })
}

var lightBoxPreviousToggle;
var lightBoxPosition;
function toggleBottomFocus (current) {
  //Toggle the focused state on the sub item
  if (lightBoxPreviousToggle !== undefined) {
    lightBoxPreviousToggle.classList.toggle('show');
  }
  document.querySelector(`.lightbox-illustration-sub-0${current}`).classList.toggle('show');
  //Set the previous focus to the current one
  lightBoxPreviousToggle = document.querySelector(`.lightbox-illustration-sub-0${current}`);
  lightBoxPosition = current;
}

//LightBox Toggle
const lightBoxToggler = document.querySelectorAll('#lightbox-toggle');
const lightBoxIllustration = document.querySelector(".lightbox-illustration-main");

lightBoxToggler.forEach(e => {
  e.addEventListener('click', () => {
    //Toggle the lightbox
    document.querySelector('.lightbox').classList.toggle('display');
    const url = `url(../images/image-product-${illustrationNumber}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
    toggleBottomFocus(illustrationNumber);
  });
});

//Lightbox Interaction
const prev = document.querySelector('#lightbox-container-slider-prev');
const next = document.querySelector('#lightbox-container-slider-next');

next.addEventListener('click', e => {
  if (lightBoxPosition < 4) {
    lightBoxPosition++;
    const url = `url(../images/image-product-${lightBoxPosition}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
    toggleBottomFocus(lightBoxPosition);
  } else {
    lightBoxPosition = 1;
    const url = `url(../images/image-product-${lightBoxPosition}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
    toggleBottomFocus(lightBoxPosition);
  }
});
prev.addEventListener('click', e => {
  if (lightBoxPosition > 1) {
    lightBoxPosition--;
    const url = `url(../images/image-product-${lightBoxPosition}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
    toggleBottomFocus(lightBoxPosition);
  } else {
    lightBoxPosition = 4;
    const url = `url(../images/image-product-${lightBoxPosition}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
    toggleBottomFocus(lightBoxPosition);
  }
});

//BottomBar Interaction
const lightBoxCarouselItems = document.querySelectorAll("#lightbox-illustration-sub-i");

lightBoxCarouselItems.forEach(element => {
  element.addEventListener('click', (e) => {
    const url = `url(../images/image-product-${e.srcElement.attributes[2].value}.jpg)`;
    lightBoxIllustration.style.backgroundImage = url;
  });
})