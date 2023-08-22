document.getElementById('card1').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card1-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('K. Accessories');
})
document.getElementById('card2').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card2-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('K. Accessories');
})
document.getElementById('card3').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card3-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Home Cooker');
})
document.getElementById('card4').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card4-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Sports Back Cap');
})
document.getElementById('card5').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card5-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Full Jersey Set');
})
document.getElementById('card6').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card6-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Sports cates');
})
document.getElementById('card7').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card7-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Single Relax Chair');
})
document.getElementById('card8').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card8-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Children play');
})
document.getElementById('card9').addEventListener('click', function () {
    const card1Amount = getCardElementValueById('card9-price');
    const previousTotal = getTotalPrice('total-price');
    const currentTotal = previousTotal + card1Amount;
    setTotalPrice('total-price', currentTotal);
    addToCalculationEntry('Flexible Sofa');
})


var total = 0;
document.getElementById('btn-apply').addEventListener('click', function () {
    const text = document.getElementById('input-text');
    const text1=text.value;
    if (text1 === 'SELL200') {
        const discount = document.getElementById('discount-price');
        const cal = (total * 20) / 100;
        const totalDiscount = cal.toFixed(2);
        discount.innerText = totalDiscount;

        const totalPay = document.getElementById('total-pay');
        const cal1 = total - totalDiscount;
        const payTotal = cal1.toFixed(2);
        totalPay.innerText = payTotal;
    }
    else {
        alert('Put SELL200 coupon code for discount');
    }
})

//for modal
  document.getElementById('btn-Go-home').addEventListener('click',function(){
    document.getElementById('total-price').innerText="0.00";
    document.getElementById('discount-price').innerText = "0.00";
    document.getElementById('total-pay').innerText= "0.00";
    document.getElementById('calculation-entry').innerHTML = " ";
    document.getElementById('input-text').value = "";

    document.getElementById('btn-apply').style.backgroundColor='#A0AEC0';
    document.getElementById('btn-purchase').style.backgroundColor='#A0AEC0';

    
  })

//reuse code
function getCardElementValueById(elementId) {
    const cardField = document.getElementById(elementId);
    const amountString = cardField.innerText;
    const amount = parseFloat(amountString);
    return amount;
}

function getTotalPrice(elementId) {
    const totalPrice = document.getElementById(elementId);
    const previousTotalString = totalPrice.innerText;
    const previousTotal = parseFloat(previousTotalString);
    return previousTotal;
}

function setTotalPrice(elementId, newValue) {
    const totalPrice = document.getElementById(elementId);
    newValueFinal = newValue.toFixed(2);
    const purchaseButton = document.getElementById('btn-purchase');
    if (newValueFinal > 0) 
    {
         purchaseButton.removeAttribute('disabled'); 
         purchaseButton.style.backgroundColor='#E527B2';
    }
    const applyButton = document.getElementById('btn-apply');
    if (newValueFinal >= 200) {
        applyButton.removeAttribute('disabled');
        total = newValueFinal;
        applyButton.style.backgroundColor='#E527B2';
    }
    totalPrice.innerText = newValueFinal;
}

function addToCalculationEntry(cardName) {
    console.log(cardName);
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = ` ${count + 1}. ${cardName}`;
    calculationEntry.appendChild(p);

}