const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const temsSwitcherRef = document.getElementById('theme-switch-toggle');
const bodyClassList = document.body.classList;

if (bodyClassList.value === '') {
  bodyClassList.add(`${Theme.LIGHT}`);
}

//If dark theme in LocalStorage
if (localStorage.getItem('theme') === `${Theme.DARK}`) {
  temsSwitcherRef.checked = true;
  bodyClassList.remove(`${Theme.LIGHT}`);
  bodyClassList.add(`${Theme.DARK}`);
}

temsSwitcherRef.addEventListener('click', () => {
  bodyClassList.toggle(`${Theme.DARK}`);
  bodyClassList.toggle(`${Theme.LIGHT}`);
  localStorage.setItem('theme', `${bodyClassList.value}`);
  console.log(localStorage.getItem('theme'));
  console.log();
});
