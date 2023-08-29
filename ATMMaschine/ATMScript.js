// JavaScript Document
"use strict";

//------------ BUTTONS -------------
const btnStart = document.getElementById("btnStart");
const btnCancel = document.getElementById("btnCancel");
const btnCheckData = document.getElementById("btnCheckData");
const chkCardInsert = document.getElementById("cardInsert");
const txtPin = document.getElementById("pinInsert");
const btnCancLogin = document.getElementById("btnCancLogin");
const btnDatalogin = document.getElementById("btnDataLogin");
const btnCancData = document.getElementById("btnCancData");
const btnAccountBallance = document.getElementById("btnAccountBallance");
const btnWithdraw = document.getElementById("btnWithdraw");
const btnWithdrawBLIK = document.getElementById("btnWithdrawBLIK");
const btnDeposit = document.getElementById("btnDeposit");
const btnDepositBLIK = document.getElementById("btnDepositBLIK");
const btnConfirmDepo = document.getElementById("btnConfirmDepo");
const btnCancInfo = document.getElementById("btnCancInfo");
const btnCancDepo = document.getElementById("btnCancDepo");
const btnConfirmWithdraw = document.getElementById("btnConfirmWithdraw");
const btnCancWithdraw = document.getElementById("btnCancWithdraw");

//------------INPUTS----------------
const cardNrIn = document.getElementById("cardNumberIn");
const pinInsert = document.getElementById("pinInsert");
const depositAmount = document.getElementById("depositAmount");
const depositConfirm = document.getElementById("depositConfirm");
const withdrawAmount = document.getElementById("withdrawAmount");

//--------- SCREENS -------------
const startScreen = document.getElementById("startScreen");
const menuScreen = document.getElementById("menuScreen");
const loginScreen = document.getElementById("loginScreen");
const clientDataScreen = document.getElementById("clientDataScreen");
const depositScreen = document.getElementById("depositScreen");
const infoScreen = document.getElementById("infoScreen");
const withdrawScreen = document.getElementById("withdrawScreen");

//-------OUTPUTS-----------------
const dtFName = document.getElementById("dtFName");
const dtSName = document.getElementById("dtSName");
const dtBalance = document.getElementById("dtBalance");
const dtNumber = document.getElementById("dtNumber");
const dtCardNr = document.getElementById("dtCardNr");
const dtPIN = document.getElementById("dtPIN");
const infoText = document.getElementById("infoText");

class Client{
	constructor(firstName, secondName, balance, ACCOUNT_NUMBER, CARD_NUMBER, pin){
		this.firstName = firstName;
		this.secondName = secondName;
		this.balance = balance;
		this.ACCOUNT_NUMBER = ACCOUNT_NUMBER;
		this.CARD_NUMBER = CARD_NUMBER;
		this.pin = pin;
		this.clientData = [
			 `First name: ${this.firstName}`, 
			 `Second name: ${this.secondName}`, 
			 `Account balance: ${this.balance} \$`, 
			 `Acount numeber: ${this.ACCOUNT_NUMBER}`, 
			 `Card numeber: ${this.CARD_NUMBER}`, 
			 `PIN: ${this.pin}`];
	}
	
	updateData(){
		this.clientData = [
			 `First name: ${this.firstName}`, 
			 `Second name: ${this.secondName}`, 
			 `Account balance: ${this.balance} \$`, 
			 `Acount numeber: ${this.ACCOUNT_NUMBER}`, 
			 `Card numeber: ${this.CARD_NUMBER}`, 
			 `PIN: ${this.pin}`];
	}
	
	withdraw(amount){
		let withdrawConfirm = false;
		if(amount==0 || amount==undefined || isNaN(amount)){
			showInfo("Please enter cash amount to withdraw.");
			withdrawConfirm = false;
		}
		else if(amount<=this.balance){
		   this.balance-=amount;
			showInfo("Operation completed. Please take your money and card.");
			withdrawConfirm = true;
			clearLoginData();
			withdrawAmount.value = 0;
			withdrawScreen.classList.add("hidden");
			menuScreen.classList.remove("hidden");
		   }
		else if(amount>this.balance){
			showInfo("Not enought money on account.");
			withdrawConfirm = false;
		}
		else{
			showInfo("Unknown error.");
		}
		return withdrawConfirm;
	}
	
	printClientData(){
		this.updateData();
		dtFName.innerHTML = this.clientData[0];
		dtSName.innerHTML = this.clientData[1];
		dtBalance.innerHTML = this.clientData[2];
		dtNumber.innerHTML = this.clientData[3];
		dtCardNr.innerHTML = this.clientData[4];
		dtPIN.innerHTML = this.clientData[5];
	}
	
