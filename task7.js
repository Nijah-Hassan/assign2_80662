var firstNumber = parseInt(prompt("enter the First Number"));
var secondNumber = parseInt(prompt("enter the Second Number"));

var operation= prompt("enter the Opearation +,-,*,/,&");

function add(a,b){
 var result = a+b;
 return result;
}

function dis(a,b){
    var result = a-b;
    return result;
   }

   function mult(a,b){
    var result = a*b;
    return result;
   }

   function div(a,b){
       var result;

            if(b==0){
                result="you can't make second value as 0";
            }else{
                result=a/b;
            }
            return result;
    
}

var result;
   function mud(a,b){
    var result = a%b;
    return result;
   
}

if(operation== "+"){
       result=add(firstNumber,secondNumber);

}else if (operation=="-"){
       result=dis(firstNumber,secondNumber);
}else if(operation=="*"){
        result=mult(firstNumber,secondNumber);   
}else if(operation=="/"){
    result=div(firstNumber,secondNumber);
}else if(operation=="%"){
    result=mud(firstNumber,secondNumber);
}else{
    result= "enter valid operation"
}

document.write(result);
