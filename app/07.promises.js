console.log('Topic: Promises');
// Task 01
// Создайте промис, который постоянно находится в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Используйте предыдущее задание. Продублируйте строчку с методом then


// Task 07
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и зарегистрируйте созданные функции.


// Task 08
// Используйте предыдущий код. Добавьте в функцию onSuccess генерацию исключения
// Обработайте данное исключение, используя catch. Обратите внимание,
// что метод print при этом не выполняется.


// Task 09
// Напишите функцию getPromiseData, которая принимает один параметр - промис. Функция получает
// значение промиса и выводит его в консоль
// Объявите объект со свойтвом name и значением Anna.
// Создайте врапер для этого объекта и вызовите для него функцию getPromiseData


// Task 10
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов
// и выведите в консоль


// Task 11
// Используйте предыдущее задание. Пусть теперь второй промис переходит в
// состояние rejected со значением "Promise Error". Измените код, чтобы обработать
// эту ситуацию.


// Task 12
// Создайте промис, который перейдет в состояние resolve через 5с и вернет строку
// 'Promise Data'.
// Создайте второй промис, который перейдет в состояние rejected по клику на
// кнопку "Cancel Promise". Добавьте обработчик для кнопки.
// Используя метод race организуйте "отмену промиса".

const p_12_1 = new Promise(resolve => {
    setTimeout(resolve, 5000, "Promise Data")
})

const p_12_2 = new Promise((reject) => {
    reject('Some Error');
})


document.querySelector('#btn-reject-promise').addEventListener('click', () => {
    p_12_2.catch((err) => console.log(err))
});

const p_12 = Promise.race([p_12_1, p_12_2])
    .then((message) => console.log(message))

// Task 13
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис переходит в состояние rejected со значением "Promise Error".
// Запустите оба эти промисы в параллель и получите результаты тех, которые завершаться успешно

const p_13_1 = new Promise(resolve => {
    setTimeout(resolve, 2000, {name: "Anna"})
})

const p_13_2 = Promise.reject('Promise Error');

const p13 = Promise.any([p_13_1, p_13_2])
    .then((message) => console.log(message))


// Task 14
// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// Второй промис возвращает дефолтный объект { name: "Unknown" } через 1с.
// Запустите оба эти промисы в параллель и получите результат того, который отработает первым

const p_14_1 = new Promise(resolve => {
    setTimeout(resolve, 2000, {name: "Anna"})
})

const p_14_2 = new Promise(resolve => {
    setTimeout(resolve, 1000, {name: "Unknown"})
})

const p14 = Promise.race([p_14_1, p_14_2])
    .then((message) => console.log(message))

