//Получаем элементы в переменные
var popup = document.getElementById("popup__1");
var popupContent = document.getElementById("content__1");
var popupClose = document.getElementById("close__1");
var form = document.getElementById("popup__form");
var emailInput = document.getElementById("popup__email");
var email;
//Создаем функции
function showPopup() {//Функция появления поп-апа
popup.style.right = "30px"; //Меняем положение
}
function confirmSubscribtion() {//Функция подписки
email = emailInput.val(); //Получаем адрес электронной почты из поля
popupContent.innerHTML = "<p>Спасибо!</p>";
setTimeout(closePopup, 1000);
return false;
}
function closePopup() {//Функция закрытия поп-апа
popup.style.right = "-3000000px"; //Меняем положение
}
//При нажатии на крестик вызываем функцию закрытия
popupClose.onclick = closePopup;
//При отправке формы вызываем функцию подписки
form.onsubmit = confirmSubscribtion;
//Устанавливаем таймер, который вызовет функцию открытия
//через 3000 миллисекунд (3 секунды) после загрузки страницы
setTimeout(showPopup, 3000);

