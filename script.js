const loginPage = document.getElementById('loginPage');
const loginForm = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const successMsg = document.getElementById('successMsg');
const errorMsg = document.getElementById('errorMsg');
const convertionPage = document.getElementById('convertionPage');
const firstCard = document.getElementById('firstCard');
const rowOne = document.getElementById('rowOne');

const correctUsername = "makecodelit@gmail.com";
const correctPassword = "ilovecoding123";
debugger
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    debugger
    const user = document.getElementById('username').value
    const pwd = document.getElementById('password').value

    if(user === correctUsername && pwd === correctPassword){
        successMsg.style.display = "block"
        loginPage.style.display = "none";
        convertionPage.style.setProperty('display', 'block', 'important');
    }else{
        errorMsg.style.display = "block";
    }
});

firstCard.addEventListener('click', (e) => {
    e.preventDefault();
})