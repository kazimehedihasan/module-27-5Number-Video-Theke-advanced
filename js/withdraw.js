
/*
1. add withdraw button event handler
2. get withdraw amount by  using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5 . set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function 
6. calculate new blance total
7. set balance total using setTextElementValueById
*/ 
document.getElementById('btn-withdra').addEventListener('click', function(){
const newWithdrawAmount = getInputValueById('but-input');
const previousWithdrawTotal = getTextElementValueById('Withdraw-total');
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
setTextElementValueById('Withdraw-total', newWithdrawTotal);
const previousBalanceTotal = getTextElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
setTextElementValueById ('balance-total', newBalanceTotal);
})

console.log('mehedi hasan');