	printAccountBalance(){
		this.updateData();
		dtFName.innerHTML = "";
		dtSName.innerHTML = "";
		dtBalance.innerHTML = this.clientData[2];
		dtNumber.innerHTML = "";
		dtCardNr.innerHTML = "";
		dtPIN.innerHTML = "";
	}
	
	set addDeposit(deposit){
		this.balance += deposit;
	}
}

class AtmMaschine{
	constructor(ATM_NUMBER, cashAmount){
		this.cashAmount = cashAmount;
		this.ATM_NUMBER = ATM_NUMBER;
		this.ClientsList = [];
		this.currentLoggedClient = 0;
		this.menuPosition = 0;
	}
//-------GETTERS------
	get getAtmNumber(){
		return this.ATM_NUMBER;
	}
	get getAtmCashAmount(){
		return this.cashAmount;
	}
	get getAtmClientList(){
		return this.ClientsList;
	}
//-------SETTERS-------
	set updateAtmCashAmount(update){
		this.cashAmount = update;
	}
	
	set addClient(client){
		this.ClientsList.push(client);
	}
	set setCurrentLoggedClient(client){
		this.currentLoggedClient = client;
	}
	
	checkDeposit(){
		let depoCash = parseInt(depositAmount.value);
		let depoConfirm = parseInt(depositConfirm.value);
		if((depoCash===depoConfirm) && (depoCash%10===0 && depoConfirm%10===0)){
		   ATM1.ClientsList[ATM1.currentLoggedClient].addDeposit = depoCash;
		   depositScreen.classList.add("hidden");
		   menuScreen.classList.remove("hidden");
		   clearLoginData();
		   }
		else{
		   showInfo("Something goes wrong...");
		   }
		console.log(parseInt(depositAmount.value%10)===0?"yes":"no");
	}
	
	clearClientData(){
		dtFName.innerHTML = "";
		dtSName.innerHTML = "";
		dtBalance.innerHTML = "";
		dtNumber.innerHTML = "";
		dtCardNr.innerHTML = "";
		dtPIN.innerHTML = "";
	}
}

//--------- APP DATA DEFINITIONS ---------------

let ATM1 = new AtmMaschine("ATM001", 10000);
let Kovalsky = new Client("John", "Kovalsky", 3000, 911234000000049876, 11111111, 1111);
let Novak = new Client("Andy", "Novak", 5000, 873234000000019876, 22222222, 2222);
ATM1.addClient = Kovalsky;
ATM1.addClient = Novak;

btnStart.addEventListener("click", function(){
	startScreen.classList.add("hidden");
	menuScreen.classList.remove("hidden");
});

btnCancel.addEventListener("click", function(){
	menuScreen.classList.add("hidden");
	startScreen.classList.remove("hidden");
});

chkCardInsert.addEventListener("click", function(){
	if(chkCardInsert.checked){
		document.getElementById("cardNumberContainer").classList.remove("hidden");
		document.getElementById("pinInsertContainer").classList.remove("hidden");
	}else if(!chkCardInsert.checked){
		document.getElementById("pinInsertContainer").classList.add("hidden");
		document.getElementById("cardNumberContainer").classList.add("hidden");
	}
});

btnAccountBallance.addEventListener("click", function(){
	ATM1.menuPosition = 0;
	menuSelection();
});
btnWithdraw.addEventListener("click", function(){
	ATM1.menuPosition = 1;
	menuSelection();
});
btnWithdrawBLIK.addEventListener("click", function(){
	ATM1.menuPosition = 2;
	menuSelection();
});
btnDeposit.addEventListener("click", function(){
	ATM1.menuPosition = 3;
	menuSelection();
});
btnDepositBLIK.addEventListener("click", function(){
	ATM1.menuPosition = 4;
	menuSelection();
});
btnCheckData.addEventListener("click", function(){
	ATM1.menuPosition = 5;
	menuSelection();
});

btnCancLogin.addEventListener("click", function(){
	document.getElementById("pinInsertContainer").classList.add("hidden");
	document.getElementById("cardNumberContainer").classList.add("hidden");
	menuScreen.classList.remove("hidden");
	clearLoginData();
});

