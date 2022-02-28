// let Contacts = function() {
//     this.getData = function() {
//         this.name = prompt('Введите совое ФИО');
//         this.age = +prompt('Введите совой возраст');
//         this.phone = prompt('Введите совой телефон');
//         this.mail = prompt('Введите совой email');

//         this.checkAge(); 
//     }

//     this.checkAge = function() {
//         if (this.age >= 18 & Number.isInteger(this.age)) {
//             return alert(this.name + ' ' + this.age + ' ' + this.phone + ' ' + this.mail)
//         }
//     }
    
//     this.addContacts = function() {
//         let objContacts = [this.name, this.age, this.phone, this.mail, this.country,this.gender];
//         console.log(objContacts);
//     }
    
// }

// let cont = new Contacts();
// cont.getData();
// console.log(cont);

// let ContAlex = function() {
//     // Contacts.apply(this); // на выходе в консоли ерунда
//     this.country = 'Minsk';
//     this.gender = 'm';

//     this.addContacts();
// }
// ContAlex.prototype = cont;

// let contAlex = new ContAlex();
// console.log(contAlex);




// let Contacts = function(data) {
//     this.data = data;
//     // let  contactsArr = [];
//     // this.addContacts = function(data) {
//     //     contactsArr.push(data);
//     // }   
   
// }

// let contacts = new Contacts({
//     name: prompt('Введите совое ФИО'),
//     age: +prompt('Введите совой возраст'),
//     phone: prompt('Введите совой телефон'),
//     mail: prompt('Введите совой email')
// })

// console.log(contactsArr)
// // Contacts.prototype.addContacts = function(data) {
// //     contactsArr.push(data);
// // }
// console.log(contacts)

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

// let Lightbulb = function (name) {
 
//     this.get = function () {
//         this.name = name;
//         this.power = +prompt('Введите мощность лампочки, Вт');
//         this.costEnergy = 0.209; //+prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
//         if (confirm('Включить лампочку?')) {
//             this.workTime = +prompt('Сколько времени работает лампочка? , ч');
//         } else {
//             this.workTime = 0;
//         };
 
//         this.operation();
//     };
 
//     this.operation = function () {
//         this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
//         this.show();
//     };
 
//     this.show = function () {
 
//         if (this.workTime == 0 || this.workTime == undefined) {
//             console.log('Лампочка "' + this.name + '" не включена');
//         } else {
//             console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
//         }
//     };
// };
 
// let lightBulb = new Lightbulb('Кухня');
// lightBulb.get();
 
// let lightBulb2 = new Lightbulb('Коридор');
// lightBulb2.get();
 
// let lightBulb3 = new Lightbulb('Ванная');
// lightBulb3.get();
 
// let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
// console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');