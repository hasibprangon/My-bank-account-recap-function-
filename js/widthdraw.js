document.getElementById('btn-widthdraw').addEventListener('click', function(){
    // console.log('btn clicked');

    const widthdrawField = document.getElementById('widthdraw-field');
    const widthdrawAmmountStr = widthdrawField.value;
    const widthdrawAmmount = parseFloat(widthdrawAmmountStr);
    // console.log(widthdrawFields);

    const prevWidthdrawField = document.getElementById('widthdraw-total');
    const prevWidthdrawStr = prevWidthdrawField.innerText;
    const prevWidthdraw = parseFloat(prevWidthdrawStr);

    const totalWidthdraw =  prevWidthdraw + widthdrawAmmount ;
    prevWidthdrawField.innerText = totalWidthdraw;

    const balanceField = document.getElementById('balance-total');
    const currentBalanceStr = balanceField.innerText;
    const currentBalance = parseFloat(currentBalanceStr);
    const newTotalBalance = currentBalance - widthdrawAmmount;
    balanceField.innerText = newTotalBalance; 

    widthdrawField.value = '';
})