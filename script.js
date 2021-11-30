const btnPlus = document.querySelector('#btn-plus');
const btnMinus = document.querySelector('#btn-minus');
const btnEng = document.querySelector('#btn-eng');
const btnDeu = document.querySelector('#btn-deu');
const btn45 = document.querySelector('#btn-45');
const btn60 = document.querySelector('#btn-60');
const btn90 = document.querySelector('#btn-90');
const btnGroup = document.querySelector('#btn-group');
const btnIndiv = document.querySelector('#btn-indiv');
const btnMinig = document.querySelector('#btn-minig');
const btnOnline = document.querySelector('#btn-online');
const btnOfline = document.querySelector('#btn-ofline');
const notice = document.querySelector('#notice');

let durPrice = 0;
let typePrice = 0;
let formPrice = 0;

let classesIndicator = document.querySelector('#class-amount');
let priceIndicator = document.querySelector('#total-price');

let lang = 'deu';
let dur = 60;
let deuClassPrice = 350;
let engClassPrice = 450;
let classes = 1;
let price = 350;

notice.className = 'hidden';

function priceUpdate() {
    if (classes < 1) {
        classes = 1
    }
    if (lang == 'deu') {
        price = (deuClassPrice + durPrice + typePrice + formPrice) * classes
    } else {
       price = (engClassPrice + durPrice + typePrice + formPrice) * classes
   }
    classesIndicator.innerHTML = classes
    priceIndicator.innerHTML = '₴' + price
};



btn45.addEventListener('click', durTo45 = () => {
    if (btn45.className != 'active') {
        btn45.className = 'active'
        btn60.className = 'inactive'
        btn90.className = 'inactive'
        durPrice = -60
        priceUpdate()
    } else return
});
    
btn60.addEventListener('click', durTo60 = () => {
    if (btn60.className != 'active') {
        btn45.className = 'inactive'
        btn60.className = 'active'
        btn90.className = 'inactive'
        durPrice = 0
        priceUpdate()
    } else return
});

btn90.addEventListener('click', durTo90 = () => {
    if (btn90.className != 'active') {
        btn45.className = 'inactive'
        btn60.className = 'inactive'
        btn90.className = 'active'
        durPrice = 100
        priceUpdate()
    } else return
});



btnGroup.addEventListener('click', typeToGroup = () => {
    if (btnGroup.className != 'active') {
        btnGroup.className = 'active'
        btnIndiv.className = 'inactive'
        btnMinig.className = 'inactive'
        typePrice = -90
        notice.className = ''
        btn45.className = 'disabled'
        btn60.className = 'disabled'
        btn90.className = 'active'
        durPrice = 100
        priceUpdate()
    } else return
});

btnIndiv.addEventListener('click', typeToIndiv = () => {
    if (btnIndiv.className != 'active') {
        btnIndiv.className = 'active'
        btnGroup.className = 'inactive'
        btnMinig.className = 'inactive'
        typePrice = 0
        notice.className = 'hidden'
        btn45.className = 'inactive'
        btn60.className = 'inactive'
        btn90.className = 'active'
        durPrice = 100
        priceUpdate()
    } else return
});

btnMinig.addEventListener('click', typeToMinig = () => {
    if (btnMinig.className != 'active') {
        btnMinig.className = 'active'
        btnIndiv.className = 'inactive'
        btnGroup.className = 'inactive'
        typePrice = -50
        notice.className = ''
        btn45.className = 'disabled'
        btn60.className = 'disabled'
        btn90.className = 'active'
        durPrice = 100
        priceUpdate()
    } else return
});



btnOnline.addEventListener('click', formToOnline = () => {
    if (btnOnline.className != 'active') {
        btnOnline.className = 'active'
        btnOfline.className = 'inactive'
        formPrice = 0;
        priceUpdate()
    } else return
});

btnOfline.addEventListener('click', formToOfline = () => {
    if (btnOfline.className != 'active') {
        btnOfline.className = 'active'
        btnOnline.className = 'inactive'
        formPrice = 250;
        priceUpdate()
    } else return
});



btnDeu.addEventListener('click', langToDeu = () => {
    btnDeu.className = 'active'
    btnEng.className = 'inactive'
    lang = 'deu'
    priceUpdate()
});

btnEng.addEventListener('click', langToEng = () => {
    btnDeu.className = 'inactive'
    btnEng.className = 'active'
    lang = 'eng'
    priceUpdate()
});



btnPlus.addEventListener('click', plusPrice = () => {
    classes = ++classes
    priceUpdate()
});


btnMinus.addEventListener('click', minusPrice = () => {
    classes = --classes
    priceUpdate()
});