
document.getElementById('btn-deposit').addEventListener('click', function(){
/*
1. get the element by id 
2. get the value from the element 
3. convert string value to a number

*/
const newDepositAmount = getInputValueById('deposit-field');
/*
1. get previous deposit total by id
*/ 
const previousDepositTotal = getTextElementValueById('diposite-total');
// claculate new deposit total 
const newDepositTotal = previousDepositTotal + newDepositAmount;
setTextElementValueById('diposite-total', newDepositTotal);
// get previous balance by using the function
const previousBalanceTotal = getTextElementValueById('balance-total')
const newBalanceTotal = previousBalanceTotal + newDepositAmount;
setTextElementValueById('balance-total',newBalanceTotal);

})