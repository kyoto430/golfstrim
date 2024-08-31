// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.header__nav');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (!link.classList.contains('drop__icon')) {
        document.body.classList.remove('lock');
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();

function openMenu() {
  const menuIcons = document.querySelectorAll('.drop__icon');
  menuIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const targetMenuId = icon.getAttribute('data-target');
      const targetMenu = document.getElementById(targetMenuId);
      targetMenu.classList.toggle('active');
      icon.classList.toggle('active');
    });
  });
}

if (window.innerWidth < 1024) {
  openMenu();
}

function showMoreText() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButtons = document.querySelectorAll('.btn-show');
    const hiddenText = document.querySelectorAll('.seo__text-hidden');

    showMoreButtons.forEach(function (showMoreButton) {
      showMoreButton.addEventListener('click', function () {
        hiddenText.forEach(function (text) {
          if (text.style.transform !== 'scale(1)') {
            text.style.position = 'initial';
            text.style.transform = 'scale(1)';
            showMoreButton.innerText = 'Скрыть';
            showMoreButton.classList.add('arrow-up');
          } else {
            text.style.position = 'absolute';
            text.style.transform = 'scale(0)';
            showMoreButton.innerText = 'Раскрыть';
            showMoreButton.classList.remove('arrow-up');
          }
        });
      });
    });
  });
}

showMoreText();

// Custom select

const typeArray = ['Для всех', 'Школьники 5-8 класс', 'Школьники 9-11 класс'];

const markArray = ['Text 1', 'Text 2'];

const modelArray = ['Text 1', 'Text 2', 'Text 3'];

const selected1 = document.getElementById('selected-1');
// const inputType = document.getElementById('typeSel');

const selected2 = document.getElementById('selected-2');
// const inputMark = document.getElementById('markSel');

const selected3 = document.getElementById('selected-3');
// const inputModel = document.getElementById('modelSel');

const optionsContainer1 = document.getElementById('oc-1');
const optionsContainer2 = document.getElementById('oc-2');
const optionsContainer3 = document.getElementById('oc-3');

for (let i = 0; i < typeArray.length; i += 1) {
  const listItem = document.createElement('div');
  listItem.classList.add('option');
  listItem.innerHTML = `
  <input type="checkbox" class="checkbox" id="type${[i]}" name="type" />
  <label for="type${[i]}">${typeArray[i]}</label>
  `;
  optionsContainer1.appendChild(listItem);
}

for (let i = 0; i < markArray.length; i += 1) {
  const listItem = document.createElement('div');
  listItem.classList.add('option');
  listItem.innerHTML = `
  <input type="checkbox" class="checkbox" id="mark${[i]}" name="mark" />
  <label for="mark${[i]}">${markArray[i]}</label>
  `;
  optionsContainer2.appendChild(listItem);
}

for (let i = 0; i < modelArray.length; i += 1) {
  const listItem = document.createElement('div');
  listItem.classList.add('option');
  listItem.innerHTML = `
  <input type="checkbox" class="checkbox" id="model${[i]}" name="model" />
  <label for="model${[i]}">${modelArray[i]}</label>
  `;
  optionsContainer3.appendChild(listItem);
}

const optionsList1 = optionsContainer1.querySelectorAll('.option');
const optionsList2 = optionsContainer2.querySelectorAll('.option');
const optionsList3 = optionsContainer3.querySelectorAll('.option');

selected1.addEventListener('click', () => {
  optionsContainer1.classList.toggle('active');
  optionsContainer2.classList.remove('active');
  optionsContainer3.classList.remove('active');
});

selected2.addEventListener('click', () => {
  optionsContainer1.classList.remove('active');
  optionsContainer2.classList.toggle('active');
  optionsContainer3.classList.remove('active');
});

selected3.addEventListener('click', () => {
  optionsContainer1.classList.remove('active');
  optionsContainer2.classList.remove('active');
  optionsContainer3.classList.toggle('active');
});

optionsList1.forEach((o) => {
  o.addEventListener('click', () => {
    // let selectedItem1 = (selected1.innerHTML =
    //   o.querySelector('label').innerHTML);
    // inputType.value = selectedItem1;
    // optionsContainer1.classList.remove('active');
    optionsList1.forEach((el) => {
      el.classList.remove('hidden');
    });
  });
});

optionsList2.forEach((o) => {
  o.addEventListener('click', () => {
    // let selectedItem2 = (selected2.innerHTML =
    //   o.querySelector('label').innerHTML);
    // inputMark.value = selectedItem2;
    // optionsContainer2.classList.remove('active');
    optionsList2.forEach((el) => {
      el.classList.remove('hidden');
    });
  });
});

optionsList3.forEach((o) => {
  o.addEventListener('click', () => {
    // let selectedItem3 = (selected3.innerHTML =
    //   o.querySelector('label').innerHTML);
    // inputModel.value = selectedItem3;
    // optionsContainer3.classList.remove('active');
    optionsList3.forEach((el) => {
      el.classList.remove('hidden');
    });
  });
});

