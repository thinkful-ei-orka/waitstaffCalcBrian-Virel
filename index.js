const earningsInfo = {
    tipTotal: 0.00,
    mealCount: 0,
    subtotal: 0,
    tip: 0,
}

function render (){

}

function averageTip (){

}

function subtotal (mealPrice, taxRate){
    earningsInfo.subtotal = mealPrice + taxRate;
}

function tip (mealPrice, tipPercent){
    earningsInfo.tip = mealPrice * (tipPercent/100);
}

function mealDetail(){

}

function customerCharges(){

}

function myEarningsInfo(){

}

function tipTotal(){

}

function handleSubmitClick(mealPrice, taxRate, tipPercent){
    //change tipTotal mealCount
    subtotal(mealPrice, taxRate);
    tip(mealPrice, tipPercent);
    mealCount += 1;
    
}

function btnSubmitClick(){
    $('.meal-Details-Form').submit(function (event){
        event.preventDefault();
        const mealPrice = $('.mealPriceInput').val();
        const taxRate = $('.taxRateInput').val();
        const tipPercent = $('.tipPercentInput').val();
    })
}

function btnCancelClick(){
    $('.meal-Details-Form').on('click', '.Cancel', event =>{
    event.preventDefault();
    
    });
}

function btnResetClick(){
    $('.reset-container').on('click', '.resetButton', event =>{
    event.preventDefault();
    
    });
}
function main (){
    btnSubmitClick();
    btnCancelClick();
    btnResetClick();
}

$(main);

const newItemName = $('.js-shopping-list-entry').val();