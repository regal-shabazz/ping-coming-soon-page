const email__input = document.querySelector('#email');
const notify__me = document.querySelector('button');
const error__message = document.querySelector('#error__message');

notify__me.addEventListener("click", (e) => {
    e.preventDefault();

    const email = email__input.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        error__message.innerText = 'Whoops! It looks like you forgot to add your email';
        email__input.style.border = '1px solid hsl(354, 100%, 66%)'
    } else if (!emailRegex.test(email)) {
        error__message.innerText = 'Please provide a valid email address';
        email__input.style.border = '1px solid hsl(354, 100%, 66%)'
    } else {
        // Email is valid, clear any error messages here and perform further actions
        error__message.innerText = '';
    }
});


// this removes the error update while user is typing
email__input.addEventListener('input', () => {
    error__message.innerText = '';
    email__input.style.border = '1px solid hsl(223, 100%, 88%)';
});
