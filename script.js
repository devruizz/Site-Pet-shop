var Faq1 = document.querySelector('#f-1')
var Faq2 = document.querySelector('#f-2')
var Faq3 = document.querySelector('#f-3')
var Faq4 = document.querySelector('#f-4')

var p1 = document.querySelector('#faq-1')
var p2 = document.querySelector('#faq-2')
var p3 = document.querySelector('#faq-3')
var p4 = document.querySelector('#faq-4')

var i1 = document.querySelector('#i-1')
var i2 = document.querySelector('#i-2')
var i3 = document.querySelector('#i-3')
var i4 = document.querySelector('#i-4')

Faq1.addEventListener('click', ()=> {
    if(p1.classList.contains('hidden')){
        p1.classList.remove('hidden')
        i1.classList.remove('fa-caret-down')
        i1.classList.add('fa-caret-up')
    }
    else{
        p1.classList.add('hidden')
        i1.classList.add('fa-caret-down')
        i1.classList.remove('fa-caret-up')
    }
});

Faq2.addEventListener('click', ()=> {
    if(p2.classList.contains('hidden')){
        p2.classList.remove('hidden')
        i2.classList.remove('fa-caret-down')
        i2.classList.add('fa-caret-up')
        
    }
    else{
        p2.classList.add('hidden')
        i2.classList.add('fa-caret-down')
        i2.classList.remove('fa-caret-up')
    }
});

Faq3.addEventListener('click', ()=> {
    if(p3.classList.contains('hidden')){
        p3.classList.remove('hidden')
        i3.classList.remove('fa-caret-down')
        i3.classList.add('fa-caret-up')
    }
    else{
        p3.classList.add('hidden')
        i3.classList.add('fa-caret-down')
        i3.classList.remove('fa-caret-up')
    }
});

Faq4.addEventListener('click', ()=> {
    if(p4.classList.contains('hidden')){
        p4.classList.remove('hidden')
        i4.classList.remove('fa-caret-down')
        i4.classList.add('fa-caret-up')
    }
    else{
        p4.classList.add('hidden')
        i4.classList.add('fa-caret-down')
        i4.classList.remove('fa-caret-up')
    }
})


 
