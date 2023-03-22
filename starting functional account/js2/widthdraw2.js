document.getElementById('btn-widthdraw').addEventListener('click', function () {
    const newWidthdrawAmmount = getInputById('widthdraw-field');
    // console.log(newWidthdrawAmmount);
    const prevWidthdrawAmmount = getElementValueById('widthdraw-total');
    const newWidthdrawTotal = newWidthdrawAmmount + prevWidthdrawAmmount;

    setElementValueById('widthdraw-total', newWidthdrawAmmount);

    const prevBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = prevBalanceTotal - newWidthdrawAmmount;
    setElementValueById('balance-total', newBalanceTotal);
})