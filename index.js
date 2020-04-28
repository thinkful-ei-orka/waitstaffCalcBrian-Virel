const earningsInfo = {
    tipTotal: 0.00,
    mealCount: 0,
    subtotal: 0.00,
    tip: 0.00,
}



function render (whereTo,str){
 
    $(whereTo).html(str);
}

function averageTip (){
    return earningsInfo.tipTotal / earningsInfo.mealCount;
}

function fncSubtotal (mealPrice, taxRate){
   earningsInfo.subtotal = mealPrice + taxRate;
}

function fncTip (mealPrice, tipPercent){
    earningsInfo.tip = mealPrice * (tipPercent/100);
}


function customerCharges(){
    let total = earningsInfo.subtotal + earningsInfo.tip;
    render('.customerCharges', `<p class="js-subtotal">Subtotal: ${earningsInfo.subtotal} </p>
    <p class="js-tip">Tip: ${earningsInfo.tip} </p>
    <hr class="hr12">
    <p class="total">Total: ${total}</p>`);
}

function myEarningsInfo(){
    let currentAvgTip = averageTip();
    render('.myEarnings',`<p class="js-tip-total">Tip Total: ${earningsInfo.tipTotal}</p>
        <p class="js-meal-count">Meal count: ${earningsInfo.mealCount}</p>
        <hr class="hr12">
        <p class="js-average-tip">Average Tip Per Meal: ${currentAvgTip}</p>`);
}

function handleSubmitClick(mealPrice, taxRate, tipPercent){
    //change tipTotal mealCount
    fncSubtotal(mealPrice, taxRate);
    fncTip(mealPrice, tipPercent);
    earningsInfo.mealCount += 1;
    customerCharges();
    myEarningsInfo(); 
}

function btnSubmitClick(){
    $('.meal-Details-Form').submit(function (event){
        event.preventDefault();
        const mealPrice = $('#mealPriceInput').val();
        const taxRate = $('#taxRateInput').val();
        const tipPercent = $('#tipPercentInput').val();
        handleSubmitClick(mealPrice, taxRate, tipPercent);
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
    customerCharges();
     $(myEarningsInfo);
    //$(render);
}

$(main);

