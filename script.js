let TIME_BEFORE_SWITCHING = 10;
const source1 = 'https://whereby.com/ouvrages.io';
const source2 = 'https://whereby.com/ouvrages';

const countDown = () => {
  if (TIME_BEFORE_SWITCHING === 0) redirect();

  let countElement;
  let bigCountElement;
  if (TIME_BEFORE_SWITCHING === 10) {
    countElement = document.createElement('div');
    bigCountElement = document.createElement('span');
    countElement.classList = 'section-3_oy count-down';
    bigCountElement.classList = 'big-count-down';

    const roomStatusBar = document.querySelector(
      '.jstest-room-statusbar.settingsButton-2fU_'
    );
    const app = document.getElementById('app');

    roomStatusBar.appendChild(countElement);
    app.appendChild(bigCountElement);
  } else {
    countElement = document.querySelector('.section-3_oy.count-down');
    bigCountElement = document.querySelector('.big-count-down');
  }

  countElement.innerText = `Redirection dans : ${TIME_BEFORE_SWITCHING}s`;
  bigCountElement.innerText = TIME_BEFORE_SWITCHING;
  TIME_BEFORE_SWITCHING--;
};

const redirect = () => {
  if (window.location.href === source1) {
    self.location = source2;
  } else if (window.location.href === source2) {
    self.location = source1;
  }
};

const switchRoom = () => {
  const timeLeftMessage = document.querySelector('.trimmable-L37n');
  if (timeLeftMessage) {
    const fullTime = timeLeftMessage.textContent.split(' ').slice(-2);
    const minutesLeft = parseInt(fullTime[0], 10);
    // NaN = minutesLeft < 1min
    if (isNaN(minutesLeft)) {
      countDown();
    }
  }
};

const main = () => {
  window.addEventListener(
    'load',
    () => {
      setInterval(() => switchRoom(), 1000);
    },
    false
  );
};

main();
