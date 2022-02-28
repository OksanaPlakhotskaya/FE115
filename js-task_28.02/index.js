
let Kettle = function (name) {

    this.name = name;
    this.power = prompt('Введите мощность чайника');
    this.volume =  prompt('Введите объем чайника');
    this.amount =  prompt('Введите количество воды в чайнике');
    

    this.status = false; 
    this.enable = function(){
        this.status = true; 
    }
    this.disable = function(){
        this.status = false; 
    }
    // this.getStatus = function() {
    //     // return this.status;
    //     if(this.status == true) {this.boiling = boilingWater()}
    // else {
    //     this.boiling = 0;
    // };
    // }

    // this.boilingWater = function() {
    //     this.result = 4200*1*this.amount*80/this.power;

    //     this.show();
    // };
 
    // this.show = function () {
 
    //     if (this.boiling == 0 || this.boiling == undefined) {
    //         console.log('Чайник "' + this.name + '" выключен');
    //     } else {
    //         console.log('Чайник "' + this.name + '" закипит - ' + this.result + 'с');
    //     }
    // };
}
let kettle = new Kettle('Braun');
console.log(kettle)
kettle.enable();
// console.log(kettle.getStatus());
// console.log(kettle.show());

let Teapot = function(name) {
    Kettle.apply(this,arguments);

    let waterAmount = 0;
    this.setWater = function(amount) {
        if(amount > 0 && amount <= volume) waterAmount = amount;
        else waterAmount = 0;
    }

    this.getWater = function() {
        return waterAmount;
    }
}

let teapot = new Teapot ('Xiaomi')
console.log(teapot);
teapot.setWater(amount);
console.log(teapot.getWater());
