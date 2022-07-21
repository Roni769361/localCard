// document.getElementById("PhonePluseBtn").addEventListener("click", function(){
//     // const PhoneInput = document.getElementById("PhoneInput");
//     // const PhoneInputNo = parseFloat(PhoneInput.value);
//     // const Number = PhoneInputNo +1;
//     // PhoneInput.value = Number;

//     // const PhonePrice = document.getElementById("PhonePrice");
//     // const PriceValue = Number * 1219;
//     // PhonePrice.innerText = PriceValue;
//     ItemPriceUpAndDown("PhoneInput", true);
// })

// document.getElementById("PhoneMinusBtn").addEventListener("click", function(){
//     // const PhoneInput = document.getElementById("PhoneInput");
//     // const PhoneInputNo = parseFloat(PhoneInput.value);
//     // const Number = PhoneInputNo -1;
//     // PhoneInput.value = Number;

//     // const PhonePrice = document.getElementById("PhonePrice");
//     // const PriceValue = Number * 1219;
//     // PhonePrice.innerText = PriceValue;
//     ItemPriceUpAndDown("PhoneInput", false);
// })

function ItemPriceUpAndDown(id, price, Isincrease){
    const PhoneInput = document.getElementById(id);
    const PhoneInputNo = parseFloat(PhoneInput.value);
    // const Number = PhoneInputNo -1;
    let Number = PhoneInputNo;
    if(Isincrease == false && PhoneInputNo >0){
        Number = PhoneInputNo -1;
    }
    else if(Isincrease == true){
        Number = PhoneInputNo +1;
    }
    PhoneInput.value = Number;

    const PhonePrice = document.getElementById(price);
    // const PriceValue = Number * 1219;
    let PriceValue = Number;
    if(id == "PhoneInput"){
        PriceValue = Number * 1219;
    }
    else if(id == "CaseInput"){
        PriceValue = Number * 59;
    }
    PhonePrice.innerText = PriceValue;
    CalculateTotal();
}

function CalculateTotal(){
    const PhoneCountNo = GetInputValu("PhoneInput");

    // const CaseCount = document.getElementById('CaseInput');
    // const CaseCountNo = parseFloat(CaseCount.value);
    const CaseCountNo = GetInputValu('CaseInput');

    const Subtotal = PhoneCountNo * 1219 + CaseCountNo * 59;
    const SubtotalText = document.getElementById("subtotaltaka");
    SubtotalText.innerText = Subtotal;

    const txt = Math.round(Subtotal * 0.1);

    // console.log(txt);
    document.getElementById("txttaka").innerText =txt;

    const totalTaka = Subtotal + txt;
    document.getElementById("GreandTotal").innerText = totalTaka;
}

function GetInputValu(id){

    const ProductInputCount = document.getElementById(id);
    const ProductInputCountNo = parseFloat(ProductInputCount.value);
    return ProductInputCountNo;


}