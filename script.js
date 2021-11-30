// Getting all the UI elements from DOM:
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
let classesIndicator = document.querySelector('#class-amount');
let priceIndicator = document.querySelector('#total-price');

// Setting variables and their initial default values:
let durPrice = 0;           // additional cost depending on class duration
let typePrice = 0;          // additional cost depending on class type
let formPrice = 0;          // additional cost depending on class format
let lang = 'deu';           // language to learn (german by default)
let dur = 60;               // class duration (60 min by default)
let deuClassPrice = 350;    // single german class price
let engClassPrice = 450;    // single english class price
let classes = 1;            // number of classes (1 by default)
let price = 350;            // total price (350 by default due to all settings)

// Hiding group classes notice on the start since default class type is Personal:
notice.className = 'hidden';

// Function declaration for updating the total price:
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

// Function declaration for updating 3 active-inactive buttons classes on click:
function classNameChanges3(toActive, toInactive1, toInactive2) {
    toActive.className = 'active'
    toInactive1.className = 'inactive'
    toInactive2.className = 'inactive'
};

// Function declaration for updating 3 active-disabled buttons classes on click:
function classNameChanges3Dis(toActive, toDisabled1, toDisabled2) {
    toActive.className = 'active'
    toDisabled1.className = 'disabled'
    toDisabled2.className = 'disabled'
};

// Function declaration for updating 2 active-inactive buttons classes on click:
function classNameChanges2(toActive, toInactive) {
    toActive.className = 'active'
    toInactive.className = 'inactive'
};

// Duration buttons events processing:
btn45.addEventListener('click', function() {
    if (btn45.className != 'active') {
        classNameChanges3(btn45,btn60,btn90)
        durPrice = -60
        priceUpdate()
    }
});
btn60.addEventListener('click', function() {
    if (btn60.className != 'active') {
        classNameChanges3(btn60,btn90,btn45)
        durPrice = 0
        priceUpdate()
    }
});
btn90.addEventListener('click', function() {
    if (btn90.className != 'active') {
        classNameChanges3(btn90,btn60,btn45)
        durPrice = 100
        priceUpdate()
    }
});

// Type buttons events processing:
btnGroup.addEventListener('click', function() {
    if (btnGroup.className != 'active') {
        classNameChanges3(btnGroup,btnIndiv,btnMinig)
        typePrice = -90
        notice.className = ''
        classNameChanges3Dis(btn90,btn60,btn45)
        durPrice = 100
        priceUpdate()
    }
});
btnIndiv.addEventListener('click', function() {
    if (btnIndiv.className != 'active') {
        classNameChanges3(btnIndiv,btnMinig,btnGroup)
        typePrice = 0
        notice.className = 'hidden'
        classNameChanges3(btn90,btn60,btn45)
        durPrice = 100
        priceUpdate()
    }
});
btnMinig.addEventListener('click', function() {
    if (btnMinig.className != 'active') {
        classNameChanges3(btnMinig,btnIndiv,btnGroup)
        typePrice = -50
        notice.className = ''
        classNameChanges3Dis(btn90,btn60,btn45)
        durPrice = 100
        priceUpdate()
    }
});

// Format buttons events processing:
btnOnline.addEventListener('click', function() {
    if (btnOnline.className != 'active') {
        classNameChanges2(btnOnline,btnOfline)
        formPrice = 0
        priceUpdate()
    }
});
btnOfline.addEventListener('click', function() {
    if (btnOfline.className != 'active') {
        classNameChanges2(btnOfline,btnOnline)
        formPrice = 250
        priceUpdate()
    }
});

// Language choice buttons events processing:
btnDeu.addEventListener('click', function() {
    classNameChanges2(btnDeu,btnEng)
    lang = 'deu'
    priceUpdate()
});
btnEng.addEventListener('click', function() {
    classNameChanges2(btnEng,btnDeu)
    lang = 'eng'
    priceUpdate()
});

// Number of classes buttons events processing:
btnPlus.addEventListener('click', function() {
    classes = ++classes
    priceUpdate()
});
btnMinus.addEventListener('click', function() {
    classes = --classes
    priceUpdate()
});