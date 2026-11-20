
const login = "admin";
const password = "2008";

const userLogin = prompt("Введите логин:")
const userPassword = prompt("Введите пароль:")

if (userLogin !== login) {
    alert("Пользователь не найден");
} else if (userPassword !== password) {
    alert("Неверный пароль");
} else {
    alert("Добро пожаловать!");
}

