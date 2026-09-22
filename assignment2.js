class bankaccount{
    constructor(accountNo,holderName,balance){
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }
    deposit(amount){
        this.amount = amount;
        this.balance += amount;
        console.log("Deposited : ",this.amount);
        console.log("Amount after deposit : ",this.balance);
    }
    withdraw(amount){
        this.amount = amount;
        if(this.balance >= amount){
            this.balance -= amount;
            console.log("Deposited : ",this.amount);
            console.log("Amount after withrawal : ",this.balance);
        }
        else{
            console.log("invalid withdrawal ");
        }
    }
    displayBalance(){
        console.log("Account balance : ",this.balance);
        console.log("Account number : ",this.accountNo);
        console.log("Account holder name : ",this.holderName);
    }
    static bankinfo(){
        console.log("Bank name : Bank of India");
        console.log("Account type : savings");
        console.log("Bank code : 123321");
    }
}
let c1 = new bankaccount(103,"lakshaya kumar",2500);
c1.deposit(16200);
c1.withdraw(16500);
c1.displayBalance();
bankaccount.bankinfo();
let c2 = new bankaccount(114,"Arhaan",250000);
c2.deposit(16200);
c2.withdraw(16500);
c2.displayBalance();
bankaccount.bankinfo();