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

//User Modal Interaction

const userToggle = document.querySelector('.nav-button-user');

userToggle.addEventListener('click', () => {
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
      console.log(e.srcElement.attributes)
      const url = `url(../images/image-product-${e.srcElement.attributes[2].value}.jpg)`;
      mainIllustration.style.backgroundImage = url;
    });
  })
}
