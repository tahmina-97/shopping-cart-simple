//calculate subtotal

function getElementsValueById(elementId){
    const getElementId = document.getElementById(elementId);
    const getElementIdValueStr = getElementId.innerText;
    const getElementIdValue = parseFloat(getElementIdValueStr);
    return getElementIdValue;
}

function calculateTotal(){
    const currentPhoneTotal = getElementsValueById('phone-price');
    const currentCaseTotal = getElementsValueById('case-price');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = currentSubTotal;
    const taxAmount =parseFloat((currentSubTotal * 0.1).toFixed(2)) ;
    const taxElement = document.getElementById('tax');
    taxElement.innerText = taxAmount;
    const total = currentSubTotal + taxAmount;
    const totalElement = document.getElementById('total');
    totalElement.innerText = total;

    
}