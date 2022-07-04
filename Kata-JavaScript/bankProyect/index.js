
function loadData() {

    //USE SESSION USER
    let user = getSession();
    //VARIABLES FOR THIS PROYECT
    document.getElementById('usuario').innerHTML = user.name;
    document.getElementById('welcomeUser').innerHTML = user.name;
    document.getElementById('moneyAccount').innerHTML = `$${user.money}`;

    //BUTTON EVENTS
    document.getElementById('depositBtn').addEventListener('click', depositMoney);
    document.getElementById('withdrawBtn').addEventListener('click', withdrawalMoney)
    document.getElementById('logOutBtn').addEventListener('click', closeSession)

}

loadData();

//UDDATE USER MONEY
function updateUserMoney(money) {
    let user = getSession();
    user.money = money;
    updateUser(user);
    return getSession(); 
}

//FUNTION FOR DEPOSIT MONEY IN ACCOUNT
function depositMoney() {
    let cash = document.getElementById('Money').value;
    let user = getSession();
    let totalMoney = user.money + parseInt(cash);//ADD MONEY IN ACCOUNT
    if (totalMoney && cash) {
        if (totalMoney > 990) {
            alert("Sorry, you cannot have more than $990 in your account")
        } else {
            user = updateUserMoney(totalMoney);
            document.getElementById('moneyAccount').innerHTML = `$${user.money}`;
        }    
    }
}

//FUNCTION TO WITHDRAWAL MONEY IN ACCOUNT
function withdrawalMoney() {
    let cash = document.getElementById('Money').value;
    let user = getSession();
    if (user.money && cash) {       
        if (user.money >= cash) { //IF WITHDRAWAY OF MONEY IS HIGHER TO USER MONEY MAKE THE RETREAT
            let totalMoney = user.money - parseInt(cash);   
            if (totalMoney < 10) { //IF USER TOTAL MONEY IS LESS TO 10 NOT MAKE THE RETREAT  
                alert("Withdrawal refused, the minimum balance is $10")  
            } else {//IF WITHDRAWAY OF MONEY IS HIGHER TO USER MONEY MAKE THE RETREAT
                user = updateUserMoney(totalMoney);
                document.getElementById('moneyAccount').innerHTML = `$${user.money}`;
            }
        }if (user.money < cash){//IF WITHDRAWAY OF MONEY IS LESS TO USER MONEY NOT MAKE THE RETREAT
            alert("Insufficient money in account")
        } 
    }
}

//CLOSE SESSION
function closeSession() {
    localStorage.removeItem('user');
    window.location.href = 'login.html';
}