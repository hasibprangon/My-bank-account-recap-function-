document.getElementById('btn-diposite').addEventListener('click', function(){
    const newDepositeAmmount = getInputById('diposite-field');

    const prevDepositeAmmount = getElementValueById('diposite-total')
    // console.log(prevDepositeAmmount);

    const newDepositeTotal = newDepositeAmmount + prevDepositeAmmount;

    setElementValueById('diposite-total', newDepositeTotal);  

    const prevBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = prevBalanceTotal + newDepositeAmmount;
    setElementValueById('balance-total', newBalanceTotal);
})
