const earningsInfo = {
    tipTotal: 0,
    mealCount: 0,
    subtotal: 0,
    tip: 0,
}



function render (whereTo,str){
 
    $(whereTo).html(str);
}

function averageTip (){
    let calcHold = earningsInfo.tipTotal / earningsInfo.mealCount;
    return financial(calcHold);
}

function fncSubtotal (mealPrice, taxRate){
    //console.log(mealPrice, taxRate/100);
    let calcHold = mealPrice + mealPrice*(taxRate/100);
   earningsInfo.subtotal = financial(calcHold);
}

function fncTip (mealPrice, tipPercent){
    let calcHold = Number(mealPrice) * (Number(tipPercent)/100);
    earningsInfo.tip = financial(calcHold);
}

function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

function customerCharges(){
    let total = Number(earningsInfo.subtotal) + Number(earningsInfo.tip);
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
    earningsInfo.tipTotal = Number(earningsInfo.tipTotal) + Number(earningsInfo.tip);
    customerCharges();
    myEarningsInfo(); 
}

function btnSubmitClick(){
    $('.meal-Details-Form').submit(function (event){
        event.preventDefault();
        const mealPrice = $('#mealPriceInput').val();
        const taxRate = $('#taxRateInput').val();
        const tipPercent = $('#tipPercentInput').val();
        handleSubmitClick(Number(mealPrice), Number(taxRate), Number(tipPercent));
    })
}

function btnCancelClick(){
    $('.meal-Details-Form').on('click', '.Cancel', event =>{
    event.preventDefault();
    $('#mealPriceInput').val('');
    $('#taxRateInput').val('');
    $('#tipPercentInput').val('');
    });
}

function clearAll (){
   earningsInfo.tipTotal = 0;
   earningsInfo.mealCount = 0;
   earningsInfo.subtotal = 0;
   earningsInfo.tip = 0;
}

function btnResetClick(){
    $('.reset-container').on('click', '.resetButton', event =>{
    event.preventDefault();
    clearAll()
    customerCharges();
     $(myEarningsInfo);
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

