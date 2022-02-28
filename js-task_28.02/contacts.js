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

