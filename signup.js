//Initilaizing variable
const FullName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2');
const signUpBtn = document.getElementById('submit_button');
const signUpContainer = document.querySelector('.sign-up-container');
const mainContainer = document.querySelector('.main-card');
const signUpSuccessMsg = document.querySelector('.signup-success-msg');
const sucessText = document.querySelector('.sucess-text');
const signUpRefresh = document.querySelector('.signup-rest-button');
const showPassword = document.querySelector('.showpass');
const cnfShowPassword = document.querySelector('.showpass2');
const oneNumeric = document.querySelector('.one-numeric');
const oneUppercase = document.querySelector('.one-upprcase');
const oneLowercase = document.querySelector('.one-lowercase');
const mustHave = document.querySelector('.must-have');

//event listners for input filed
//For Name
FullName.addEventListener('blur', validateName);
//For Email
email.addEventListener('blur', validateEmail);
//For Password
password.addEventListener('blur', validatePassword);
//For confirm Password
confirmPassword.addEventListener('blur', validateConfirmPassword);
//On click submit for sign up button
signUpBtn.addEventListener('click', sucessfulMsg);
//On Keyborad submit for sign up button
signUpBtn.addEventListener('keyup', sucessfulMsg);
//page refrsh
signUpRefresh.addEventListener('click', ()=>{
    window.location.reload();
});
//showpass
showPassword.addEventListener('click', showPasswordFunction);
//snfshowpass
cnfShowPassword.addEventListener('click', cnfshowPasswordFunction);
//password validity indicator
password.addEventListener('keyup', passwordValidIndicator);

//Functions
function validateName(e){
    const name = FullName;
    const re = /^[a-zA-Z\s]{3,20}$/;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
    accessGranted();
}
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
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(!re.test(userPassword.value)){
        userPassword.classList.add('is-invalid');
    }else{
        userPassword.classList.remove('is-invalid');
    }
    accessGranted();
}
function validateConfirmPassword(e){
    const userPassword = password;
    const cnfUserPassword = confirmPassword;
    
    if(userPassword.value != cnfUserPassword.value){
        cnfUserPassword.classList.add('is-invalid')
    }else{
        cnfUserPassword.classList.remove('is-invalid')
    }
    accessGranted();
}

//Enable button only  after all sucessful attempts
function accessGranted(){
    const name = FullName;
    const emailId = email;
    const userPassword = password;
    const cnfUserPassword = confirmPassword;

    const reName = /^[a-zA-Z\s]{3,20}$/;
    const reEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,6})$/;
    const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(reName.test(name.value) && reEmail.test(emailId.value) && rePassword.test(userPassword.value) && (cnfUserPassword.value == userPassword.value)){
        const submitButton = signUpBtn;
        submitButton.classList.remove('disabled');
        // $('#tooltip').contents().unwrap();
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
function sucessfulMsg(e){
    mainContainer.removeChild(signUpContainer);
    signUpSuccessMsg.style.display ='block';
    const name = FullName.value.toUpperCase();
    sucessText.innerHTML = `Thank you for creating account with us ${name}`;

    e.preventDefault();
}
//Showpassword function
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

function cnfshowPasswordFunction(e){
    if(confirmPassword.type === 'password' && clicked){
        confirmPassword.setAttribute('type','text');
        cnfShowPassword.removeChild(cnfShowPassword.lastElementChild);
        const eyeSlashIcon = `<i class="fas fa-eye-slash"></i>`
        cnfShowPassword.innerHTML += eyeSlashIcon;
        clicked = false;
    }else{
        confirmPassword.setAttribute('type','password');
        cnfShowPassword.removeChild(cnfShowPassword.lastElementChild);
        const eyeSlashIcon = `<i class="fas fa-eye"></i>`
        cnfShowPassword.innerHTML += eyeSlashIcon;
        clicked = true;
    }
}

//Password valid Indicator
function passwordValidIndicator(e){
    const passwordText = password.value
    const reMustHave = /^(?=.*\d).{6,20}$/;
    const reOneNumeric = /(?=.*\d)/;
    const reOneUpperCase = /(?=.*[A-Z])/;
    const reOneLowerCase = /(?=.*[a-z])/;

    if(reMustHave.test(passwordText)){
        mustHave.childNodes[0].classList.remove('fa-times');
        mustHave.childNodes[0].classList.add('fa-check');
    }else{
        mustHave.childNodes[0].classList.add('fa-times');
        mustHave.childNodes[0].classList.remove('fa-check');
    }
    if(reOneNumeric.test(passwordText)){
        oneNumeric.childNodes[0].classList.remove('fa-times');
        oneNumeric.childNodes[0].classList.add('fa-check');
    }else{
        oneNumeric.childNodes[0].classList.add('fa-times');
        oneNumeric.childNodes[0].classList.remove('fa-check');
    }
    if(reOneUpperCase.test(passwordText)){
        oneUppercase.childNodes[0].classList.remove('fa-times');
        oneUppercase.childNodes[0].classList.add('fa-check');
    }else{
        oneUppercase.childNodes[0].classList.add('fa-times');
        oneUppercase.childNodes[0].classList.remove('fa-check');
    }
    if(reOneLowerCase.test(passwordText)){
        oneLowercase.childNodes[0].classList.remove('fa-times');
        oneLowercase.childNodes[0].classList.add('fa-check');
    }else{
        oneLowercase.childNodes[0].classList.add('fa-times');
        oneLowercase.childNodes[0].classList.remove('fa-check');
    }
}

//Bootstrap tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});