$(document).ready(function() {
    $('#calculate').click(function() {
        var firstNumberText =  $('#firstNumber').val();
        var secondNumberText =  $('#secondNumber').val();

        var firstNumber = parseInt(firstNumberText);
        var secondNumber = parseInt(secondNumberText);
        var operator = $('#operator').val();
        var result ;

        switch(operator){
            case '+':
                result = firstNumber + secondNumber;
                break;
            case '-':
                result = firstNumber - secondNumber;
                break;
            case '*':
                result = firstNumber * secondNumber;
                break;
            case '/':
                result = firstNumber / secondNumber;
                break;
            case '%':
                result = firstNumber % secondNumber;
                break;
            default:
                result = " operatia nu exista";          
        }
        $('#result').text(result);
    });
});