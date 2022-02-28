
let doc = document;

function delivery() {
    let fieldName = null,
    fieldPhone = null, 
    fieldEmail = null,
    fieldDeliveryMethods = null;
    fieldDateCurrent = null,
    fiedDistA = null,
    fiedDistB = null,
    fiedDateDeparture = null,
    fiedDateDelivery = null;
let dataArr = [fieldName, fieldPhone, fieldEmail, fieldDeliveryMethods, fieldDateCurrent, fiedDistA, fiedDistB, fiedDateDeparture, fiedDateDelivery];

let distances = [ 
    {
        a: 'Брест',
        b: 'Гомель',
        d: 521
    },
    {
        a: 'Брест',
        b: 'Гродно',
        d: 351
    },
    {
        a: 'Брест',
        b: 'Витебск',
        d: 452
    },
    {
        a: 'Брест',
        b: 'Минск',
        d: 275
    },
    {
        a: 'Брест',
        b: 'Могилев',
        d: 385
    },
    {
        a: 'Гомель',
        b: 'Гродно',
        d: 351
    },
    {
        a: 'Гомель',
        b: 'Витебск',
        d: 452
    },
    {
        a: 'Гомель',
        b: 'Минск',
        d: 275
    },
    {
        a: 'Гомель',
        b: 'Могилев',
        d: 385
    },
    {
        a: 'Гродно',
        b: 'Витебск',
        d: 385
    },
    {
        a: 'Гродно',
        b: 'Минск',
        d: 385
    },
    {
        a: 'Гродно',
        b: 'Могилев',
        d: 385
    },
    {
        a: 'Витебск',
        b: 'Минск',
        d: 385
    },
    {
        a: 'Витебск',
        b: 'Могилев',
        d: 385
    },
    {
        a: 'Минск',
        b: 'Могилев',
        d: 385
    }
  
];

let prices = [
    {
        method: 'Самолет',
        price: 800

    },
    {
        method: 'Такси',
        price: 650

    },
    {
        method: 'Частный водитель',
        price: 750

    },
    {
        method: 'Пеший курьер',
        price: 550

    },

]

    function showForm() {
    
        let deliveryMethods = ['Самолет', 'Такси', 'Частный водитель', 'Пеший курьер'];
        let destinations = ['Минск', 'Гродно', 'Брест','Витебск', 'Могилев', 'Гомель'];
    
        let form = doc.createElement('form');
        form.setAttribute('class', 'form');
    
        let fio = doc.createElement('input');
        fio.setAttribute('type', 'text');
        fio.setAttribute('name', 'fio');
        fio.setAttribute('placeholder', 'ФИО');
        fio.setAttribute('required', 'true');
    
    
        let phone = doc.createElement('input');
        phone.setAttribute('type', 'tel');
        phone.setAttribute('name', 'phone');
        phone.setAttribute('placeholder', 'Телефон');
        phone.setAttribute('required', 'true');
    
        let mail = doc.createElement('input');
        mail.setAttribute('type', 'email');
        mail.setAttribute('name', 'mail');
        mail.setAttribute('placeholder', 'Ваш email');
        mail.setAttribute('required', 'true');
    
        let deliveryMethod = doc.createElement('select');
        deliveryMethod.setAttribute('name', 'selectList');
        deliveryMethod.setAttribute('required', 'true');
    
            let deliveryMethodOption = createSelect(deliveryMethods);
            deliveryMethod.append(deliveryMethodOption);
            deliveryMethodOption.map(option => {
                deliveryMethod.append(option);
            })
    
        let today = doc.createElement('input');
        today.setAttribute('type', 'datetime');
        today.value = new Date();
    
    
        let departurePoint = doc.createElement('select');
        departurePoint.setAttribute('required', 'true');
            // for(let i=0; i<=destinations.length; i++) {
            //     let option = doc.createElement('option');
            //     option.setAttribute('value', destinations[i]);
            //     option.innerText = destinations[i];
            //     departurePoint.append(option);
            // }
            function createSelect(arr) {
                return arr.map(elem => {
                    let option = doc.createElement('option');
                    option.setAttribute('value', elem);
                    option.innerText = elem;
                    return option;
                })
                }
            let departurePointOption = createSelect(destinations);
            departurePoint.append(departurePointOption);
            departurePointOption.map(option => {
                departurePoint.append(option);
            })
        
    
        let destinationPoint = doc.createElement('select');
        destinationPoint.setAttribute('required', 'true');
    
            let destinationPointOption = createSelect(destinations);
            destinationPoint.append(destinationPointOption);
            destinationPointOption.map(option => {
                destinationPoint.append(option);
            })
    
        let departureDate = doc.createElement('input');
        departureDate.setAttribute('type', 'date');
        departureDate.setAttribute('required', 'true');
    
        let destinationDate = doc.createElement('input');
        destinationDate.setAttribute('type', 'date');
        destinationDate.setAttribute('required', 'true');
    
        let calculate = doc.createElement('button');
        calculate.setAttribute('class', 'calculate');
        calculate.setAttribute('type', 'submit');
        calculate.innerHTML = 'Рассчитать стоимость';
        form.addEventListener('submit', (e) => {
            e.preventDefault(e, form, departurePoint, destinationPoint);
        })

            function formHandler (e, container) {
                e.preventDefault(); 
                form.children.map(elem, i => {
                if(elem.tagName != 'BUTTON') dataArr[i] = elen.value;
            })
            dataArr = [fieldName, fieldPhone, fieldEmail, fieldDeliveryMethods, fieldDateCurrent, fiedDistA, fiedDistB, fiedDateDeparture, fiedDateDelivery];
            let price = calculation();
            showCalculation(price)
        }
            console.log(dataArr);
    
        form.append(fio, phone, mail, deliveryMethod, today, departurePoint, destinationPoint,  departureDate, destinationDate, calculate);
        doc.body.append(form);    
    

    }
    function calculation () {
        let distA = fiedDistA,
            distB = fiedDistB,
            method = fieldDeliveryMethods;
        let dist = distances.find(elem =>
           {
               if((elem.a == distA || elem.b == distA) && (elem.a == distB || elem.b == distB)) {
                   return elem;
               }
           } )
         let coof = prices.find(elem => elem.method == method ? elem : null)
         return dist.d * coof.price;  
    }

    function showCalculation(price) {
        let priceShow = doc.createElement('div');
        priceShow.setAttribute('class', 'price');
        priceShow.innerText = `Стоимость доставки составляет: ${price}`;

        doc.body.append(priceShow)
    }

    showForm ();
}

delivery();
window.addEventListener('DOMConnectLoaded', delivery)

