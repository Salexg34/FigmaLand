/**
 * обрабатывает функциональность бургер меню и управляет классами
 * @function
 */

export function handleBurgerMenu() {
    const body = document.querySelector('body');
    const header = document.querySelector('.header');

    document.querySelector('.header__burger-btn').addEventListener('click', function () {
        if (!body.classList.contains('lock-body')) {
            body.classList.add('lock-body');
            setTimeout(function () {
                header.classList.add('active');
            }, 200);
        } else {
            setTimeout(function () {
                body.classList.remove('lock-body');
            }, 500);
            header.classList.remove('active');
        }
    });
}
// let i = 0;

// let start = Date.now();

// export function count() {

//   // делаем тяжёлую работу
//   for (let j = 0; j < 1e9; j++) {
//     i++;
//   }

//   alert("Done in " + (Date.now() - start) + 'ms');
// }

// count();

// let i = 0;

// let start = Date.now();

// function count() {

//   // делаем часть тяжёлой работы (*)
//   do {
//     i++;
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//   } else {
//     setTimeout(count); // планируем новый вызов (**)
//   }

// }

// count();

// let i = 0;

// let start = Date.now();

// function count() {

//   // перенесём планирование очередного вызова в начало
//   if (i < 1e9 - 1e6) {
//     setTimeout(count); // запланировать новый вызов
//   }

//   do {
//     i++;
//   } while (i % 1e6 != 0);

//   if (i == 1e9) {
//     alert("Done in " + (Date.now() - start) + 'ms');
//   }

// }

// count();

// function count() {
//     for (let i = 0; i < 1e6; i++) {
//       i++;
//       progress.innerHTML = i;
//     }
//   }

//   count();

// let i = 0;

//   function count() {

//     // сделать часть крупной задачи (*)
//     do {
//       i++;
//       progress.innerHTML = i;
//     } while (i % 1e3 != 0);

//     if (i < 1e7) {
//       setTimeout(count);
//     }

//   }

//   count();

// console.log("Начало");
// setTimeout(() => {
//   console.log("Таймер завершился");
// }, 2000);
// console.log("Конец");

// const o = {
//     x: 10,
//     foo() {
//       for (var i = 0; i < 10; i++) {
//         setTimeout(function () {
//           console.log(i + this.x);
//           console.log(this);
//         }, 0);
//       }
//     }
//   }
  
//   o.foo();
  
//   const o = {
//     x: 10,
//     foo() { 
//         setTimeout(function () {
//             console.log(this.x)
//         })
//     }
    
// }
// o.foo();

// const badResult = () => {
//     for (let i = 0; i < 10; i++) {
//       setTimeout(function () {
//         console.log(i);
//       }, 10);
//     }
//   };
  
//   badResult(); // что будет выведено (не запуская код)? почему? как исправить?

// console.log("apple"); // 1 apple

// setTimeout(() => console.log("pear"), 0); // 6

// Promise.resolve("melon").then((res) => console.log(res)); // 4 melon 

// new Promise((resolve, reject) => {
//   console.log("orange"); // 2 orange
//   resolve("pineapple");
// }).then((res) => console.log(res)); // 5 

// console.log("lime"); // 3 lime

// 1. аналог lodash.invert
// { a: 1, foo: {}, bar: [], baz: () => ‘’ } => { 1: 'a',  ‘{}’: ‘foo’ }

const obj = {
  a: 1,
  foo() {
    return [];
  },
  bar: {}
};
 function invert (objToInvert) {
    // создаем пустой объект, в который будем передавать инвертированные значения и ключи
    const invertedObj = {};

    // проходим циклом по всем ключам и значениям объекта
  for (const key in objToInvert) {
    // проверяем содержит ли объект key как собственное свойство
    if (objToInvert.hasOwnProperty(key)) {
        // получаем значение по ключу
      const value = objToInvert[key];
      // инвертируем значение - ключ
      invertedObj[value] = key;
    }
  }
// возвращаем инвертированный объект
  return invertedObj;
}

 console.log(invert(obj));