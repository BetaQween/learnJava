
/**
 * Created by Liza on 8/26/2016.
 */
//Напишите конструктор User для создания объектов:
//
//    С приватными свойствами имя firstName и фамилия surname.
//    С сеттерами для этих свойств.
//    С геттером getFullName(), который возвращает полное имя.
//    Должен работать так:
"use strict";

//    function User() {
//        var firstName;
//        var surName;
//
//        this.setFirstName = function(firstname){
//            firstName = firstname;
//        };
//        this.setSurname = function(surname){
//            surName = surname;
//        };
//        this.getFullName = function(){
//            return firstName + " "+ surName;
//        }
//    }
//
//var user = new User();
//user.setFirstName("Петя");
//user.setSurname("Иванов");
//console.log( user.getFullName() ); // Петя Иванов


function CoffeeMachine(power, capacity) {
    //...
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        //waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };
    this.getPower = function(){
        return power;
    }

}
var coffee = new CoffeeMachine(1000, 400);
console.log(coffee.getPower());