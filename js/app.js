let age1 = 20;

if (age1 < 18) {
    console.log("Несовершеннолетний");
} else if (age1 >= 18 && age1 <= 59) {
    console.log("Взрослый");
} else {
    console.log("Пенсионный возраст");
}

let points = 85;

if (points < 0 || points > 100) {
    console.log("Некорректное количество баллов");
} else if (points >= 90) {
    console.log("Отлично (5)");
} else if (points >= 75) {
    console.log("Хорошо (4)");
} else if (points >= 60) {
    console.log("Удовлетворительно (3)");
} else {
    console.log("Неудовлетворительно (2)");
}

const login = "admin";
const password = "12345";

const userLogin = prompt("Введите логин:");
const userPassword = prompt("Введите пароль:");

if (userLogin !== login) {
    alert("Пользователь не найден");
} else if (userPassword !== password) {
    alert("Неверный пароль");
} else {
    alert("Добро пожаловать!");
}

let number1 = 20;
let number2 = 5;
let operation = "+";

switch (operation) {
    case "+":
        console.log(number1 + number2);
        break;

    case "-":
        console.log(number1 - number2);
        break;

    case "*":
        console.log(number1 * number2);
        break;

    case "/":
        if (number2 === 0) {
            console.log("На ноль делить нельзя");
        } else {
            console.log(number1 / number2);
        }
        break;

    default:
        console.log("Неизвестная операция");
}

let age = 20;
let isRegistered = true;
let isBlocked = false;

if (age >= 18 && isRegistered === true && isBlocked === false) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}
