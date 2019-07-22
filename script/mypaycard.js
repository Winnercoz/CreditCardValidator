const submitButton = document.querySelector('[data-input-num]');

const validate = ()=>{
    const dataCardNumber = document.getElementById('cardnumber').value;
    const firstDigit = dataCardNumber.toString()[0];
    
    //HERE WE ARE CHECKING TO VALIDATE
    if(firstDigit === '5' || firstDigit === '4'){
        // HERE LET CHECK FOR LENTH OF THE CARD
        if(dataCardNumber.length === 16){
            //IF THEY ARE 16 DIGITS ,LET CHECK FOR CARD TYPE
            if(firstDigit === '5'){
                alert('THIS IS A VALID MASTER CARD, YOU CAN NOW PROCEED');
            }
             else{
                 alert('THIS IS A VALID VISA CARD, YOU CAN NOW PROCEED')
             }
        }
                else{
                        alert('INCOMPLETE CARD NUMBER, PLEASE COMPLETE YOUR CARD NUMBERS');
                     }
    }else{
        alert('PLEASE THIS CARD TYPE IS NOT ACCEPTED HERE ,THANK YOU !!!')
    }
}

submitButton.addEventListener('click' ,validate);