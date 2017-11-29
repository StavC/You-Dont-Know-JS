/* Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money in your bank account.
 You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
*/


const TAX_RATE=0.08;
const PHONE_PRICE= 99.90;
const ACCESSORY_PRICE =9.99;


var bankAccount;
var amountOfPhones =0;
var amountOfAccessories=0;
var moneySpent=0;



function calculatetax(moneySpent)
{

	return moneySpent * TAX_RATE;
}

function formatSpent(moneySpent)
{

	return "$" + moneySpent.toFixed(2);
}



bankAccount=prompt("Please enter how much money you have in your bank account");


while(bankAccount> PHONE_PRICE)
{

// buying new phone 
	bankAccount = bankAccount - PHONE_PRICE;
	moneySpent+=PHONE_PRICE;
	amountOfPhones++;

	if(bankAccount>ACCESSORY_PRICE){
		bankAccount =  bankAccount - ACCESSORY_PRICE;
		moneySpent+=ACCESSORY_PRICE;
		amountOfAccessories++;

	}


}




moneySpent = moneySpent + calculatetax(moneySpent);

if(moneySpent> bankAccount){

	console.log("you cant affort this purchase because of the goverment....");
}
else{

	console.log("purchase complete");
}

console.log(" you spent " + formatSpent(moneySpent));
console.log( "you bought" + amountOfPhones + "of phones" );
console.log( "you bought" + amountOfAccessories + "of accessories" );






