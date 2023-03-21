document.getElementById('btn-diposite').addEventListener('click', function(){
    // console.log('btn clicked');
    const dipositeField = document.getElementById('diposite-field');
    const dipositeAmmountStr = dipositeField.value;
    // console.log(dipositeAmmountStr)
    const dipositeAmmount = parseFloat(dipositeAmmountStr);

    const prevDepostieField = document.getElementById('diposite-total');
    const prevDepostieFieldStr = prevDepostieField.innerText;
    const prevDeposite = parseFloat(prevDepostieFieldStr)

    const totalDeposite = prevDeposite + dipositeAmmount;
    prevDepostieField.innerText = totalDeposite;

    const balanceField = document.getElementById('balance-total');
    const currentBalanceStr = balanceField.innerText;
    const currentBalance = parseFloat(currentBalanceStr);
    const totalBalance = currentBalance + dipositeAmmount;
    balanceField.innerText = totalBalance;
    dipositeField.value = '';
})