function getPin(){
    const randomPin=Math.round(Math.random()*10000);
    const stringRangomPin=randomPin+'';
    if(stringRangomPin.length==4){
        return randomPin;
    }
    else{
        // console.log('pinipi',randomPin);
        return getPin();
    }
}
function generatePin(){
    randomPin=getPin()
    document.getElementById('displayPin').value=randomPin;
}
document.getElementById('keyPad').addEventListener('click',function(event){
    const number=event.target.innerText;
    const oldNumber=document.getElementById('displayKey');
    if(isNaN(number)){
        if(number=='C'){
            oldNumber.value='';
        }
    }
    else{
        const priviusNumber=oldNumber.value;
    const newNumbers=priviusNumber+number;
    oldNumber.value=newNumbers
    }
    
})