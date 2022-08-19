function updatePhoneNumber(isIncrease){
    const phoneNumberFieldId = document.getElementById('phone-number-field');
    const phoneNumberStr = phoneNumberFieldId.value;
    const previousPhoneNumber = parseInt(phoneNumberStr);
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = previousPhoneNumber + 1;
    }
    else{
        newPhoneNumber = previousPhoneNumber - 1;
    }
    phoneNumberFieldId.value = newPhoneNumber;
    const phonePrice = document.getElementById('phone-price');
    const perPhonePrice = 1219;
    const newPhonePrice = newPhoneNumber * perPhonePrice;
    phonePrice.innerText = newPhonePrice;

}

document.getElementById('btn-phn-plus').addEventListener('click', function(){
    updatePhoneNumber(true);
    calculateTotal();
    
})
document.getElementById('btn-phn-minus').addEventListener('click', function(){
    updatePhoneNumber(false);
    calculateTotal();
    

})