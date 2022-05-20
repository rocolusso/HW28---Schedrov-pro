'use strict';

/*

Создайте объект calculator (калькулятор) с тремя методами:

1 read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
2 sum() (суммировать) возвращает сумму сохранённых значений.
3 mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


 */

const calculator = {

    read() {

        this.num1 = +prompt('input num1:');
        this.num2 = +prompt('input num2:');

        console.log(this);

        if(isNaN(this.num1) || isNaN(this.num2)) {
            return console.log( 'error')
        }
    },

    sum() {
        let sum = this.num1 + this.num2;
        return  console.log(sum) ;
    },


    mul(){
        let mult = this.num1 * this.num2;
        return  console.log(mult) ;
    }



};

calculator.read();
calculator.sum();
calculator.mul();