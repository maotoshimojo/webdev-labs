const defaultTheme = event => {
   document.querySelector('body').className = '';
};

const desert = event => {
   document.querySelector('body').className = 'desert';
};

const ocean = event => {
   document.querySelector('body').className = 'ocean';
};

const highContrast = event => {
   document.querySelector('body').className = 'high-contrast';
};


document.querySelector('#default').addEventListener('click', defaultTheme);
document.querySelector('#desert').addEventListener('click', desert);
document.querySelector('#ocean').addEventListener('click', ocean);
document.querySelector('#high-contrast').addEventListener('click', highContrast);