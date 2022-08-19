function updateCaseNumber(isIncrease){
    const caseNumberFieldId = document.getElementById('case-number-field');
    const caseNumberStr = caseNumberFieldId.value;
    const previousCaseNumber = parseInt(caseNumberStr);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberFieldId.value = newCaseNumber;
    const casePrice = document.getElementById('case-price');
    const perCasePrice = 59;
    const newCasePrice = newCaseNumber * perCasePrice;
    casePrice.innerText = newCasePrice;

}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    updateCaseNumber(true);
    calculateTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    updateCaseNumber(false);
    calculateTotal();
})