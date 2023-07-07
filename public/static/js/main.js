document.addEventListener('DOMContentLoaded', () => {
  function getCurrentTime() {
    const now = new Date();
    const minutesExact = now.getMinutes();
    const minutesRounded = (Math.round(minutesExact / 5) * 5);
    const hoursExact = now.getHours();

    const hoursRounded = (() => {
      if ([15, 25, 30, 35, 40, 45, 50, 55, 60].includes(minutesRounded)) {
        return hoursExact + 1;
      }

      return hoursExact;
    })();

    return {
      'hours': hoursRounded,
      'minutes': minutesRounded
    };
  }

  function showAndHideWords() {
    const now = getCurrentTime();

    document.querySelectorAll('li[data-hours], li[data-minutes]').forEach((element) => {
      element.classList.remove('active');
    });

    const hoursToActivate = document.querySelectorAll(`li[data-hours~='${now.hours}']`);
    const minutesToActivate = document.querySelectorAll(`li[data-minutes~='${now.minutes}']`);

    hoursToActivate.forEach((element) => {
      element.classList.add('active');
    });

    minutesToActivate.forEach((element) => {
      element.classList.add('active');
    });
  }

  showAndHideWords();
  setInterval(showAndHideWords, 1000);
});