btnDatalogin.addEventListener("click", function(){
	switch(ATM1.menuPosition){
		case 0:{
			if(checkClientLogin()){
			ATM1.ClientsList[ATM1.currentLoggedClient].getClientData;
			ATM1.ClientsList[ATM1.currentLoggedClient].printAccountBalance();
			clientDataScreen.classList.remove("hidden");
			loginScreen.classList.add("hidden");
			}
			else{
				showInfo("No card inserted or wrong pin.");
			}
			break;
		}
			case 1:{
			if(checkClientLogin()){
				loginScreen.classList.add("hidden");
				withdrawScreen.classList.remove("hidden");
				btnConfirmWithdraw.addEventListener("click", function(){
					if(ATM1.cashAmount>=parseInt(withdrawAmount.value)){
				ATM1.ClientsList[ATM1.currentLoggedClient].withdraw(parseInt(withdrawAmount.value));
					clearLoginData();
				}
					else{
						showInfo("No enought cash in ATM.");
					}
				});
				btnCancWithdraw.addEventListener("click", function(){
				clearLoginData();
				loginScreen.classList.add("hidden");
				withdrawScreen.classList.add("hidden");
				menuScreen.classList.remove("hidden");
				});
			}
			else{
				showInfo("No card inserted or wrong pin.");
			}
			break;
		}
		case 3:{
			if(checkClientLogin()){
			loginScreen.classList.add("hidden");
			depositScreen.classList.remove("hidden");
			ATM1.ClientsList[ATM1.currentLoggedClient].getClientData;
			btnConfirmDepo.addEventListener("click", ATM1.checkDeposit);
			}
			else{
				showInfo("DEPO: No card inserted or wrong pin.");
			}
			break;
		}
		case 5:{
			if(checkClientLogin()){
			ATM1.ClientsList[ATM1.currentLoggedClient].printClientData();
			clientDataScreen.classList.remove("hidden");
			loginScreen.classList.add("hidden");
			}
			else{
				showInfo("No card inserted or wrong pin.");
			}
			break;
		}//end case 5
	}//end swich
});

btnCancData.addEventListener("click", function(){
	clientDataScreen.classList.add("hidden");
	clearLoginData();
	menuScreen.classList.remove("hidden");
});

btnCancDepo.addEventListener("click", function(){
	depositScreen.classList.add("hidden");
	menuScreen.classList.remove("hidden");
	clearLoginData();
});

//------------------FUNCTIONS----------------------

function showInfo(message){
	infoScreen.classList.remove("hidden");
		   infoText.innerHTML = message;
		   btnCancInfo.addEventListener("click", function(){
			   infoScreen.classList.add("hidden");
		   });
}

function clearLoginData(atm){
	loginScreen.classList.add("hidden");
	chkCardInsert.checked = false;
	document.getElementById("pinInsertContainer").classList.add("hidden");
	document.getElementById("cardNumberContainer").classList.add("hidden");
	pinInsert.value = "";
	cardNrIn.value = "";
}

function menuSelection(){
	switch(ATM1.menuPosition){
		case 0:{ //Account Balance
			menuScreen.classList.add("hidden");
			loginScreen.classList.remove("hidden");
			break;
		}
		case 1:{ //Withdraw
			menuScreen.classList.add("hidden");
			loginScreen.classList.remove("hidden");
			break;
		}
		case 2:{ //Withdraw BLIK
			showInfo("Withdraw BLIK - not working yet..");
			break;
		}
		case 3:{ //Deposit
			menuScreen.classList.add("hidden");
			loginScreen.classList.remove("hidden");
			break;
		}
		case 4:{//Deposit BLIK
			showInfo("Deposit BLIK - not working yet...");
			break;
		}
		case 5:{//Check data
			menuScreen.classList.add("hidden");
			loginScreen.classList.remove("hidden");
		}
		   }//swich end
}

function checkClientLogin(){
	let dataCheck = false;
	for(let i=0;i<ATM1.ClientsList.length;i++){
				if(parseInt(pinInsert.value) === ATM1.ClientsList[i].pin && parseInt(cardNrIn.value) === ATM1.ClientsList[i].CARD_NUMBER){
					ATM1.setCurrentLoggedClient = i;
					ATM1.ClientsList[ATM1.currentLoggedClient].updateData();
					dataCheck = true;
					   }
				}
	return dataCheck;
}

//---------TESTS------------
/*console.log(Kovalsky.clientData);
console.log(Kovalsky.getClientData);
console.log(Novak.getClientData);
console.log(ATM1.ClientsList);
console.log(ATM1.getAtmNumber, ATM1.getAtmCashAmount);
ATM1.updateAtmCashAmount = 900;
console.log(ATM1.getAtmCashAmount);
*/