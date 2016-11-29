'use strict'

function printNumbersInterval(){

    var i = 1;
    var timerId = setInterval(function(){
        console.log(i);
        if(i == 20){
            clearInterval(timerId);
        }
        i++;
    },1000);
}

printNumbersInterval();