const redirect = (source1, source2) => {
  if (window.location.href === source1) {
    self.location = source2;
  } else if (window.location.href === source2) {
    self.location = source1;
  }
};

const switchRoom = (source1, source2) => {
  const timeLeftMessage = document.querySelector('.trimmable-L37n');
  const joinButton = document.querySelector(
    '.jstest-join-room-button.Button-1doF.Button--full-3rLE'
  );

  if (timeLeftMessage) {
    const fullTime = timeLeftMessage.textContent.split(' ').slice(-2);
    const minutesLeft = parseInt(fullTime[0], 10);
    // NaN = minutesLeft < 1min
    if (isNaN(minutesLeft)) {
      redirect(source1, source2);
    }
  } else if (joinButton) {
    joinButton.click();
  }
};

const main = () => {
  const source1 = 'https://whereby.com/ouvrages.io';
  const source2 = 'https://whereby.com/ouvrages';
  window.addEventListener(
    'load',
    () => {
      setInterval(() => switchRoom(source1, source2), 1000);
    },
    false
  );
};

main();
