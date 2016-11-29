/**
 * Created by Liza on 8/29/2016.
 */
"use strict";
function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}
//Создайте класс для холодильника Fridge(power),
//    наследующий от Machine, с приватным свойством food и методами addFood(...), getFood():

function Fridge(power) {

    Machine.apply(this, arguments);

    var food = [];
    //Публичный метод addFood(item) добавляет в массив food новую еду,
    //    доступен вызов с несколькими аргументами addFood(item1, item2...)
    //для добавления нескольких элементов сразу.

    this.addFood = function () {

        //Если холодильник выключен, то добавить еду нельзя, будет ошибка.
        if(!this._enabled){
            throw new Error('holodilnik vykluchen');
        }
        //Максимальное количество еды ограничено power/100,
        // где power – мощность холодильника, указывается в конструкторе.
        // При попытке добавить больше – будет ошибка
        if(food.length + arguments.length > this._power/100){
            throw new Error('kol-vo edy ne dopustimo');
        }else {
            for (var i = 0; i < arguments.length; i++) {
                food.push(arguments[i]);
            }
        }
    };
    this.getFood = function () {
        return food.slice();
    };
}
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");
fridge.addFood('ghlag');
console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье