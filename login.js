//Initilaizing variable
const email = document.getElementById('email');
const password = document.getElementById('loginassword');
const loginBtn = document.getElementById('submit_button');
const mainCard = document.querySelector('.main-card');
const loginContainer = document.querySelector('.login-container');
const loginMsg = document.querySelector('.login-success-msg');
const successText = document.querySelector('.sucess-text');
const showPassword = document.querySelector('.showpass');

//event listners for input filed
//For Email
email.addEventListener('blur', validateEmail);
//For Password
password.addEventListener('blur', validatePassword);
//success msg
loginBtn.addEventListener('click', successfulMsg);
//success msg
loginBtn.addEventListener('keyup', successfulMsg);
//showpass
showPassword.addEventListener('click', showPasswordFunction);

//Functions
function validateEmail(e){
    const emailId = email;
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;

    if(!re.test(emailId.value)){
        emailId.classList.add('is-invalid');
    }else{
        emailId.classList.remove('is-invalid');
    }
    accessGranted();
}
function validatePassword(e){
    const userPassword = password;

    if(userPassword.value === ''){
        userPassword.classList.add('is-invalid');
    }else{
        userPassword.classList.remove('is-invalid');
    }
    accessGranted();
}

//Enable button only  after all sucessful attempts
function accessGranted(){
    const emailId = email;
    const userPassword = password;

    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;

    if(reEmail.test(emailId.value) && (userPassword.value != '')){
        const submitButton = loginBtn;
        submitButton.classList.remove('disabled');
        const tooltip = document.querySelector('#tooltip');
        while(tooltip.firstChild){
            tooltip.parentNode.insertBefore(tooltip.firstChild,tooltip)
        }
        tooltip.parentNode.removeChild(tooltip);
    }else{
        const submitButton = document.getElementById('submit_button');
        submitButton.classList.add('disabled');
    }
}

//Function to show msg after sucessful submission
function successfulMsg(e){
    mainCard.removeChild(loginContainer);
    loginMsg.style.display ='block';
    successText.innerHTML = `You Have Sucessfully Logged In`;

    e.preventDefault();
}

//Showpass function
let clicked = false;
function showPasswordFunction(e){
    if(password.type === 'password' && clicked){
        password.setAttribute('type','text');
        showPassword.removeChild(showPassword.lastElementChild);
        const eyeSlashIcon = `<i class="fas fa-eye-slash"></i>`
        showPassword.innerHTML += eyeSlashIcon;
        clicked = false;
    }else{
        password.setAttribute('type','password');
        showPassword.removeChild(showPassword.lastElementChild);
        const eyeSlashIcon = `<i class="fas fa-eye"></i>`
        showPassword.innerHTML += eyeSlashIcon;
        clicked = true;
    }
}

//Bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});