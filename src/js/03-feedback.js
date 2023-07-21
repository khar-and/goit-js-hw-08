import throttle from "lodash.throttle";

const inputEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');
const formEl = document.querySelector('.feedback-form')


let formData = {};    
const STORADGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFormChangeText, 500));
formEl.addEventListener('submit', onFormSubmit);

CheckLocalStoradge(); 

function onFormChangeText(event) {
   
    formData[event.target.name] = event.target.value;
    localStorage.setItem('STORADGE_KEY', JSON.stringify(formData));
}

function onFormSubmit(event) {
    
    event.preventDefault(); 
    if (inputEl.value === '' || messageEl.value === '') {
         alert('You must write all fields!!!!');
       return
    }
    console.log(formData);
    event.currentTarget.reset();
    localStorage.removeItem('STORADGE_KEY');
    formData = {};
    
}

function CheckLocalStoradge() {
    const savedText = JSON.parse(localStorage.getItem('STORADGE_KEY'));
    if (savedText) {
        inputEl.value = savedText.email || "";
        messageEl.value = savedText.message || "";
    }
    

    
}


