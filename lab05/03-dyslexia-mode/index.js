/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const toggleDyslexiaMode = () => {
  document.querySelector('body').className = document.querySelector('body').className ? '' : 'dyslexia-mode';
}

document.getElementById('dyslexia-toggle').addEventListener('click', toggleDyslexiaMode);
