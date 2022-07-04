//USER ACCOUNTS FOR THIS PROYECT
const userAccounts = [
    {
        name: "Ciro De Jesus Colin",
        user: "ciro.djc@gmail.com",
        password: "1234",
        money: 3000,
    },
    {
        name: "Jorge Michelle Alonso",
        user: "jorgeMichelle@gmail.com",
        password: "abcd",
        money: 5000,
    },
    {
        name: "Luis Daniel Camacho",
        user: "luisDaniel@gmail.com",
        password: "9876",
        money: 7000,
    }

];

//GET USER ACCOUNTS
function getUsers() {
    let users = localStorage.getItem('userAccounts');//GET DATA USER ON LOCAL STORAGE
    if (users == undefined || users == null) {
        localStorage.setItem('userAccounts', JSON.stringify(userAccounts));//ADD DATA USER ON LOCAL STORAGE
        users = localStorage.getItem('userAccounts');//GET DATA USER ON LOCAL STORAGE
    }
    return JSON.parse(users);
}

//VALID USER AND PASSWORD
function validUser(user, password) {
    let userObject;
    let users = getUsers();
    users.forEach(element => {
        if (element.user == user && element.password == password) {
            userObject = element;
            return;//RETURN TRUE OR FALSE
        }
    });
    return userObject;
}

//CREATE SESSION OF USER
function createSession(user) {
    localStorage.setItem('user', JSON.stringify(user)); //ADD OR CREATE SESSION OF USER ON LOCAL STORAGE
}

//CLOSE SESSION OF USER
function closeSession() {
    localStorage.removeItem('user'); //DELETE SESSION OF USER ON LOCAL STORAGE
}

//GET SESSION OF USER ON LOCALSTORAGE
function getSession() {
    return JSON.parse(localStorage.getItem('user')); //RETURN DATA USER ACCOUNTS
}


//UPDATE USER ACCOUNT
function updateUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
    let accounts = getUsers();

    accounts.forEach(element => {
        if (element.user == user.user && element.password == user.password) {//VALID EXIST USER ACCOUNTS
            element.name = user.name;
            element.user = user.user;
            element.money = user.money;
        }
    });

    localStorage.setItem('userAccounts', JSON.stringify(accounts)); //ADD USER ACCOUNTS ON LOCALSTORAGE
}

getUsers();

//LOGIN

document.getElementById('btnLogin').addEventListener('click', validation);

//VALIDATION USER AND PASSWORD
function validation() {

    let userName = document.getElementById('emailUser').value;
    let password = document.getElementById('passwordUser').value;
    let user = validUser(userName, password);

    if (userName && password) {
        if (user) {
            createSession(user);
            alert("Login susscesfull")
            window.location.href = 'index.html'; //REDIRECTION TO index.html
        } else {
            alert("Account non-exist") //USER NOT EXIST IN LOCALSTORAGE
        }
    }
}