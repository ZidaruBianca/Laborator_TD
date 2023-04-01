var result;
//var firstN = parseFloat($("#firstNumber").val());
//parseInt(document.getElementById("firstNumber").value,10);

//parseInt(document.getElementById("secondNumber").value,10);
//document.getElementsByName("secondNumber").onblur;
//alert(firstN);
//var secondN = document.querySelector('secondNumber').value;
//alert(secondN);
function printValue(divId,value){
    $("#"+divId).html(value);
}
printValue("result",0);
$("#sum").on('click',add);
$("#dif").on('click',difference);
$("#multi").on('click',multiply);
$("#div").on('click', division);
function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }
function add(){
    var firstN = parseFloat($("#firstNumber").val());
    var secondN = parseFloat($("#secondNumber").val());
    printValue("result", firstN+secondN);
}
function difference(){
    var firstN = parseFloat($("#firstNumber").val());
    var secondN = parseFloat($("#secondNumber").val());
    printValue("result", firstN-secondN);
}
function multiply(){
    var firstN = parseFloat($("#firstNumber").val());
    var secondN = parseFloat($("#secondNumber").val());
    printValue("result", firstN*secondN);

}
function division(){
    var firstN = parseFloat($("#firstNumber").val());
    var secondN = parseFloat($("#secondNumber").val());
    printValue("result", firstN/secondN);
}