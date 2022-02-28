//welcoming button
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#submit').disabled = true;
    document.querySelector('#email').onkeyup = function() {
        document.querySelector('#submit').disabled = false;
    }


    document.querySelector('form').onsubmit = function() {
        const email = document.querySelector('#email').value;
        alert(`Hello, ${email}! Welcome to Sir Felix Portfolio, Lets Talk Business.`);
    };

});

///contact part
document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#Submit').disabled = true;
    document.querySelector('#name').onkeyup = function() {
        document.querySelector('#Submit').disabled = false;
    }


    document.querySelector('.contact-container').onsubmit = function() {
        const name = document.querySelector('#name').value;
        alert(`Hello, ${name}! Thanks for visting Sir Felix Portfolio. Your Email has been recieved.`);
    };
});